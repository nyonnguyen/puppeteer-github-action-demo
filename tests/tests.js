// tests/test.js
const puppeteer = require('puppeteer');

describe('Google Search Page', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('https://www.google.com');
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should display "Google" in title', async () => {
    const title = await page.title();
    expect(title).toBe('Google');
  });

  it('should have a search input field', async () => {
    const searchBoxExists = await page.$('input[name="q"]') !== null;
    expect(searchBoxExists).toBe(true);
  });
});

