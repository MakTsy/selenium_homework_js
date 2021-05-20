
class Constants {
    static address = '41 University Drive • Suite 202, Newtown, PA 18940 • USA';
    static pPhone = ' +1-267-759-9000';
    static fPhone = '+1-267-759-8989';
    static redColor = 'rgb(241, 92, 67)';
    static blackColor = 'rgb(0, 0, 0)';

    static get getRedColor() {
        return this.redColor;
    }

    static get getBlackColor() {
        return this.blackColor;
    }

    static get getAddress() {
        return this.address;
    }

    static get getPphone() {
        return this.pPhone;
    }

    static get getFphone() {
        return this.fPhone;
    }
}

module.exports = Constants;
