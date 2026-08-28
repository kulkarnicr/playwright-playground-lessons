import { test } from '../fixture'
import {faker} from '@faker-js/faker'

test('Navigate to form layouts page', {tag: '@smoke'} , async ({ pom }) => {
    await pom.navigateTo.formLayoutsPage()
    await pom.navigateTo.datePickerPage()
    await pom.navigateTo.toasterPage()
    await pom.navigateTo.smartTablePage()
})

test('Parametrized page object methods', async({ pom }) => {
    const randomFullName = faker.person.fullName()
    const randomEmail = faker.internet.email({provider: 'test.com'})

    await pom.navigateTo.formLayoutsPage()
    await pom.formLayoutsPage.submitUsingTheGridForm(process.env.TEST_USER_EMAIL!, process.env.TEST_USER_PASSWORD!, 'Option 2')
    // await page.waitForTimeout(500)
    // await page.screenshot({path: 'screenshots/fomlayoutsPage.png'})
    // const formLayoutPageBuffer = await page.screenshot()
    await pom.formLayoutsPage.submitInlineForm(randomFullName, randomEmail, false)
    //await page.locator('nb-card', { hasText: "Inline form" }).screenshot({path: 'screenshots/inlineForm.png'})
    await pom.navigateTo.datePickerPage()
    await pom.datepickerPage.selectCommonDatepickerDateFromToday(5)
    await pom.datepickerPage.selectDatePickerWithRangeFromToday(7, 20)
    await pom.navigateTo.smartTablePage()
})