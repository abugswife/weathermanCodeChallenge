module.exports = {
    url: ('https://devmountain-qa.github.io/weatherman/build/index.html'),
    elements: {
    
        submitButton: {
            selector: '//*[@id="root"]/div/form/button',
            locateStrategy: 'xpath'
        },
        inputField: {
            selector: '//*[@id="root"]/div/form/input',
            locateStrategy: 'xpath'
        }
    }    

}