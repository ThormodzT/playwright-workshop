import BasePage from "../base.page";

export default class DashboardPage extends BasePage {
  private projectsHeader = 'h1:has-text("Projects")';
  private getTabSelector = (tabName: string) => `button:has-text("${tabName}")`;
  private getTabTitleLabelSelector = (tabName: string) =>
    `h1:has-text("${tabName}")`;
  private getColumnLabelSelector = (columnName: string) =>
    `h2:has-text("${columnName}")`;
  private getCardSelector = (cardName: string) => `h3:has-text("${cardName}")`;
  private getTagSelector = (tagName: string) => `span:has-text("${tagName}")`;
  private getAssignedUserSelector = (userName: string) =>
    `span:has-text("${userName}")`;
  private getDueDateSelector = (dueDate: string) =>
    `span:has-text("${dueDate}")`;

  async isDashboardVisible(): Promise<boolean> {
    await this.waitForElement(this.projectsHeader);
    return await this.page.locator(this.projectsHeader).isVisible();
  }

  async isCardInColumn(columnName: string, cardName: string): Promise<boolean> {
    const columnSelector = await this.getParentElement(
      this.getColumnLabelSelector(columnName)
    );

    return await this.hasChildSelector(
      columnSelector,
      this.getCardSelector(cardName)
    );
  }

  async isTagInCard(cardName: string, tagName: string): Promise<boolean> {
    const cardSelector = await this.getParentElement(
      this.getCardSelector(cardName)
    );

    return await this.hasChildSelector(
      cardSelector,
      this.getTagSelector(tagName)
    );
  }

  async hasAssignedUser(cardName: string, assignedUserName: string) {
    const cardSelector = await this.getParentElement(
      this.getCardSelector(cardName)
    );

    return await this.hasChildSelector(
      cardSelector,
      this.getAssignedUserSelector(assignedUserName)
    );
  }

  async hasDueDate(cardName: string, dueDate: string) {
    const cardSelector = await this.getParentElement(
      this.getCardSelector(cardName)
    );

    return await this.hasChildSelector(
      cardSelector,
      this.getDueDateSelector(dueDate)
    );
  }

  async clickOnTab(tabName: string): Promise<void> {
    await this.clickOn(this.getTabSelector(tabName));
    await this.waitForElement(this.getTabTitleLabelSelector(tabName));
  }
}
