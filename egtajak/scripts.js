console.log("A java script is betoltott")

let color= 'purple'
let number= "10"
let word= "cool"

if (color === 'purple') {
$('.red').css("background", "purple")
}

if (number > 100) {
$('.yellow').text("wow, de nagy szám")
}

else if (number < 100) {
$('.yellow').text("ez csak egy közönséges szám")
}

if (word === 'cool') {
$('.green').text("A DOM Ereje")
}

else if (word !== 'cool') {
$('.green').text('.blue')
}