import {Page} from '@playwright/test';

export class global {
    constructor(public page : Page) {
        this.page = page;
    }
    //Test data objects
    public url: string = "https://adactinhotelapp.com/";
    public username: string = "Batch000061";
    public password: string = "NRQ78K";

    //Objects / elements
    public textbox_username = "//input[@name = 'username']";
    public textbox_password = "//input[@id = 'password']";
    public button_login = "//input[@value = 'Login']";
    public link_newregister = "//a [text() = 'New User Register Here']";
    public link_Logout = "//a[text() = 'Logout']";
    

}
