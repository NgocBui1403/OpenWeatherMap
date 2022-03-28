const cypress = require('cypress')
const fse = require('fs-extra')
const { merge } = require('mochawesome-merge')
const generator = require('mochawesome-report-generator')
const browserName = process.argv.slice(2);
async function runTests() {
    await fse.remove('mochawesome-report') // remove the report folder
    const { totalFailed } = await cypress.run({
        browser: browserName[0],
        spec: './cypress/integration/specs/*.js'
    }) // get the number of failed tests
    const jsonReport = await merge() // generate JSON report
    await generator.create(jsonReport)
    process.exit(totalFailed) // exit with the number of failed tests
}

runTests()