const { By } = require('selenium-webdriver')

const newSearch = async(driver,newSearchTerm) => {
    //locate the input on google and this time clear it
    await driver.findElement(By.name('q')).clear()

    //then search for hot sauces
    await driver.findElement(By.name('q')).sendKeys(`${newSearchTerm}\n`)

    let resultsText = await driver.findElement(By.id('res')).getText()

    expect(resultsText.toLowerCase()).toContain(newSearchTerm.toLowerCase())
}

module.exports = {
    newSearch
}