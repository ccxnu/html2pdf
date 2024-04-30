import path from "path";
import puppeteer from "puppeteer";

export const generatePdf = async (type, link) => {
  // Browser actions & buffer creator
  const browser = await puppeteer.launch();

  if (type === "url") {
    const page = await browser.newPage();
    await page.goto(link);
    const pdf = await page.pdf();
    await browser.close();
    // Return Buffer
    return pdf;
  }

  if (type === "base64") {
    const page = await browser.newPage();
    await page.goto(`data:text/html;base64,${link}`);
    const pdf = await page.pdf();
    await browser.close();
    // Return Buffer
    return pdf;
  }
};

export const generatePdfFromLocalFile = async ({ id }) => {
  // Browser actions & buffer creator
  const browser = await puppeteer.launch();
  const filePath = path.resolve(process.cwd(), `./${id}.html`);
  const page = await browser.newPage();
  await page.goto(`file:///${filePath}`);
  const pdf = await page.pdf();
  await browser.close();
  return pdf;
};
