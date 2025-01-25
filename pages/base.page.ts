import { Locator, Page } from "@playwright/test";

export default class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async typeText(selector: string, text: string): Promise<void> {
    await this.page.fill(selector, text);
  }

  async clickOn(selector: string): Promise<void> {
    await this.page.click(selector);
  }

  async waitForElement(selector: string): Promise<void> {
    await this.page.waitForSelector(selector);
  }

  async getElementText(selector: string): Promise<string> {
    await this.waitForElement(selector);
    return (await this.page.locator(selector).textContent()) ?? "";
  }

  async getParentElement(childSelector: string): Promise<Locator> {
    return this.page.locator(`${childSelector} >> xpath=..`);
  }

  async hasChildSelector(
    parentElement: Locator,
    childSelector: string
  ): Promise<boolean> {
    return (await parentElement.locator(childSelector).count()) > 0;
  }
}
