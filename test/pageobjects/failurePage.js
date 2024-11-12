import { $ } from '@wdio/globals'
import Page from './webPage.js';

class FailurePage extends Page {
    get flashAlert () {
        return $('h3[data-test="error"]');
    }
}

export default new FailurePage();

// this checks if you didn't go to the right page and if you are still on the login page by checking if the failure window popped up