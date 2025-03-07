// console.log("Jack Ma maslahatlari"); 
// const list = [ 
// "yaxshi talaba boling", // 0-20 
// "to'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30 
// "o'zingizga ishlashni boshlang", // 30-40 
// "siz kuchli bo'lgan narsalarni qiling", // 40-50 
// "yoshlarga investitsiya qiling", // 50-60 
// "endi dam oling, foydasi yo'q", // 60 
// ]; 

//CallBack function

// function maslahatBering (a, callback) { 
//   if (typeof a !== "number") callback("insert a number", null); 
//   else if (a <= 20) callback(null, list[0]); 
//   else if (a > 20 && a <= 30) callback(null, list[1]); 
//   else if (a > 30 && a <= 40) callback(null, list[2]); 
//   else if (a > 40 && a <= 50) callback(null, list[3]); 
//   else if (a > 50 && a <= 60) callback(null, list[4]); 
//   else { 
//     setInterval(function () { 
//       callback(null, list[5]); 
//     }, 1000); 
//   } 
// } 

// console.log("passed here 0"); 
//   maslahatBering(65, (err, data) => { 
//   if (err) console.log("ERROR:", err); 
//   else{ 
//     console.log(data); 
//   } 
// }); 
// console.log("passed here 1");

// Async function

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(list[5]);
//     }, 5000);
//   });
// }

//then & catch

// console.log("passed here 0"); 
// maslahatBering(30)
//  .then((data)=> {
//    console.log("Javob:", data);
//  })
//  .catch((err)=> {
//    console.log("ERROR:", err);
// });
// console.log("passed here 1"); 

//awit

// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(70);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();

// A-TASK
function countLetter(letter, word) {
  let count = 0;
  for (let quantity of word) {
    if (quantity === letter) {
      count++;
    } 
    else if (quantity !== letter) {} 
    }
  return count;
}

console.log(countLetter("w", "abstraction"));

//buni o'zimdan boshqacha qilib yasadim
function countLetter(letter, word) {
  let count = 0;
  for (let quantity of word) {
    if (quantity === letter) {
      count++;
    }
  }
  return count;
}

console.log(countLetter("a", "abstraction"));

// B-TASK

function countDigits(str) {
  let count = 0;
  for (let char of str) {
    if (char >= '0' && char <= '9') {
      count++;
    }
  }
  return count;
}

console.log(countDigits("kdsjnk12i76t7jsacb867,jashv765"));

// C-TASK

function checkContent(a, b) {
  return a.length === b.length && a.split("").sort().join("") === b.split("").sort().join("");
}

console.log(checkContent("school", "univer"));

// D-TASK

class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  _getTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    return `${hours}:${minutes}`;
  }

  qoldiq() {
    const time = this._getTime();
    const result = `Hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`;
    console.log(result);
    return result;
  }

  sotish(product, amount) {
    const time = this._getTime();
    if (product === "non") {
      this.non -= amount;
    } else if (product === "lagmon") {
      this.lagmon -= amount;
    } else if (product === "cola") {
      this.cola -= amount;
    }
    console.log(`Hozir ${time}da ${amount}ta ${product} sotildi.`);
  }

  qabul(product, amount) {
    const time = this._getTime();
    if (product === "non") {
      this.non += amount;
    } else if (product === "lagmon") {
      this.lagmon += amount;
    } else if (product === "cola") {
      this.cola += amount;
    }
    console.log(`Hozir ${time}da ${amount}ta ${product} qabul qilindi.`);
  }
}

const shop = new Shop(20, 5, 4);
shop.qoldiq(); 

shop.sotish("non", 4);
shop.qabul("cola", 16);
shop.qoldiq(); 

function getReverse(str) {
  return str.split("").reverse().join("");
}

console.log(getReverse("Hi MIT"));