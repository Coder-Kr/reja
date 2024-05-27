// D-TASK:

// Shunday function tuzing, u 2ta string parametr ega bolsin,
// hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;



function checkContent(a, b) {
    const str1 = a.split("").sort().join();
    const str2 = b.split("").sort().join();

    if (str1 == str2) {
        return true;
    }
    else {
        return false;
    }


};


console.log(checkContent("mitgroup", "gmtiprou"));