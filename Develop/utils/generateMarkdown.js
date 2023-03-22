// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== `no license`) {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license!==`no license`) {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license!== `no license`) {
    return `## [License](#table-of-contents)
    This application is under the license:
    ${renderLicenseLink(license)}`;
  } else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table-of-Contets

  *[Discription](#discription)
  *[Installation](#installation)
  *[Usage](#usage)
  ${renderLicenseTOC(data.license)}
  *[Contributers](#contributers)
  *[Tests](#tests)
  *[Questions](#questions)

  ##[Discription](#table-of-contents)
  ${data.what}
  ${data.why}
  ${data.how}

  ##[Installation](#table-of-contents)
  ${data.installation}

  ##[Usage](#table-of-contents)
  ${data.usage}
  For more information on how to add screenshots for examples, visit the following website:
  
  [Mark Down Tutorial](https://agea.github.io/tutorial.md/)
  
  ${renderLicenseSection(data.license)}
  
  ##[Contributers](#table-of-contents)
  ${data.contributers}

  ##[Tests](#table-of-contents)
  ${data.test}

  ##[Questions](#table-of-contents)
  
  If you have any questions, feel free to contact:

  [GitHub](https://github.com/${data.githubusername})
  [Email:${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
