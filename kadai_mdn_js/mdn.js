// 本日の日付を取得する
window.onload = function () {
    var today = new Date();
    console.log(today);


// 年月日を取得する
console.log("年=" + today.getFullYear());
console.log("月=" + (today.getMonth()+1));
console.log("日=" + today.getDate());

}