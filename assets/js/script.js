var button = document.getElementById("button");

var dayInput = document.getElementById("day");
var monthInput = document.getElementById("month");
var yearInput = document.getElementById("year");

var messageError1 = document.getElementById("messageError1");
var messageError2 = document.getElementById("messageError2");
var messageError3 = document.getElementById("messageError3");

var yearsSpan = document.getElementById("ye");
var monthSpan = document.getElementById("mo");
var daySpan = document.getElementById("da");

button.addEventListener("click", function() {
    var now = new Date();

    messageError1.textContent = "";
    messageError2.textContent = "";
    messageError3.textContent = "";

    dayInput.style.border = "1px solid hsl(0, 0%, 94%)";
    monthInput.style.border = "1px solid hsl(0, 0%, 94%)";
    yearInput.style.border = "1px solid hsl(0, 0%, 94%)";

    function showMessageError(num) {
        if (num === 1) {
            messageError1.textContent = "Invalid day";
            dayInput.style.border = "1px solid hsl(0, 100%, 67%)";
        }
        if (num === 2) {
            messageError2.textContent = "Invalid month";
            monthInput.style.border = "1px solid hsl(0, 100%, 67%)";
        }
        if (num === 3) {
            messageError3.textContent = "Must be in the past";
            yearInput.style.border = "1px solid hsl(0, 100%, 67%)";
        }
    }

    var day = parseInt(dayInput.value);
    var month = parseInt(monthInput.value);
    var year = parseInt(yearInput.value);

    if (isNaN(day) || day < 1 || day > 31) {
        showMessageError(1);
        return;
    }

    if (isNaN(month) || month < 1 || month > 12) {
        showMessageError(2);
        return;
    }

    if (isNaN(year) || year > now.getFullYear()) {
        showMessageError(3);
        return;
    }

    var maxDay;

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            maxDay = 31;
            break;

        case 2:
            if (year % 4 === 0) {
                maxDay = 29;
            } else {
                maxDay = 28;
            }
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            maxDay = 30;
            break;

        default:
            showMessageError(1);
            return;
    }

    if (day > maxDay) {
        showMessageError(1);
        return;
    }

    var isAnyInputInvalid = isNaN(day) || isNaN(month) || isNaN(year);

    if (isAnyInputInvalid) {
        showMessageError(0);
        return;
    }

    var birthDate = new Date(year, month - 1, day);

    var ageInMilliseconds = now.getTime() - birthDate.getTime();
    var ageDate = new Date(ageInMilliseconds);

    var years = Math.abs(ageDate.getUTCFullYear() - 1970);
    var months = ageDate.getUTCMonth();
    var days = ageDate.getUTCDate() - 1;

    yearsSpan.textContent = years;
    monthSpan.textContent = months;
    daySpan.textContent = days;
});
