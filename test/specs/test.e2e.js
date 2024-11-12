import LoginPage from '../pageobjects/loginCode.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce!')
    })
})

