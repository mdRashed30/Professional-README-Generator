
//Create a function that returns a license

function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

function renderLicenseLink(license) {
  return "";
}


function renderLicenseSection(license) {
  return "";
}

// Create a function that generate markdown for README


function generateMarkdown(data) {
  return `
${data.title}



##TABLE OF CONTENTS

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Test](#test)
* [Questions](#questions)

## Description:

${data.description}

## Installation: 

${data.installation}

## License:

${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}


## Usage:

${data.usage}


## Contributors to this project:

${data.contribution}


## Tests that were conducted:

${data.tests}


## This project was created by 

${data.username}


## If you have questions about this project, you can email :

${data.email}



`;
}


//import 
module.exports = generateMarkdown;