// Creating a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== `no license`) {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return ``;
  }
}

// Creating a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license!==`no license`) {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
  } else {
    return ``;
  }
}

// Creating a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license!== `no license`) {
    return `## License
This application is under the license:
${renderLicenseLink(license)}`;
  } else {
    return ``;
  }
}

// Creating a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributers](#contributers)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  ${data.what}
  ${data.why}
  ${data.how}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  For more information on how to add screenshots for examples, visit the following website:
  
  [Mark Down Tutorial](https://agea.github.io/tutorial.md/)
  
  ${renderLicenseSection(data.license)}
  
  ## Contributers
  ${data.contributers}

  ## Tests
  ${data.test}

  ## Questions
  
  If you have any questions, feel free to contact:

  [GitHub](https://github.com/${data.githubusername})
  [Email:${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
