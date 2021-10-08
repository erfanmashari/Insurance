class UI {
    // show years dynamic
    showYears() {
        // change persian number to english
        let
            persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
            arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
            fixNumbers = function (str) {
                if (typeof str === 'string') {
                    for (var i = 0; i < 10; i++) {
                        str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
                    }
                }
                return str;
            };

        // get persian date
        const date = new Date().toLocaleDateString('fa-IR')

        // get persian year
        const pesentYear = date.substring(0, 4)

        // get persian year by english numbers
        const nowYear = fixNumbers(pesentYear)

        // set min year
        const min = nowYear - 25

        // count 25 years before
        for (let index = nowYear; index >= min; index--) {
            // create option
            const year = document.createElement("option")
            year.value = index
            year.innerHTML = index

            // append option to year made
            document.querySelector("#year-made").appendChild(year)
        }
    }

    // count discountYear
    discountYear(yearMade) {
        if (yearMade !== "") {
            // active discount year select tag
            document.querySelector("#discount-year").disabled = false

            // change persian number to english
            let
                persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
                arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
                fixNumbers = function (str) {
                    if (typeof str === 'string') {
                        for (var i = 0; i < 10; i++) {
                            str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
                        }
                    }
                    return str;
                };

            // get persian date
            const date = new Date().toLocaleDateString('fa-IR')

            // get persian year
            const pesentYear = date.substring(0, 4)

            // get persian year by english numbers
            const nowYear = fixNumbers(pesentYear)


            // maximum discount
            const max = Number(nowYear) - Number(yearMade) 

            // delete before options
            this.deleteOptions(document.querySelector(".ys"), "discount-year", "تعداد سال های تخفیف عدم خسارت(در صورت نداشتن گزینه ای را انتخاب نکنید)")

            // count from 1 to 14
            for (let index = 1; index <= max && index <= 14; index++) {
                // create option
                const year = document.createElement("option")
                year.value = index
                year.className = "ys"
                year.innerHTML = `${index} سال`

                // append option to discount year
                document.querySelector("#discount-year").appendChild(year)
            }
        }
    }

    // delete unrelative options methode
    deleteOptions(classNames, selectID, text, id) {
        //check and delete unrelative options
        if (classNames) {
            let array = []
            array.push(document.querySelectorAll(`#${selectID} option`))
            // acces to options and delete them
            array.forEach(element => {
                element.forEach(option => {
                    option.remove()
                });
            });

            // create default option
            const defaultOp = document.createElement("option")
            defaultOp.value = ""
            defaultOp.id = id
            defaultOp.selected = true
            defaultOp.innerHTML = text

            // append oprion to cartype
            document.querySelector(`#${selectID}`).appendChild(defaultOp)
        }
    }

    // create option methode
    createOption(value, text, selectID, className = "") {
        // careate option
        const optionMake = document.createElement("option")
        optionMake.value = value
        optionMake.classList = className
        optionMake.innerHTML = text

        // append it to car type
        document.querySelector(`#${selectID}`).appendChild(optionMake)
    }

    // put car type options based of auto type value
    carTypeOptions(autoType) {
        // put different options for different auto types
        if (autoType === "motorcycle") {
            this.deleteOptions(document.querySelector(".pride") || document.querySelector(".oneTon") || document.querySelector(".sevenP") || document.querySelector(".farming"), "car-type", "نوع وسیله نقلیه را انتخاب کنید", "selected-car")
            // check if the optins not exist
            if (document.querySelector(".gas") === null) {
                // add realative options
                this.createOption("gas", "گازی", "car-type", "gas")
                this.createOption("one", "دنده ای یک سیلندر", "car-type")
                this.createOption("two", "دو سیلندر و به بالا", "car-type")
                this.createOption("threeWheels", "دنده ای دارای سه چرخ یا ساید کار", "car-type")
            }
        } else if (autoType === "light-cars") {
            this.deleteOptions(document.querySelector(".gas") || document.querySelector(".oneTon") || document.querySelector(".sevenP") || document.querySelector(".farming"), "car-type", "نوع وسیله نقلیه را انتخاب کنید", "selected-car")
            // check if the optins not exist
            if (document.querySelector(".pride") === null) {
                // add realative options
                this.createOption("lessFour", "کمتر از چهار سیلندر", "car-type")
                this.createOption("pride", "پیکان، پراید و سپند", "car-type", "pride")
                this.createOption("four", "سایر چهار سیلندر ها", "car-type")
                this.createOption("moreFour", "بیش از چهار سیلندر", "car-type")
            }
        } else if (autoType === "transport-cars") {
            this.deleteOptions(document.querySelector(".gas") || document.querySelector(".pride") || document.querySelector(".sevenP") || document.querySelector(".farming"), "car-type", "نوع وسیله نقلیه را انتخاب کنید", "selected-car")
            // check if the optins not exist
            if (document.querySelector(".oneTon") === null) {
                // add realative options
                this.createOption("oneTon", "یک تن", "car-type", "oneTon")
                this.createOption("betweenOneThree", "بین یک تا سه تن", "car-type")
                this.createOption("betweenThreeFive", "بین سه تا پنج تن", "car-type")
                this.createOption("betweenFiveTen", "بین پنج تا ده تن", "car-type")
                this.createOption("betweenTenTwenty", "بین ده تا بیست تن", "car-type")
                this.createOption("twentyTon", "بیست تن", "car-type")
            }
        } else if (autoType === "autowork") {
            this.deleteOptions(document.querySelector(".gas") || document.querySelector(".pride") || document.querySelector(".oneTon") || document.querySelector(".farming"), "car-type", "نوع وسیله نقلیه را انتخاب کنید", "selected-car")
            // check if the optins not exist
            if (document.querySelector(".sevenP") === null) {
                // add realative options
                this.createOption("7P", "7 نفر با احتساب راننده", "car-type", "sevenP")
                this.createOption("9P", "9 نفر با احتساب راننده", "car-type")
                this.createOption("10PVan", "ون با ظرفیت 10 نفر با احتساب راننده", "car-type")
                this.createOption("16PMini", "مینی بوس 16 نفره با احتساب راننده", "car-type")
                this.createOption("21PMini", "مینی بوس 21 نفره با احتساب راننده", "car-type")
                this.createOption("27PBus", "اتوبوس 27 نفره با احتساب راننده و کمک", "car-type")
                this.createOption("40PBus", "اتوبوس 40 نفره با احتساب راننده و کمک", "car-type")
                this.createOption("44PBus", "اتوبوس 44 نفره با احتساب راننده و کمک", "car-type")
            }
        } else if (autoType === "other") {
            this.deleteOptions(document.querySelector(".gas") || document.querySelector(".pride") || document.querySelector(".oneTon") || document.querySelector(".sevenP"), "car-type", "نوع وسیله نقلیه را انتخاب کنید", "selected-car")
            // check if the optins not exist
            if (document.querySelector(".farming") === null) {
                // add realative options
                this.createOption("farming", "کشاورزی", "car-type", "farming")
                this.createOption("building", "راه سازی و ساختمانی", "car-type")
                this.createOption("cleaners", "حمل زباله و خیابان پاک کن ها", "car-type")
            }
        }
    }

    // set options for car use
    carUseOptions(autoType, use) {
        const useDefault = document.querySelector("#use-default")
        // check auto type value and add related option
        if (autoType === "motorcycle") {
            // change default option details
            useDefault.value = "motor-none"
            useDefault.innerHTML = "برای موتورسیکلت کاربری خاصی توسط بیمه تعریف نشده"
            use.disabled = true
        } else if (autoType === "light-cars") {
            this.deleteOptions(document.querySelector(".in-taxi") || document.querySelector(".burn-car") || document.querySelector(".more-six"), "car-use", "در صورت داشتن کاربری خاص، آن را انتخاب کنید", "use-default")

            // add relatives options
            this.createOption("in-taxi", "وسایل نقلیه با کاربری تاکسی، کرایه و مسافرکشی درون شهری", "car-use", "in-taxi")
            this.createOption("out-taxi", "وسایل نقلیه با کاربری تاکسی، کرایه و مسافرکشی برون شهری", "car-use")
        } else if (autoType === "transport-cars") {
            this.deleteOptions(document.querySelector(".in-taxi") || document.querySelector(".burn-car") || document.querySelector(".more-six"), "car-use", "در صورت داشتن کاربری خاص، آن را انتخاب کنید", "use-default")

            // add relatives options
            this.createOption("explosive", "وسیله نقلیه بارکش برای حمل مواد منفجره", "car-use")
            this.createOption("burn", "وسیله نقلیه بارکش برای حمل مواد سوختنی مایع و گازی نوع 1", "car-use", "burn-car")
        } else if (autoType === "autowork") {
            this.deleteOptions(document.querySelector(".in-taxi") || document.querySelector(".burn-car") || document.querySelector(".more-six"), "car-use", "در صورت داشتن کاربری خاص، آن را انتخاب کنید", "use-default")

            // add relatives options
            this.createOption("in-bus", "وسایل نقلیه عمومی شهری حمل مسافر با ظرفیت بیش از 6 نفر", "car-use", "more-six")
        } else if (autoType === "other") {
            // change default option details
            useDefault.value = "other-none"
            useDefault.innerHTML = "برای سایر وسایل نقلیه کاربری خاصی توسط بیمه تعریف نشده"
            use.disabled = true
        }
    }

    printError(message, className) {
        // create div
        const div = document.createElement("div")
        div.id = "fixed"
        div.innerHTML = message
        div.classList = className

        // append div to body
        document.querySelector("#body").appendChild(div)

        setTimeout(() => {
            div.remove()
        }, 3000);
    }

    // show factor
    showFactor(price, type, use, year, company, time) {
        // change main div size
        document.querySelector("#type-year").classList.remove("col-12")
        document.querySelector("#type-year").classList.add("col-lg-6")

        // set company name
        let companyName;
        switch (company) {
            case "no-discount":
                companyName = "شرکت بیمه 1"
                break;
            case "3discount":
                companyName = "شرکت بیمه 2"
                break;
            case "6discount":
                companyName = "شرکت بیمه 3"
                break;
        }

        // set time
        let insTime;
        switch (time) {
            case "1month":
                insTime = "1 ماه"
                break;
            case "3month":
                insTime = "3 ماه"
                break;
            case "6month":
                insTime = "6 ماه"
                break;
            case "1year":
                insTime = "1 سال"
                break;
        }

        // check use
        let carUse
        if (use === "") {
            carUse = "کاربردی مشخص نشده است!"
        } else {
            carUse = use
        }

        // create list
        const factor = document.createElement("ul")
        factor.classList = "col-12 list-group p-3"
        factor.innerHTML = `
                <li class="col-12 list-group-item bg-primary rounded-3 text-white text-center border border-2 border-dark p-2 mb-2">نوع وسیله نقلیه: ${type}</li>
                <li class="col-12 list-group-item bg-primary rounded-3 text-white text-center border border-2 border-dark p-2 mb-2">کاربرد: ${carUse}</li>
                <li class="col-12 list-group-item bg-primary rounded-3 text-white text-center border border-2 border-dark p-2 mb-2">مدل وسیله نقلیه: ${year}</li>
                <li class="col-12 list-group-item bg-primary rounded-3 text-white text-center border border-2 border-dark p-2 mb-2">شرکت بیمه گذار: ${companyName}</li>
                <li class="col-12 list-group-item bg-primary rounded-3 text-white text-center border border-2 border-dark p-2 mb-2">مدت زمان بیمه: ${insTime}</li>
                <li class="col-12 list-group-item bg-primary rounded-3 text-white text-center border border-2 border-dark p-2 mb-2">قیمت نهایی: ${price}</li>
                <button class="col-12 list-group-item bg-dark rounded-3 text-white text-center border border-2 border-dark p-2" id="returnn">بازگشت به صفحه اصلی</button>
        `

        // append factor to html
        document.querySelector("#type-year").appendChild(factor)

        document.querySelector("#returnn").addEventListener("click", e => {
            e.preventDefault()

            location.reload()
        })

    }
}