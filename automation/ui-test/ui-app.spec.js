// @ts-check
import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/signin");
});

test.describe("Login Flow Test", () => {
  test("it should open the webpage", async ({ page }) => {
    await page.goto("http://localhost:5173/signin");
    await page.waitForTimeout(2000);
  });
  test("it should be able to redirect to the home page on successfull login", async ({
    page,
  }) => {
    const email = page.getByPlaceholder("name@example.com");
    await email.fill("Benny.Johnson@gmail.com");

    await page.waitForTimeout(2000);

    const password = page.getByPlaceholder("Enter your password");
    await password.fill("DefaultUser@123");

    await page.waitForTimeout(2000);

    await page.getByTestId("signin-button").click();
    await page.waitForTimeout(3000);
    await page.getByText(
      "The email address you entered isn't connected to an account"
    );
    await page.waitForTimeout(3000);
  });

  // test("it should not be able to login if the user provides invalid credentials", async ({
  //   page,
  // }) => {
  //   const email = page.getByPlaceholder("name@example.com");
  //   await email.fill("Benny.Johnsons@gmail.com");

  //   await page.waitForTimeout(2000);

  //   const password = page.getByPlaceholder("Enter your password");
  //   await password.fill("DefaultUser@123");

  //   await page.waitForTimeout(2000);

  //   await page.getByTestId("signin-button").click();
  //   await page.waitForTimeout(3000);
  //   await page.getByText(
  //     "The email address you entered isn't connected to an account"
  //   );
  //   await page.waitForTimeout(3000);
  // });
});

test.describe("Login Flow Test Error", () => {
  test("it should open the webpage", async ({ page }) => {
    await page.goto("http://localhost:5173/signin");
    await page.waitForTimeout(2000);
  });
  test("it should not be able to login if the user provides invalid credentials", async ({
    page,
  }) => {
    const email = page.getByPlaceholder("name@example.com");
    await email.fill("Benny.Johnsons@gmail.com");

    await page.waitForTimeout(2000);

    const password = page.getByPlaceholder("Enter your password");
    await password.fill("DefaultUser@123");

    await page.waitForTimeout(2000);

    await page.getByTestId("signin-button").click();
    await page.waitForTimeout(3000);
    await page.getByText(
      "The email address you entered isn't connected to an account"
    );
    await page.waitForTimeout(3000);
  });
});
