const Page = require("./page");

class DragAndDrop extends Page {


    get columnA() { return $('#column-a') }
    get columnB() { return $('#column-b') }

    async dragColumnAToColumnB(){
        await this.columnA.dragAndDrop(this.columnB);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('drag_and_drop');
    }
}

module.exports = new DragAndDrop();