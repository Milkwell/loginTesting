import { browser } from '@wdio/globals'

export default class Page {
    open () {
        return browser.url(`https://www.saucedemo.com/`)
    }
}

// this checks if it brought you to the right login web page