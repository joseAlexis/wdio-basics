const Page = require("./page");

class DropdownPage extends Page {
    get dropdownMenu() { return $('#dropdown') }

    get dropdownMenuOption1() { return this.dropdownMenu.$('option:nth-child(2)') }

    async selectOption1() {
        await this.dropdownMenu.click();
        await this.dropdownMenuOption1.click();
    }
    
    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('dropdown');
    }
}

module.exports = new DropdownPage();