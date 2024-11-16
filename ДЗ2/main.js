let age = prompt("Введите ваш возраст")
if (age < 2) {
    alert("Вы ребенок");
} else if (12 && age < 18) {
    alert("Вы подросток");
} else if (18 && age < 60) {
    alert("Вы взрослый");
} else {
    alert("Вы пенсионер");
}

let num1 = prompt("Введите число от 0 до 9")
switch (num1) {
    case '0':
        alert(")");
        break;
    case '1':
        alert("!");
        break;
    case '2':
        alert("@");
        break;
    case '3':
        alert("#");
        break;
    case '4':
        alert("$");
        break;
    case '5':
        alert("%");
        break;
    case '6':
        alert("^");
        break;
    case '7':
        alert("&");
        break;
    case '8':
        alert("*");
        break;
    case '9':
        alert("(");
        break;
    default:
        alert("Нет таких значений")
}

let int = prompt("Введите трехзначное число")
let int1 = (Math.floor(int / 100))
let int2 = (Math.floor(i / 10) % 10)
let int3 = (int % 10)
if (int1 == int2 || int2 == int3 || int1 == int3)
    alert("Найдено совпадение цифр")
else
    alert("Совпадений не найдено")
let y = prompt("Введите год для проверки")
let y1 = (y % 4)
let y2 = (y % 400)
let y3 = (y % 100)
if (y1 == 0 && y3 != 0)
    alert("Год високосный")
else if (y2 == 0 && y3 != 0)
    alert("Год високосный")
else
    alert("Год не високосный")
let num = prompt("Введите пятиразрядное число")
let a_pal = Math.floor(num / 10000)
let b_pal = num % 10
let c_pal = Math.floor(num / 1000)
let d_pal = num % 100
let e_pal = c_pal % 10
let i_pal = Math.floor(d_pal / 10)
if ((a_pal == b_pal) && (e_pal == i_pal))
    alert("Это число палиндром")
else
    alert("Это число не палиндром")
let usd = prompt("Введите количество USD")
let m = prompt("В какую валюту хотите перевести: EUR, UAN или AZN")
if (m == 'EUR')
    alert(usd + "USD = " + usd * 0.94 + "EUR")
else if (m == 'UAN')
    alert(usd + "USD = " + usd * 41.33 + "UAN")
else alert(usd + "USD = " + usd * 1.7 + "AZN")
let val = prompt("Введите сумму покупки")
if ((val > 200) && (val < 300))
    alert("Сумма к оплате со скидкой = " + (val - (val * 0.03)))
else if ((val > 300) && (val < 500))
    alert("Сумма к оплате со скидкой = " + (val - (val * 0.05)))
else if (val > 500)
    alert("Сумма к оплате со скидкой = " + (val - (val * 0.07)))
let c = prompt("Введите длину окружности")
let p = prompt("Введите периметр квадрата")
if ((c / 2 * 3.14) < (p / 8))
    alert("Такая окружность помесится в квадрат")
else
    alert("Такая окружность не помесится в квадрат")
let ans1 = prompt("Сколько месяцев в году?")
let ans2 = prompt("Сколько месяцев имеет 28 дней?")
let ans3 = prompt("Сколько дней в Январе?")
let res=0
if(ans1.toUpperCase()=='12'){
 res+=2
}
if(ans2.toUpperCase()=='12'){
res+=2
}
if(ans3=='31'){
res+=2
 }
 alert("Вы набрали " + res + " баллов")
let year = prompt("Введите год")
let month = prompt("Введите месяц")
let day
do {
    day = prompt("Введите день")
} while (((month == 4 || month == 6 || month == 9 || month == 11) && day > 30) || (day > 28 && month == 2 && (year % 400 != 0 || (year % 4 != 0 && year % 100 == 0))) || (day > 29 && month == 2 && day == 28 && month == 2 && (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))))
if (day == 28 && month == 2 && (year % 400 != 0 || (year % 4 != 0 && year % 100 == 0))) {
    day = 1;
    month = 3;
}
else if (day == 28 && month == 2 && (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))) {
    day = 29;
}
else if (day == 30) {
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        day = 31
    }
    else {
        day = 1
        month++
        if (month > 12) {
            month--
            year++
        }
    }
}
else if (day == 31) {
    day = 1
    month++
    if (month > 12) {
        month = 1
        year++
    }
}
else {
    day++
}
alert("Следующая дата: " + day + "." + month + "." + year)