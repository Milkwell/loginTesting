import LoginPage from '../pageobjects/loginCode.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce!')
    })
})

describe('My Login application', () => {
    it('should not login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('wrong_user', 'not_so_secret_sauce?')
    })
})