export function calculateFallDistance(){
    let t = prompt("Введите время падения:")
    t = Number(t)
    const g = 9.8
    const d = (1/2)*g*t*t
    alert("Расстояние падения: " + d)
}