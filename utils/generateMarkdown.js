// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  return `# ${responses.ProjectTitle}

  ## Description ##
  ${responses.Description}
  ## Installation ##
  ${responses.InstallIns}
  ## Usage Guide ##
  ${responses.Usage}
  ## Contribution Guidelines ##
  ${responses.Contributions}
  ## Testing Instruction ##
  ${responses.Testing}
  ## Licensing ##
  ${responses.Licenses}
  
  Email any questions to ${responses.email}

  Follow along with all my projects on Github @ ${responses.Github}

`;
}

module.exports = generateMarkdown;
