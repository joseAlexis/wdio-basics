const HomePage = require("../pageobjects/home.page");

describe("Home Page", () => {
    it("Should get all the link elements", async () => {
        HomePage.open();

        // expect(HomePage.getPageLinks()).toContain('A/B Testing');
        HomePage.getPageLinks()
        expect(HomePage.getElementByIndex(3)).toHaveText('Basic Auth (user and pass: admin)');
    }); 
})