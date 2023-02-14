// можливий клас веб сторінки, клас page - базовий клас з узагальненими речима які можуть стосуватись юудь якої сторінки
// є три поля, 2 поля для введення і кнопка логін , використовуються локатори для ідентифікації веб елементу

class LoginPage extends Page {
    // page locators
    getInputUsername() {return $('#txtUsername')}
    getInputPassword() {return $('#txtPassword')}
    get loginBtn() {return $('#btnLogin')}

    // page actions
    // to open the URL

    async open() { 
        await super.open('/')
    }

    // to enter usename and password into login form and click login button

    async login(username, password) {
        await this.getInputUsername.setValue(username);
        await this.getInputPassword.setValue(password);
        await this.loginBtn.click();
    }
}