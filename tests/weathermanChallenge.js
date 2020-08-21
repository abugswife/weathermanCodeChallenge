var challenge = {}
var loopy = require('../testAssets/weathermanChallengeArray')
var funky = require('../../practiceAutomation/testAssetsPractice/weathermanChallengeFunc')

module.exports = {
    beforeEach: browser => {
        challenge = browser.page.weathermanChallengePage()
        challenge.navigate()
    },

    after: browser => {
        browser.end()
    },

    'Search for Zip Loop': browser => {
        challenge
        loopy.forEach(test=>{
        funky(challenge, test)
        }
        )},
}

//*[@id="byo"]/div/div[1]/div[4]/button

//*[@id="multiStepPane-byoNavigation-buildSteps"]/div/div[5]/div/div/div[2]/div/div/div[3]/div[1]/button/div/div/div/span[1]