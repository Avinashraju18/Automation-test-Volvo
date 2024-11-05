const { expect } = require('@wdio/globals');
const Homepage = require('../pageobjects/Homepage');

describe('Volvo Cars Home Page', () => {
    //const userId = ""; 
    
    beforeEach(async () => {
        await browser.maximizeWindow(); 
    });

    it('01 - Fetch the data, verify and print', async () => {
        try {
            // Wait to ensure page elements are loaded (optional, depending on your timing needs)
            await browser.pause(1000); 

            // Clicking on 'Our Cars' link or button
            const clickCars = await Homepage.ourCars();
            await clickCars.click(); 

            // Fetch the text to verify it matches 'SUVs' 
            const text = await Homepage.sedanText(); 
            console.log('Text displayed:', text); 

            // Verify that the text matches the expected value
            expect(text).toEqual('SUVs'); 
        } catch (error) {
            console.error('Error fetching data:', error); 
        }
    });

    it('should verify the homepage visual appearance', async () => {
        const homepage = await $('body');
        await browser.assertView(homepage, 'homepage'); // Compare the current screenshot with the baseline image
    });
    
});
 // it('should load the page and have the correct title', async () => {
    //     const title = await browser.getTitle();
    //     expect(title).toBe('A million more | Volvo Cars');
    // });



// it('should check if the main banner is displayed', async () => {
//     const banner = await $('header');
//     expect(await banner.isDisplayed()).toBe(true);
// });

