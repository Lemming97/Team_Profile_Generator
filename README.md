# Team Profile Generator 
![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)

## Description 
An application that provides the user the ability to generate a webpage which displays a team's basic info. 

## Table of Contents
* [Installation](#installation)
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Video](#video)
* [Screenshots](#screenshots)
* [Usage](#usage)
* [Tests](#tests)

## Installation 
Clone the repository from GitHub and download Node. The user then needs to install Jest for testing, and Inquirer. 

 
## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

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


## Videos

## Installation
Install node.js, inquiry, and install jest for testing.

## Usage
Generating Professional Team Overview Generator page.

## Testing
Jest is available for testing. 
User mus run `npm test` to run Jest for tests on constructors. 
