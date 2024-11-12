import { $ } from '@wdio/globals'
import Page from './webPage.js';

class SecurePage extends Page {
    get flashAlert () {
        return $('span[class="title"]');
    }
}

export default new SecurePage();

// this checks if the login was succesful be seeing if an object on the next page exists