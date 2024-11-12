import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/loginCode.js' //this takes the inputs from the code and changes the information on this page
import SecurePage from '../pageobjects/nextPage.js'//this is the checker if you were brought to the next page
import FailurePage from '../pageobjects/failurePage.js'//this is the checker if you were not brought to the next page

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('Products'))
    })
})
//this changes the "#user-name" and "#password" into "standard_user" and "secret_sauce" 
//it then calls for the checker "SecurePage" by using the "SecurePage.flashAlert" from the nextPage javascript file. it then does a double check by checking for a string that should be in the HTML code

describe('My Login application', () => {
    it('should not login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('wrong_user', 'not_so_secret_sauce')
        await expect(FailurePage.flashAlert).toBeExisting()
        await expect(FailurePage.flashAlert).toHaveText(
            expect.stringContaining('Epic sadface: Username and password do not match any user in this service'))
    })
})
//it does the same thing as the previous lines of code, but it fills it with different incorect information
//it then calls for the checker "FailurePage" by using the "FailurePage.flashAlert" from the nextPage javascript file and also checking the HTML for a string 