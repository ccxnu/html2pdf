//import fs from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer";
const browser = await puppeteer.launch();

async function getTemplateHtml() {
  console.log("Loading template file in memory");
  try {
    const filePath = path.resolve(process.cwd(), "./test.html");
    return await readFile(filePath, "utf8");
  } catch (err) {
    return Promise.reject("Could not load html template");
  }
}

export const getPdf = async ({ filename }) => {
  const page = await browser.newPage();
  await page.goto("https://facebook.com");

  const pdf = await page.pdf();
  return pdf;
};
