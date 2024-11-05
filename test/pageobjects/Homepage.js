const { $ } = require('@wdio/globals')


/**
 * sub page containing specific selectors and methods for a specific page
 */
class Homepage  {
    /**
     * define selectors using getter methods
     */
    get ourcars () {
        return $('#section-label-0 > span');
    }
    get Sedantext() {
        return $('//*[@id="site-nav-cars-menu-section-panel-1"]/small[1]');
    }

    get Suvs () {
        return $('#password');
    }


    

    
    // async cars () {

    //     await this.ourcars.click();
    // }

   
}

module.exports = new Homepage();
