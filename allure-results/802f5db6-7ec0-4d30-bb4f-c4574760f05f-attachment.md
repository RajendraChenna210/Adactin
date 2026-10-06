# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC001.spec.ts >> TC001_LoginLogout
- Location: tests\TC001.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//a[text() = \'Logout\']')

```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - table [ref=f1e2]:
    - rowgroup [ref=f1e3]:
      - row [ref=f1e4]:
        - cell [ref=f1e5]:
          - img "AdactIn Group" [ref=f1e6]
        - cell [ref=f1e7]:
          - 'img "Adactin Group: Hotel Reservation System" [ref=f1e8]'
      - row [ref=f1e9]:
        - cell [ref=f1e10]
  - table [ref=f1e11]:
    - rowgroup [ref=f1e12]:
      - row [ref=f1e13]:
        - cell [ref=f1e14]:
          - paragraph [ref=f1e15]: Adactin Launches The Adactin Hotel App!
          - table [ref=f1e16]:
            - rowgroup [ref=f1e17]:
              - row [ref=f1e18]:
                - cell [ref=f1e19]:
                  - img "Hotel Image 3" [ref=f1e20]
              - row [ref=f1e21]:
                - cell "The best Free learning platform for Software Testing Now available to download for free on IOS and Android." [ref=f1e22]: The best Free learning platform for Software TestingNow available to download for free on IOS and Android.
          - table [ref=f1e23]:
            - rowgroup [ref=f1e24]:
              - row [ref=f1e25]:
                - cell [ref=f1e26]:
                  - link [ref=f1e27] [cursor=pointer]:
                    - /url: https://testflight.apple.com/join/Ai3nVPMD
                - cell [ref=f1e29]:
                  - link [ref=f1e30] [cursor=pointer]:
                    - /url: https://play.google.com/store/apps/details?id=com.adactin.education.hotelbooking
        - cell [ref=f1e32]:
          - table [ref=f1e34]:
            - rowgroup [ref=f1e35]:
              - row [ref=f1e36]:
                - cell "Existing User Login - Build 1" [ref=f1e37]
              - row [ref=f1e38]:
                - cell "Username" [ref=f1e39]
                - cell [ref=f1e40]:
                  - textbox [ref=f1e41]
              - row [ref=f1e42]:
                - cell "Password" [ref=f1e43]
                - cell [ref=f1e44]:
                  - textbox [ref=f1e45]
              - row [ref=f1e46]:
                - cell [ref=f1e47]
                - cell [ref=f1e48]:
                  - link "Forgot Password?" [ref=f1e50] [cursor=pointer]:
                    - /url: ForgotPassword.php
              - row [ref=f1e51]:
                - cell [ref=f1e52]
                - cell [ref=f1e53]:
                  - generic [ref=f1e55]:
                    - text: Invalid Login details or Your Password might have expired.
                    - link "Click here" [ref=f1e56] [cursor=pointer]:
                      - /url: http://adactinhotelapp.com/ForgotPassword.php
                    - text: to reset your password
              - row [ref=f1e57]:
                - cell [ref=f1e58]
                - cell [ref=f1e59]:
                  - button "Login" [ref=f1e60]
              - row [ref=f1e61]:
                - cell [ref=f1e62]:
                  - link "New User Register Here" [ref=f1e63] [cursor=pointer]:
                    - /url: Register.php
          - table [ref=f1e64]:
            - rowgroup [ref=f1e65]:
              - row [ref=f1e66]:
                - cell "Important Note:" [ref=f1e67]
              - row [ref=f1e68]:
                - cell [ref=f1e69]:
                  - text: "Hotel Application has 2 builds:"
                  - list [ref=f1e70]:
                    - listitem [ref=f1e71]:
                      - strong [ref=f1e72]: Build 1
                      - text: Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build.
                    - listitem [ref=f1e73]:
                      - strong [ref=f1e74]: Build 2
                      - text: Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build.
                      - link [ref=f1e75] [cursor=pointer]:
                        - /url: ../HotelAppBuild2
                        - strong [ref=f1e76]: Go to Build 2
              - row [ref=f1e77]:
                - cell [ref=f1e78]:
                  - text: "For any queries/issues please email:"
                  - link "info@adactin.com" [ref=f1e79] [cursor=pointer]:
                    - /url: mailto:info@adactin.com
  - table [ref=f1e80]:
    - rowgroup [ref=f1e81]:
      - row [ref=f1e82]:
        - cell [ref=f1e83]
      - row [ref=f1e84]:
        - cell [ref=f1e85]:
          - text: © 2026 -
          - link "Adactin.com" [ref=f1e86] [cursor=pointer]:
            - /url: http://www.adactin.com
          - text: . All Rights Reserved. Adactin Group Pty. Ltd.
```

# Test source

```ts
  1  | import {global} from './Global';
  2  | 
  3  | export class general extends global {
  4  |     //user defined functions
  5  |     //open application
  6  | public async openApplication() {
  7  |     await this.page.goto(this.url);
  8  |     console.log("Application opened");
  9  | }
  10 | public async login() {
  11 |     await this.page.locator(this.textbox_username).fill(this.username);
  12 |     await this.page.locator(this.textbox_password).fill(this.password);
  13 |     await this.page.locator(this.button_login).click();
  14 |     console.log("Login Completed");
  15 | }
  16 | public async logout() {
> 17 |     await this.page.locator(this.link_Logout).click();
     |                                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
  18 |     console.log("Logout Completed");
  19 | }
  20 | public async waitTime() {
  21 |     await this.page.waitForTimeout(3000);
  22 |     console.log("Waited for 3 seconds");
  23 | }
  24 | };
  25 | 
```