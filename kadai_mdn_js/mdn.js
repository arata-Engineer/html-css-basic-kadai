// 本日の日付を取得する
const today = new Date();


// 年月日を取得する
const year = today.getFullYear(); 

// 月は0から始まるため+1する
const month = today.getMonth() + 1; 

const day = today.getDate();

console.log(year + "年" + month + "月" + day + "日");
