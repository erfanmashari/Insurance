class Validate {
    // validate first form
    validateFForm(auto, car, year, discount, yes, no, damage, property, life) {
        // check different values emptiness
        if (auto === "") {
            ui.printError("نوع وسیله نقلیه را انتخاب کنید!", "border border-2 border-warning bg-white text-dark")
            return false
        } else if (car === "") {
            ui.printError("نوع خودرو را انتخاب کنید!", "border border-2 border-warning bg-white text-dark")
            return false
        } else if (year === "") {
            ui.printError("سال ساخت وسیله نقلیه را مشخص کنید!", "border border-2 border-warning bg-white text-dark")
            return false
        } else if (yes === false && no === false) {
            ui.printError("داشتن یا نداشتن خسارت را مشخص کنید!", "border border-2 border-warning bg-white text-dark")
            return false
        } else if (yes === true && damage === "") {
            ui.printError("نوع خسارت وارده را مشخص کنید!", "border border-2 border-warning bg-white text-dark")
            return false
        } else if (damage === "property" && property === "") {
            ui.printError("تعداد خسارت مالی را وارد نمایید!", "border border-2 border-warning bg-white text-dark")
            return false
        } else if (damage === "life" && life === "") {
            ui.printError("تعداد خسارت جانی را وارد نمایید!", "border border-2 border-warning bg-white text-dark")
            return false
        } else if (yes === true && damage === "life&property" && life === "") {
            ui.printError("تعداد خسارت مالی و  جانی را وارد نمایید!", "border border-2 border-warning bg-white text-dark")
            return false
        } else if (yes === true && damage === "life&property" && property === "") {
            ui.printError("تعداد خسارت مالی و  جانی را وارد نمایید!", "border border-2 border-warning bg-white text-dark")
            return false
        } else {
            return true
        }
    }

    // validate secoud form
    validateSForm(yes, no, expire, use, cover, company, time) {
        // check different values emptiness
        if (yes === false && no === false) {
            ui.printError("منقضی شدن بیمه خودرو را مشخص کنید!", "border border-2 border-warning bg-white text-dark")
            return false
        } else if (yes === true && expire === "") {
            ui.printError("تعداد روز ها را وارد نمایید!", "border border-2 border-warning bg-white text-dark")
            return false
        } else if (yes === true && expire <= 0) {
            ui.printError("تعداد روز ها را به درستی وارد نمایید!", "border border-2 border-warning bg-white text-dark")
            return false
        } else if (yes === true && expire.includes("-", "*", "/", "%", "+")) {
            ui.printError("تعداد روز ها را به درستی وارد نمایید!", "border border-2 border-warning bg-white text-dark")
            return false
        } else if (cover === "") {
            ui.printError("میزان پوشش بیمه نامه را مشخص کنید!", "border border-2 border-warning bg-white text-dark")
            return false
        } else if (company === "") {
            ui.printError("شرکت بیمه گذار را انتخاب کنید!", "border border-2 border-warning bg-white text-dark")
            return false
        } else if (time === "") {
            ui.printError("مدت زمان بیمه را مشخص کنید!", "border border-2 border-warning bg-white text-dark")
            return false
        } else {
            return true
        }
    }

    // check value of auto type
    autoTypeValidate(autoType, carType) {
        // check if user chooes one auto type
        if (autoType !== "") {
            // active car type
            carType.disabled = false
        } else {
            // disable car type
            carType.disabled = true

            // set default
            document.querySelector("#selected-car").selected = true
        }
    }

    // check the select type damage
    damageCheck(damage) {
        // check the select type and show relative field
        if (damage !== "") {
            document.querySelector("#damage-number").style.display = "flex"
            if (damage === "property") {
                // activate and diable selects
                document.querySelector("#property-number").disabled = false
                document.querySelector("#life-number").disabled = true

                // set default option
                document.querySelector("#selected-life").selected = true
            } else if (damage === "life") {
                // activate and diable selects
                document.querySelector("#life-number").disabled = false
                document.querySelector("#property-number").disabled = true

                // set default option
                document.querySelector("#selected-property").selected = true
            } else if (damage === "life&property") {
                // activate and diable selects
                document.querySelector("#life-number").disabled = false
                document.querySelector("#property-number").disabled = false

                // set default option
                document.querySelector("#selected-property").selected = true
                document.querySelector("#selected-life").selected = true
            }
        } else {
            // disable damage number
            document.querySelector("#damage-number").style.display = "none"
        }
    }
}