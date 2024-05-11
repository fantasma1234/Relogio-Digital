const horas = document.querySelector("#horas")
const minutos = document.querySelector("#minutos")
const segundos = document.querySelector("#segundos")

const relogio = setInterval(function time() {
    let dateToday = new Date()
    let h = dateToday.getHours() //<-- pega a hora atual
    let min = dateToday.getMinutes() //<-- pega o minuto atual
    let s = dateToday.getSeconds() //<-- pega o segundo atual

    if (h < 10) {
        h = "0" + h
    }

    if (min < 10) {
        min = "0" + min
    }

    if (s < 10) {
        s = "0" + s
    }

    horas.textContent = h
    minutos.textContent = min
    segundos.textContent = s
})