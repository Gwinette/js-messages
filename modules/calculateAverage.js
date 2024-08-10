export function calculateAverage(){
    let a = prompt("Введите первое число")
    let b = prompt("Введите второе число")
    let c = prompt("Введите третье число")
    a = Number(a)
    b = Number(b)
    c = Number(c)
    const avg = (a + b + c)/2
    alert("Средне значение: " + avg)
}