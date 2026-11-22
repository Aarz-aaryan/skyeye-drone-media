import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function runAudit() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });
  const page = await context.newPage();

  const consoleMsgs = [];
  const pageErrors = [];
  const failedRequests = [];
  const allRequests = [];
  const responses = [];

  page.on('console', msg => {
    consoleMsgs.push({ type: msg.type(), text: msg.text() });
  });

  page.on('pageerror', err => {
    pageErrors.push({ message: err.message, stack: err.stack });
  });

  page.on('request', req => {
    allRequests.push({ url: req.url(), method: req.method() });
  });

  page.on('requestfailed', req => {
    failedRequests.push({ url: req.url(), errorText: req.failure()?.errorText });
  });

  page.on('response', res => {
    const status = res.status();
    if (status >= 400) {
      responses.push({ url: res.url(), status: res.status(), statusText: res.statusText() });
    }
  });

  console.log('Navigating to website...');
  try {
    const response = await page.goto('https://skyeye-drone-media.vercel.app', {
      waitUntil: 'networkidle',
      timeout: 30000
    });
    
    console.log(`Navigation complete. Response status: ${response ? response.status() : 'null'}`);
    
    // Wait for any animations / dynamic rendering
    await page.waitForTimeout(3000);

    const title = await page.title();
    
    // Extract text content of the body
    const bodyText = await page.evaluate(() => document.body.innerText);
    const htmlContent = await page.evaluate(() => document.body.innerHTML);

    // Check contact info presence
    const emailToFind = 'info@skyeyeaerial.com';
    const phoneToFind = '(267) 555-0147';
    
    const emailFound = bodyText.includes(emailToFind) || htmlContent.includes(emailToFind);
    const phoneFound = bodyText.includes(phoneToFind) || htmlContent.includes(phoneToFind);

    // Find broken images (images with naturalWidth === 0 or that failed to load)
    const brokenImages = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs.map(img => ({
        src: img.src,
        alt: img.alt,
        visible: img.offsetWidth > 0 && img.offsetHeight > 0,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        complete: img.complete,
        isBroken: img.complete && (typeof img.naturalWidth === 'undefined' || img.naturalWidth === 0)
      })).filter(img => img.isBroken || !img.complete);
    });

    // Check for obvious UI/UX issues or empty components
    const rootInfo = await page.evaluate(() => {
      const root = document.getElementById('root');
      if (!root) return { exists: false };
      return {
        exists: true,
        childrenCount: root.children.length,
        innerHTML: root.innerHTML.substring(0, 1000)
      };
    });

    // Save full snapshot screenshot
    const screenshotPath = path.resolve(process.env.AUDIT_OUTPUT_DIR || 'artifacts', 'screenshot.png');
    fs.mkdirSync(path.dirname(screenshotPath), { recursive: true });
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Screenshot saved to ${screenshotPath}`);

    const auditResult = {
      title,
      responseStatus: response ? response.status() : null,
      emailFound,
      phoneFound,
      rootInfo,
      consoleMsgs: consoleMsgs.filter(m => m.type === 'error'),
      pageErrors,
      failedRequests,
      responses4xx5xx: responses,
      brokenImages,
      bodyTextLength: bodyText.length,
      snippet: bodyText.substring(0, 1000)
    };

    console.log('=== AUDIT RESULT ===');
    console.log(JSON.stringify(auditResult, null, 2));

  } catch (error) {
    console.error('Audit failed with error:', error);
  } finally {
    await browser.close();
  }
}

runAudit();
