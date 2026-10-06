import {test, expect} from '@playwright/test';

import {general} from '../lib/General';

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