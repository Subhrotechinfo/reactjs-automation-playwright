const {
  Given,
  When,
  Then,
  Before,
  After,
  setDefaultTimeout,
} = require("@cucumber/cucumber");

const { chromium, expect } = require("@playwright/test");

const { Page } = require("playwright");

setDefaultTimeout(90 * 1000);

let page, browser;

Before(async function () {
  browser = await chromium.launch({ headless: false });

  const context = await browser.newContext({});

  page = await context.newPage();
});

Given("User logged in into the application", async () => {
  await page.goto("http://localhost:5173/");
  await page.waitForTimeout(2000);
});

// Given("User logged in into the application", async () => {
//   await page.goto("http://localhost:5173/");
//   await page.waitForTimeout(2000);
// });

When("User should land in the home page", async function () {
  await page.locator("data-testid=account-header");
  expect(
    await page.locator("data-testid=account-header").isVisible()
  ).toBeTruthy();
  await page.waitForTimeout(2000);
});

Then("User should be able to see his account number", async function () {
  await page.locator("data-testid=account-number");
  await expect(page.getByTitle("account-number")).toHaveText(
    "Account Number 65535132688"
  );
  await expect(page.getByTitle("account-number")).toContainText(
    "Account Number 65535132688"
  );
  await page.waitForTimeout(2000);
});

When("User clicks on Transaction", async function () {
  await page.waitForTimeout(1000);

  await page.getByTestId("transaction-link").click();
  // expect(
  //   await page.locator("data-testid=account-header").isVisible()
  // ).toBeTruthy();
  await page.waitForTimeout(2000);
});

Then("user should be able to view all the transaction", async function () {
  // await page.locator("data-testid=account-number");
  // await expect(page.getByTitle("account-number")).toHaveText(
  //   "Account Number 65535132688"
  // );
  // await expect(page.getByTitle("account-number")).toContainText(
  //   "Account Number 65535132688"
  // );
  await page.waitForTimeout(2000);
});

After(async function () {
  await browser.close();
});
