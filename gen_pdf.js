const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  try {
    const browser = await puppeteer.launch({
      executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    const htmlPath = 'file:///' + path.resolve(__dirname, 'Manikanta_Srighakollapu_Resume.html').replace(/\\/g, '/');
    await page.goto(htmlPath, { waitUntil: 'networkidle0' });
    await page.pdf({
      path: path.resolve(__dirname, 'Manikanta_Srighakollapu_Resume.pdf'),
      format: 'A4',
      printBackground: true,
      margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' }
    });
    console.log('PDF_GENERATED_SUCCESSFULLY');
    await browser.close();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
