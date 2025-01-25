import { test, expect } from "@playwright/test";

import { get } from "../../../config";

import DashboardPage from "../../../pages/gingersnap/dashboard.page";
import LoginPage from "../../../pages/gingersnap/login.page";
import { getDashboardTaskData, TaskData } from "../../../test-data/gingersnap";

test.describe("Dashboard Tests", () => {
  let dashboardPage: DashboardPage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    // Arrange: Set up test preconditions
    loginPage = new LoginPage(page);
    await loginPage.navigate(get("server.url"));
    await loginPage.doLogin();

    dashboardPage = new DashboardPage(page);
  });

  getDashboardTaskData().forEach(
    ({ tab, cardName, column, tags, assignedUser, dueDate }: TaskData) => {
      test(`Card "${cardName}" should appear in the "${column}" column with correct details`, async ({}) => {
        // Arrange: Set up test preconditions
        // Given I am on the dashboard page
        // Act: Perform actions
        // When I click on the specified tab
        await dashboardPage.clickOnTab(tab);

        // Assert: Validate results
        // Then I should see the task card in the correct column
        const isCardInColumn = await dashboardPage.isCardInColumn(
          column,
          cardName
        );
        expect(isCardInColumn).toBeTruthy();

        // Then the card should be assigned to the correct user
        const cardHasAssignedUser = await dashboardPage.hasAssignedUser(
          cardName,
          assignedUser
        );
        expect(cardHasAssignedUser).toBeTruthy();

        // Then the card should have the correct due date
        const cardHasDueDate = await dashboardPage.hasDueDate(
          cardName,
          dueDate
        );
        expect(cardHasDueDate).toBeTruthy();

        // Then I should see all associated tags on the card
        for (const tag of tags) {
          const isTagInCard = await dashboardPage.isTagInCard(cardName, tag);
          expect(isTagInCard).toBeTruthy();
        }
      });
    }
  );
});
