module.exports = (browser, data) => {
    browser
        .setValue('@inputField', data.zipcode)
        .click('@submitButton')
        .click('button')
}