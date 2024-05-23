// B-TASK: 

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
const validator = require("validator");
function countDigits(s) {
    let total = 0;
    for (let value of s) {
        if (validator.isInt(value)) {
            total++;
        }
    }
    return total;
}
console.log(countDigits("ad2a54y79wet0sfgb9"));

// function countDigits(s) {
//     let total = 0;
//     for (let value of s) {
//         for (let i = 0; i <= 9; i++) {
//             if (value == i) {
//                 total++;
//             }
//         }
//     }
//     return total;
// }

// console.log(countDigits("ad2a54y79wet0sfgb9"));

// A-TASK:
// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni
// ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.
// function countLetter(a, b) {
//     let total = 0;
//     for (let i of b) {
//         if (a == i) {
//             total++;
//         }
//     }
//     return total;
// };

// console.log(countLetter("e", "engineer"));

// console.log("Jack Ma Maslahatlari:");
// const list = [
//     "Yaxshi talaba bo'ling", //0-20
//     "To'g'ri boshliq tanlang va ko'proq xato qiling", //20-30
//     "O'zingizga ishlashni boshlang", //30-40
//     "Siz kuchli bo'lgan narsalarni qiling", //40-50
//     "Yoshlarga investitsiya qiling", //50-60
//     "Endi dam oling, endi foydasi yoq" //60
// ];

// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("Insert number:");  //call back 1-parametriga error yozamiz, Error mavjud bolmasa null qoyamiz. 2-paramtr ga data beramiz, biz qanaqa data qaytarmoqchimiz
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         // Promise di yaxshi tarafi, unda setTimeout uchun yaxshi ishlaydi
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//         })
//     }
// }


// async & await
// bunda ketma ketlik bn amalaga oshiriladi. ya'ni maslahatBering(20) dan javobdi oladi va keyin maslahatBering(31) ishlaydi
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(70);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }

// run();

// // .then() & .catch()
// console.log("passed here  0");
// maslahatBering(20)
//     .then((data) => {
//         console.log("Javob", data);
//     })
//     .catch((err) => {
//         console.log("Error: ", err);
//     });

// console.log("passed here 1");



// /* callback function */
// // callback function da setInterval()

// console.log("Jack Ma Maslahatlari:");
// const list = [
//     "Yaxshi talaba bo'ling", //0-20
//     "To'g'ri boshliq tanlang va ko'proq xato qiling", //20-30
//     "O'zingizga ishlashni boshlang", //30-40
//     "Siz kuchli bo'lgan narsalarni qiling", //40-50
//     "Yoshlarga investitsiya qiling", //50-60
//     "Endi dam oling, endi foydasi yoq" //60
// ];

// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("Insert number:", null);  //call back 1-parametriga error yozamiz, Error mavjud bolmasa null qoyamiz. 2-paramtr ga data beramiz, biz qanaqa data qaytarmoqchimiz
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(() => {
//             callback(null, list[5]);
//         }, 5000);
//     }
// }


// console.log("passed here  0");
// maslahatBering(70, (err, data) => {
//     if (err) console.log("Error: ", err);
//     else {
//         console.log("Javob:", data);
//     }
// });

// console.log("passed here 1");