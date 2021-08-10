console.log("A java script is betoltott")

let names = ['Balazs', 'Peti', 'Laci', 'Feri']


  names.forEach((nev) => {
    $('body').append(
    "<ul><li>" + nev + "</li></ul>"
    )})

    




let additionalBlock = {
  title: "Beillesztve JavaScripttel",
  text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
};

$('body').append(
  "<h1>" + additionalBlock.text + "<h1/>"
)

$('body').append(
  "<p>" + additionalBlock.title + "<p/>"
)