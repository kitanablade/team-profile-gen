# Team Profile Generator
![Eclipse Marketplace](https://img.shields.io/eclipse-marketplace/l/notepad4e?color=red)
## Description 
This program takes user input from the terminal, and generates team profile of employees in HTML.

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```
## Demo Video Link
[Screencastify Video on Google Drive]https://drive.google.com/file/d/1BMRzlZLTdJwm_-NcqqV3fRBldr5gwjF9/view)

## Acceptnce Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
## Table of Contents
* [Installation](#installation)
* [Usage Information](#usage-information)
* [License](#license)
* [Contribution Information](#contribution-information)
* [Tests](#tests)
* [Questions](#questions)
## Installation 
To install, run the following commands:
```bash
npm i
node index.js
```
## Usage Information
Follow the prompts on the command line, and enter your desired information. The program will populate your data to the HTML file. You can re-run the program to overwrite the file if desired. Open the index.HTML file, then right-click and select "Open in Defualt Browser" to view the output.
## License
This app is licensed under the Eclipse Marketplace (EPL 2.0) license.
## Contribution Information
If you wish to contribute, please contact the developer.
## Tests
Coming soon in V1.1
## Questions 
For more information, please [email me](mailto:kit@gmail.com) or see [kitanablade's Github page](https://github.com/kitanablade).
#### [⬆️ Back to Top](#description)