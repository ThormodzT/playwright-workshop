import { test, expect } from "@playwright/test";
import LoginPage from "../../../pages/gingersnap/login.page";
import DashboardPage from "../../../pages/gingersnap/dashboard.page";
import { get } from "../../../config";

test.describe("Login Test", () => {
  test("User should be able to login with valid credentials", async ({
    page,
  }) => {
    // Arrange: Set up test preconditions
    const dashboardPage = new DashboardPage(page);
    const loginPage = new LoginPage(page);

    // Act: Perform Actions
    // Given I am on the login page
    await loginPage.navigate(get("server.url"));
    // When I enter valid credentials and submit
    await loginPage.doLogin();

    // Assert: Validate results
    // Then I should see the dashboard page
    const isDashboardVisible = await dashboardPage.isDashboardVisible();
    await expect(isDashboardVisible).toBeTruthy();
  });

  test("User should not be able to login with invalid credentials", async ({
    page,
  }) => {
    // Arrange: Set up test preconditions
    const dashboardPage = new DashboardPage(page);
    const loginPage = new LoginPage(page);

    // Act: Perform Actions
    // Given I am on the login page
    await loginPage.navigate(get("server.url"));
    // When I enter valid credentials and submit
    await loginPage.doLogin("invalid-username");

    // Assert: Validate results
    // Then I should see an error message
    const errorMessage = await loginPage.getInvalidLabelText();
    expect(errorMessage).toBe("Invalid username or password");
  });
});
