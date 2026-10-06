//Test Suite for batch
import {test} from '@playwright/test';
import { general } from '../lib/General';

test.describe('Test Suite for 69Batch', ()=> {
test('TC001_LoginLogout', async ({page}) => {
    //Test Steps
    const gen = new general(page);
    await gen.openApplication();
    await gen.waitTime();
    await gen.login();
    await gen.waitTime();
    await gen.logout();
    await gen.waitTime();

});
test('TC002_NewRegister', async ({page}) => {
    const gen = new general(page);

    await gen.openApplication();
    await gen.waitTime();
    await gen.newregister();
    await gen.waitTime();
    await gen.backToLogin();
    await gen.waitTime();
    await gen.login();
    await gen.waitTime();
    await gen.logout();
    await gen.waitTime();
});

});