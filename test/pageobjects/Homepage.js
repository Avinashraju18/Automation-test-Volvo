const { $ } = require('@wdio/globals');
const { clickElement, getTextFromElement, isElementVisible, isElementEnabled } = require('../utils'); // Importing utils

class Homepage {
    
    get ourCarsLabel() {
        return $('#section-label-0 > span');
    }

    get sedanText() {
        return $('//*[@id="site-nav-cars-menu-section-panel-1"]/small[1]');
    }

    get shopLink() {
        return $('#section-label-1 > span');
    }

    get specialVehiclesLink() {
        return $('//*[@id="sitenav-topbar-section-menu"]/div[1]/div[1]/ul/li[3]/a');
    }

    get specialVehiclesText() {
        return $('#ModelIntro-1 > section > section > h2');
    }

    get volvoBtn() {
        return $('#sitenav-topbar-wrapper > nav > div:nth-child(1) > div > a');
    }

    get scrollBtn() {
        return $('//*[@id="CarCarousel-1"]/section/div/div[1]/div[2]');
    }

    // Reusable action methods

    /**
     * Clicks on the 'Our Cars' label.
     */
    async clickOurCarsLabel() {
        await clickElement(this.ourCarsLabel);
    }

    /**
     * Fetches the text from the 'Sedan Text' label.
     * @returns {string} The text content of the element.
     */
    async getSedanText() {
        return await getTextFromElement(this.sedanText);
    }

    /**
     * Clicks on the 'Shop' link.
     */
    async clickShopLink() {
        await clickElement(this.shopLink);
    }

    /**
     * Clicks on the 'Special Vehicles' link.
     */
    async clickSpecialVehiclesLink() {
        await clickElement(this.specialVehiclesLink);
    }

    /**
     * Fetches the 'Special Vehicles' text.
     * @returns {string} The text content of the element.
     */
    async getSpecialVehiclesText() {
        return await getTextFromElement(this.specialVehiclesText);
    }

    /**
     * Clicks on the Volvo button.
     */
    async clickVolvoBtn() {
        await clickElement(this.volvoBtn);
    }

    /**
     * Checks if the scroll button is enabled.
     * @returns {boolean} True if the scroll button is enabled, false otherwise.
     */
    async isScrollBtnEnabled() {
        return await isElementEnabled(this.scrollBtn);
    }
}

module.exports = new Homepage();
