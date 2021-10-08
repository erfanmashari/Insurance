// all relative to counting insurance
class Insurance {
    calculateInsurance(type, year, discount, property, life, expire, use, priceCover, company, time) {
        // set price
        let price = 0
        let carType;
        // set base price based of type
        switch (type) {
            // motor cycle
            case "gas":
                price = 481000
                carType = "موتورسیکلت گازی"
                break;
            case "one":
                price = 587600
                carType = "موتورسیکلت دنده ای یک سیلندر"
                break;
            case "two":
                price = 645500
                carType = "موتورسیکلت دو سیلندر و به بالا"
                break;
            case "threeWheels":
                price = 694200
                carType = "موتورسیکلت دنده ای دارای 3 چرخ یا سایدکار"
                break;
            // light cars
            case "lessFour":
                price = 1937500
                carType = "خودرو سواری کمتر از چهار سیلندر"
                break;
            case "pride":
                price = 2214300
                carType = "خودرو سواری پیکان، پراید یا سپند"
                break;
            case "four":
                price = 2697100
                carType = "خودرو سواری 4 سیلندر"
                break;
            case "moreFour":
                price = 3018400
                carType = "خودرو سواری بیش از 4 سیلندر"
                break;
            // transport cars
            case "oneTon":
                price = 2372500
                carType = "وسیله نقلیه بارکش با ظرفیت 1 تن"
                break;
            case "betweenOneThree":
                price = 2858000
                carType = "وسیله نقلیه بارکش با ظرفیت بین 1 تا 3 تن"
                break;
            case "betweenThreeFive":
                price = 3617600
                carType = "وسیله نقلیه بارکش با ظرفیت بین 3 تا 5 تن"
                break;
            case "betweenFiveTen":
                price = 4634800
                carType = "وسیله نقلیه بارکش با ظرفیت بین 5 تا 10 تن"
                break;
            case "betweenTenTwenty":
                price = 5392300
                carType = "وسیله نقلیه بارکش با ظرفیت بین 10 تا 20 تن"
                break;
            case "twentyTon":
                price = 5715900
                carType = "وسیله نقلیه بارکش با ظرفیت 20 تن"
                break;
            // auto work
            case "7P":
                price = 5555400
                carType = "استیشن با ظرفیت 7 نفر"
                break;
            case "9P":
                price = 5715900
                carType = "استیشن با ظرفیت 9 نفر"
                break;
            case "10PVan":
                price = 5779600
                carType = "ون با ظرفیت 10 نفر"
                break;
            case "16PMini":
                price = 7105400
                carType = "مینی بوس با ظرفیت 16 نفر"
                break;
            case "21PMini":
                price = 7480700
                carType = "مینی بوس با ظرفیت 21 نفر"
                break;
            case "27PBus":
                price = 10882800
                carType = "اتوبوس با ظرفیت 27 نفر"
                break;
            case "40PBus":
                price = 13693300
                carType = "اتوبوس با ظرفیت 40 نفر"
                break;
            case "44PBus":
                price = 14532100
                carType = "اتوبوس با ظرفیت 44 نفر"
                break;
            // other
            case "farming":
                price = 994500
                carType = "وسیله نقلیه کشاورزی"
                break;
            case "building":
                price = 1420800
                carType = "وسله نقلیه راه سازی و ساختمانی"
                break;
            case "cleaners":
                price = 2309000
                carType = "وسیله نقلیه حمل زباله و خیابان پاک کن ها"
                break;
        }
        
        let carUse = "";
        // calculate by use
        switch (use) {
            // light cars
            case "in-taxi":
                price += price * 0.1
                carUse = "آژانس درون شهری"
                break;
            case "out-taxi":
                price += price * 0.2
                carUse = "آژانس برون شهری"
                break;
            // transport cars
            case "explosive":
                price += price * 0.5
                carUse = "حمل مواد منفجره"
                break;
            case "burn":
                price += price * 0.25
                carUse = "حمل مواد سوختنی"
                break;
            // auto work
            case "in-bus":
                price -= price * 0.5
                break;
        }

        // calculate by year for old cars
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

        // calculate the difference
        const difference = nowYear - Number(year)

        if (difference > 15 && difference <= 25) {
            price += price * ((difference - 15) * 0.02)
        }

        // change discount to number
        let dis = Number(discount)

        // calculate discount year by property
        switch (property) {
            case "1p":
                dis -= dis * 0.2
                break;
            case "2p":
                dis -= dis * 0.3
                break;
            case "3p":
                dis -= dis * 0.4
                break;
        }

        // calculate discount year by life 
        switch (life) {
            case "1l":
                dis -= dis * 0.3
                break;
            case "2l":
                dis -= dis * 0.7
                break;
            case "3l":
                dis = 0
                break;
        }
        
        // calculate price by discount minus damage
        if (dis > 0) {
            price -= price * (dis * 0.05)
        }

        // calculate by expire
        if (expire < 365) {
            price += expire * 6000
        } else if (expire >= 365) {
            price += 365 * 6000
        }

        // calculate by price cover
        switch (priceCover) {
            case "mid":
                price += price * 0.25
                break;
            case "high":
                price += price * 0.5
                break;
        }

        // calculate by company
        switch (company) {
            case "3discount":
                price -= price * 0.03
                break;
            case "6discount":
                price -= price * 0.05
                break;
        }

        // calculate by time
        switch (time) {
            case "1month":
                price -= price * 0.9
                break;
            case "3month":
                price -= price * 0.7
                break;
            case "6month":
                price -= price * 0.45
                break;
        }

        // send parametes to methode
        ui.showFactor(Math.floor(price) + 1, carType, carUse, year, company, time)
    }
}