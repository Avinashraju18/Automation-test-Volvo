Documentation for Volvo Automation
 
Prerequisites:
Docker installed on your system
Node.js installed on your system.
Basic Setup for Logic:
• A basic setup has been created to define the overall test automation framework. The logic for the
framework will be elaborated in detail in the following sections.
2. Spec File for Logic:
• A specification (spec) file has been created to document all the logic and workflows used in the
test automation framework. This file serves as a reference for understanding the
underlying test processes.
3. POM File for Selectors:
• A Project Object Model (POM) file has been created specifically to manage and store the locators
(selectors) used in the automation tests.
4. Environment File for Test and Production URLs:
• An environment configuration file has been set up in the local folder. This file specifies the URLs for
both test and production environments, allowing for easy switching between them during testing.
5. Local Browser Setup for Parallel Test Execution:
• A local browser configuration has been implemented to enable parallel test execution, which will
improve the overall efficiency of the testing process.
6. Reporting with Allure:
• Allure, an open-source reporting tool, has been integrated into the framework to generate
detailed and visually appealing test reports. This allows for easy tracking of test execution results.
 
Steps to Run the Tests
1. Clone the repository:
bash
Copy code
git clone &lt;repository-url&gt;
cd &lt;repository-folder&gt;
2. Install dependencies:
npm install
3. Run the tests: You can run the tests for a specific landscape:
npm run test:Homepage # For devVolvo
npm run test:Homepagetest # For testVolvo
4. Generate the Allure report:
allure serve allure-results