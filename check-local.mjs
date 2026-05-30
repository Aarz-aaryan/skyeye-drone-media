import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

const errors = [];
page.on('console', msg => {
  if (msg.type() === 'error') errors.push(msg.text());
});
page.on('pageerror', err => errors.push('PAGE ERROR: ' + err.message));

await page.goto('http://localhost:3001', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(3000);

const title = await page.title();
const bodyText = await page.evaluate(() => document.body.innerText.substring(0, 300));
const rootChildren = await page.evaluate(() => document.getElementById('root')?.children?.length || 0);

console.log('TITLE:', title);
console.log('ROOT CHILDREN:', rootChildren);
console.log('BODY TEXT:', bodyText);
console.log('ERRORS:', errors.length ? errors.slice(0, 3).join('\n') : 'NONE');

await browser.close();
