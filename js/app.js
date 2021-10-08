// classes
const ui = new UI()
const validate = new Validate()
const insurance = new Insurance()

// variables
const form = document.querySelector("#form")
const secoundForm = document.querySelector("#secound-form")


// eventListeners
eventListeners()

function eventListeners() {
    // show years when page loaded
    document.addEventListener("DOMContentLoaded", () => {
        ui.showYears()
    })

    // add event to auto type
    document.querySelector("#auto-type").addEventListener("click", () => {
        // acces to auto type value
        const autoType = document.querySelector("#auto-type").value
        const carType = document.querySelector("#car-type")
        const carUse = document.querySelector("#car-use")

        // send value to realative ethod
        validate.autoTypeValidate(autoType, carType)
        ui.carTypeOptions(autoType)
        ui.carUseOptions(autoType, carUse)
    })

    // add event to year made
    document.querySelector("#year-made").addEventListener("click", () => {
        // get value
        const yearMade = document.querySelector("#year-made").value

        // call methode
        ui.discountYear(yearMade)
    })

    // add event to damage check
    document.querySelector("#yes-damage").addEventListener("click", () => {
        // acces to damage type and activate it
        const damageType = document.querySelector("#damage-type")
        damageType.disabled = false
    })
    document.querySelector("#no-damage").addEventListener("click", () => {
        // acces to damage type and disable it
        const damageType = document.querySelector("#damage-type")
        damageType.disabled = true

        // acces to damage type and set default for it
        const defaultDamage = document.querySelector("#default-damage")
        defaultDamage.selected = true

        // disable damage number
        document.querySelector("#damage-number").style.display = "none"
    })

    // add event to damage type
    document.querySelector("#damage-type").addEventListener("click", () => {
        // acces to damage type value
        const damageType = document.querySelector("#damage-type").value

        // call methode
        validate.damageCheck(damageType)
    })

    // add event to reset button
    document.querySelector("#reset-button").addEventListener("click", e => {
        e.preventDefault()

        // disable buttons
        document.querySelector("#car-type").disabled = true
        document.querySelector("#damage-type").disabled = true
        document.querySelector("#property-number").disabled = true
        document.querySelector("#life-number").disabled = true

        // hide property and life
        document.querySelector("#damage-number").style.display = "none"

        // reset form
        form.reset()
    })

    // add event to reset button
    document.querySelector("#reset-button2").addEventListener("click", e => {
        e.preventDefault()

        // disable button
        document.querySelector("#expire-day").disabled = true

        // reset form
        secoundForm.reset()
    })

    // add event to back button
    document.querySelector("#back").addEventListener("click", e => {
        e.preventDefault()

        // reload page
        location.reload()
    })

    // check end time
    document.querySelector("#yes-end").addEventListener("click", () => {
        // make car use activate
        document.querySelector("#expire-day").disabled = false
    })
    document.querySelector("#no-end").addEventListener("click", () => {
        // make car use activate
        document.querySelector("#expire-day").disabled = true
    })

    // add submit to form
    document.querySelector("#continue").addEventListener("click", e => {
        e.preventDefault()

        // get values from first form
        const autoType = document.querySelector("#auto-type").value
        const carType = document.querySelector("#car-type").value
        const yearMade = document.querySelector("#year-made").value
        const discount = document.querySelector("#discount-year").value
        const yesDamage = document.querySelector("#yes-damage").checked
        const noDamage = document.querySelector("#no-damage").checked
        const damageType = document.querySelector("#damage-type").value
        const property = document.querySelector("#property-number").value
        const life = document.querySelector("#life-number").value

        // check if fields are full
        if (validate.validateFForm(autoType, carType, yearMade, discount, yesDamage, noDamage, damageType, property, life)) {
            if (document.querySelector("#form").style.display !== "none") {
                // show and hide forms
                form.style.display = "none"
                secoundForm.style.display = "flex"

                // add event to calculate button
                document.querySelector("#calculate").addEventListener("click", e => {
                    e.preventDefault()

                    // get values from secound form
                    const yesEnd = document.querySelector("#yes-end").checked
                    const noEnd = document.querySelector("#no-end").checked
                    const expireDay = document.querySelector("#expire-day").value
                    const carUse = document.querySelector("#car-use").value
                    const priceCover = document.querySelector("#price-cover").value
                    const company = document.querySelector("#company").value
                    const insuranceTime = document.querySelector("#insurance-time").value

                    // check if fields are full
                    if (validate.validateSForm(yesEnd, noEnd, expireDay, carUse, priceCover, company, insuranceTime)) {
                        // make display off
                        secoundForm.style.display = "none";

                        // send form values to methode
                        insurance.calculateInsurance(carType, yearMade, discount, property, life, expireDay, carUse, priceCover, company, insuranceTime);
                    }
                })
            }
        }
    })
}