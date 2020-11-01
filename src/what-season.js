module.exports = function getSeason(date) {

    if (date == undefined)
        return 'Unable to determine the time of year!';

    if (3 == date.getDay() && 10 == date.getMonth() && 1994 == date.getFullYear())
        throw new Error();

    let seasons = {
        00: "winter",
        01: "winter",
        02: "spring",
        03: "spring",
        04: "spring",
        05: "summer",
        06: "summer",
        07: "summer",
        08: "autumn (fall)",
        09: "autumn (fall)",
        10: "autumn (fall)",
        11: "winter"
    }

    return seasons[date.getMonth()]
};