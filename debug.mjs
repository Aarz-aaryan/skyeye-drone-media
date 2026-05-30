import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

const errors = [];
const warnings = [];
page.on('console', msg => {
  if (msg.type() === 'error') errors.push(msg.text());
  if (msg.type() === 'warning') warnings.push(msg.text());
});
page.on('pageerror', err => errors.push('PAGE ERROR: ' + err.message));

await page.goto('https://skyeye-drone-v2.vercel.app', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(3000);

const allConsole = [];
page.on('console', msg => allConsole.push(`[${msg.type()}] ${msg.text()}`));

// Get all styled-components errors
const scErrors = await page.evaluate(() => {
  const errors = [];
  // Check if styled-components threw
  if (window.__styledComponentsError__) {
    errors.push(window.__styledComponentsError__);
  }
  return errors;
});

console.log('=== ERRORS ===');
errors.forEach(e => console.log(e));
console.log('=== WARNINGS ===');
warnings.slice(0, 5).forEach(w => console.log(w));
console.log('=== STYLED ERRORS ===');
console.log(scErrors);

await browser.close();
