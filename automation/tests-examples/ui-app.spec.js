// @ts-check
import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});

const TODO_ITEMS = [
  "buy some cheese",
  "feed the cat",
  "book a doctors appointment",
];
test.describe("Basic test", () => {
  test("it should open the webpage", async ({ page }) => {
    await page.goto("http://localhost:5173/");
    await page.waitForTimeout(2000);
  });
});
