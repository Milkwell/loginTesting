import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/loginCode.js'
import SecurePage from '../pageobjects/nextPage.js'
import FailurePage from '../pageobjects/failurePage.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('Products'))
    })
})

describe('My Login application', () => {
    it('should not login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('wrong_user', 'not_so_secret_sauce')
        await expect(FailurePage.flashAlert).toBeExisting()
        await expect(FailurePage.flashAlert).toHaveText(
            expect.stringContaining('Epic sadface: Username and password do not match any user in this service'))
    })
})