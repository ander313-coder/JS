let name = prompt("Введите ваше имя")
alert("Привет, " + name)
let age = prompt("Введите год вашего рождения")
alert("Вам " + (2024-age) + "лет")
let p = prompt("Введите длину стороны квадрата")
alert("Периметр квадрата = " + (p*4) )
let x = prompt("Введите радиус окружности")
alert("Периметр окружности = " + (3.14*x*x) )
let k = prompt("Введите расстояние между городами в км.")
let h = prompt("За сколько часов вы хотите преодолеть это расстояние")
alert("Ваша скорость должна быть " + (k/h) + "км/ч")
let d = prompt("Конвертор валют. Введите кол-во долларов")
alert("Это будет " + (d*0.93855) + " евро")
let f = prompt("Введите объем флешки в гигабайтах")
alert("На эту флешку войдет " + (Math.floor(f*1000/820)) + " файлов по 820 мб")
let r = prompt("Введите сумму денег в кошельке")
let c = prompt("Сколько стоит одна шоколадка")
alert("Вы можете купить " + (Math.floor(r/c)) + " шоколадок и "+ (r%c) + "рублей сдачи у вас останется")
let i = prompt("Введите трехзначное число")
let res = 0
while (i) {
    res *= 10;
    res += i % 10;
    i = Math.floor(i / 10);
}
alert("Ваше число наоборот "+ (res) )
let q = prompt("Введите число")
q % 2 == 0 ? alert('Четное') : alert('Не четное')