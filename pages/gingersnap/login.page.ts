import BasePage from "../base.page";
import { get } from "../../config";

export default class LoginPage extends BasePage {
  private usernameInput: string = 'input[id="username"]';
  private passwordInput: string = 'input[id="password"]';
  private submitButton: string = 'button[type="submit"]';
  private invalidUsernameOrPasswordLabel: string = "div.text-red-500";

  async isIvalidLabelVisible(): Promise<boolean> {
    await this.waitForElement(this.invalidUsernameOrPasswordLabel);
    return await this.page
      .locator(this.invalidUsernameOrPasswordLabel)
      .isVisible();
  }

  async getInvalidLabelText(): Promise<string> {
    return await this.getElementText(this.invalidUsernameOrPasswordLabel);
  }

  async doLogin(
    username: string = get("server.username"),
    password: string = get("server.password")
  ) {
    await this.typeText(this.usernameInput, username);
    await this.typeText(this.passwordInput, password);
    await this.clickOn(this.submitButton);
  }
}
