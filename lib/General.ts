import {global} from './Global';

export class general extends global {
    //user defined functions
    //open application
public async openApplication() {
    await this.page.goto(this.url);
    console.log("Application opened");
}
public async login() {
    await this.page.locator(this.textbox_username).fill(this.username);
    await this.page.locator(this.textbox_password).fill(this.password);
    await this.page.locator(this.button_login).click();
    console.log("Login Completed");
}

public async newregister() {
    await this.page.locator(this.link_newregister).click();
    console.log("New Register link clicked");

}
public async backToLogin() {
    await this.page.goBack();
    console.log("Returned to Login page");
}
public async logout() {
    await this.page.locator(this.link_Logout).click();
    console.log("Logout Completed");
}
public async waitTime() {
    await this.page.waitForTimeout(3000);
    console.log("Waited for 3 seconds");
}
};
