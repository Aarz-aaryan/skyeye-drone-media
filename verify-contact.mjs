import { chromium } from 'playwright';

async function verifyContactInfo() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://skyeye-drone-media.vercel.app', { waitUntil: 'networkidle' });

  const contacts = await page.evaluate(() => {
    const bodyText = document.body.innerText;
    
    // Find paragraphs/divs containing the email or phone
    const elementsWithEmail = Array.from(document.querySelectorAll('*'))
      .filter(el => el.children.length === 0 && el.textContent.includes('info@skyeyeaerial.com'))
      .map(el => ({ tag: el.tagName, text: el.textContent, className: el.className }));
      
    const elementsWithPhone = Array.from(document.querySelectorAll('*'))
      .filter(el => el.children.length === 0 && el.textContent.includes('(267) 555-0147'))
      .map(el => ({ tag: el.tagName, text: el.textContent, className: el.className }));

    return {
      elementsWithEmail,
      elementsWithPhone
    };
  });

  console.log('=== CONTACT INFO VERIFICATION ===');
  console.log(JSON.stringify(contacts, null, 2));
  await browser.close();
}

verifyContactInfo();
