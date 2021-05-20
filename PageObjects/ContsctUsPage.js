let {element,by,browser} = require("protractor");
let BasePage = require("./BasePage");
let Offices = require("./Elements/Offices");
let ContactUsForm = require("./Elements/ContsctUsForm");

class ContactUsPage extends BasePage {
    constructor() {
        super();
        this.contactUsForm = new ContactUsForm(element(by.css(".layout-box__mobile.bg-color-smoke-gray")));
        this.submitButton = element(by.className('button-ui'));
        this.pNumber = element(by.css(''));
        this.fNumber = element(by.css(''));
        this.aDDress = element(by.css(''));
    }

    async clearField(field){
        await this.contactUsForm.clearField(field);
    }

    async submitForm(){
        await this.submitButton.click();
    }

    async getFieldBorderColor(field){
        return await this.contactUsForm.getBorderColor(field);
    }

    async unCheckedTick(){
        await this.contactUsForm.unCheckedTick();
    }

    async getTickerBorderColor(){
        return this.contactUsForm.getTickBorder();
    }

    async getAddress(){
        return this.aDDress.getText();
    }

    async getPnumber(){
        return this.pNumber.getText();
    }

    async getFnumber(){
        return this.fNumber.getText();
    }
}

module.exports = ContactUsPage;