import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

const errors = [];
page.on('console', msg => {
  if (msg.type() === 'error') errors.push(msg.text());
});
page.on('pageerror', err => errors.push(err.message));

await page.goto('https://skyeye-drone-v2.vercel.app', { waitUntil: 'networkidle', timeout: 30000 });

const title = await page.title();
const bodyText = await page.evaluate(() => document.body.innerText.substring(0, 500));
const rootContent = await page.evaluate(() => {
  const root = document.getElementById('root');
  return root ? root.innerHTML.substring(0, 200) : 'NO ROOT';
});

console.log('TITLE:', title);
console.log('BODY TEXT:', bodyText);
console.log('ROOT CONTENT:', rootContent);
console.log('ERRORS:', errors.length ? errors.join('\n') : 'NONE');

await browser.close();
