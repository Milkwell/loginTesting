import { $ } from '@wdio/globals'
import Page from './webPage.js';

class FailurePage extends Page {
    get flashAlert () {
        return $('h3[data-test="error"]');
    }
}

export default new FailurePage();