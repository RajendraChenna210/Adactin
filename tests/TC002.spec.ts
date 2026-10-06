
import {test , expect } from '@playwright/test';
import {general} from '../lib/General';

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