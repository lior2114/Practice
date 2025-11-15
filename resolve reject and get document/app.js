function play() {

    let min = +document.getElementById("min").value
    let max = +document.getElementById("max").value

    Gen7boom(min, max)
    .then((success) => { console.log(success) })
    .catch((err) => { console.log(err) })

}



function Gen7boom(min, max) {
    let p = new Promise((resolve, reject) => {
        let number = min + Math.floor(Math.random() * (min - max))
        if (number % 7 == 0 || number % 10 == 7) {
            resolve(number + " " + "Boom")
        } else {
            reject("Not Boom")
        }
    })
    return p
}
