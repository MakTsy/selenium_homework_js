let {Then, When, Given} = require('@cucumber/cucumber');
let ContactUsPage = require("../PageObjects/ContsctUsPage")
let {browser} = require("protractor");
let chai = require("chai")
let chaiAsPromised = require("chai-as-promised")
let Constants = require("../utils/Constants");
let ScenarioContext = require("../contexts/ScenarioContext");

chai.use(chaiAsPromised);
let expect = chai.expect;
let page;

Given(/^User has opened Contact Us page at EPAM's website$/, {timeout: 10000}, async () => {
    page = new ContactUsPage();
    await browser.get("https://www.epam.com/about/who-we-are/contact");
    await page.acceptCookies();
});

Given(/^there are uncompleted (.*) field in the form$/, {timeout: 10000},async(arg) => {
    await page.clearField(arg);
});

When(/^I clicks Submit button$/,{timeout: 10000}, async() => {
    await page.submitForm();
});

Then(/^(.*) field's border color becomes red colored$/,{timeout: 10000}, async (arg) => {
    let borderColor = await page.getFieldBorderColor(arg);
    expect(borderColor.toString()).to.equal(Constants.getRedColor);
});

Given(/^there are unchecked I consent my personal information tick$/,{timeout: 10000}, async () => {
    await page.unCheckedTick();
});

Then(/^I consent my personal information tick's border becomes Red colored$/,{timeout: 10000}, async () => {
    let borderColor = await page.getTickerBorderColor();
    expect(borderColor.toString()).to.equal(Constants.getBlackColor);
});

Given(/^there is address of GLOBAL HEADQUARTERS on the page$/, function () {
    ScenarioContext.setAddress(ContactUsPage.getAddress);
});

Given(/^there are phone numbers on the page$/, function () {
    ScenarioContext.setpPhone(ContactUsPage.getPnumber);
    ScenarioContext.setfPhone(ContactUsPage.getFnumber);
});

Then(/^address corresponds to actual$/, function () {
    expect(ScenarioContext.getAddress.to.equal(Constants.getAddress));
});

Then(/^phone numbers are correct$/, function () {
    expect(ScenarioContext.getpPhone.to.equal(Constants.getPphone));
    expect(ScenarioContext.getfPhone.to.equal(Constants.getFphone));
});