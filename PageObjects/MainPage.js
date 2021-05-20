let {element,by,browser} = require("protractor");
let BasePage = require("./BasePage");
let Offices = require("./Elements/Offices");
let ContactUsForm = require("./Elements/ContsctUsForm");

class MainPage extends BasePage {
    constructor() {
        super();
        this.contactUsForm = new ContactUsForm(element(by.css(".layout-box__mobile.bg-color-smoke-gray")));
        this.submitButton = element(by.className('button-ui'));
    }

}