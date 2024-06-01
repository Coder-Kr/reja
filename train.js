/*F-TASK: 

Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
MASALAN: getReverse("hello") return true return qiladi
*/

function getReverse(s){
    let arr2 = [];
    for (let v of s){
      if(arr2.includes(v)){
        return "true";
      }
      else
        { 
         arr2.push(v); 
       }
    }
    return "false";
  }
  
  console.log(getReverse("hello"));