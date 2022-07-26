// Here in our .test.ts file we want to import some stuff from Selenium-Webdriver
// We import Builder and Capabilities so we can build a driver that will allow us 
// to interact with the browser
const { Builder, Capabilities, By} = require('selenium-webdriver')

// We ALWAYS need to require chromedriver. We don't need to save to a variable since we just need to bring in chromedriver once and not reference it again.
require('chromedriver')

// And this next line is also the same as far as setting up Chrome goes
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async() => {
    await driver.get('http://localhost:5502/movie-list/index.html')
})

afterAll( async() => {
    await driver.quit()
})

describe('movie-list tests',() => {

    test('check if movie is added to the list',async() => {
        //selecting the input element and sending it keys
        await driver.findElement(By.xpath('//input')).sendKeys('Jumanji')

        //selecting the button and clicking it
        await driver.findElement(By.xpath('//button')).click()

        const movie = await driver.findElement(By.xpath('//li'))

        const displayed = movie.isDisplayed()

        expect(displayed).toBeTruthy()
        
        await driver.sleep(3000)

    })
})


