const Page = require("./page");

class AlertsPage extends Page {

    get result() { return $('.result') }
    
    alertButton(index) { return $(`.example li:nth-child(${index}) button`) }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('javascript_alerts');
    }
}

module.exports = new AlertsPage();