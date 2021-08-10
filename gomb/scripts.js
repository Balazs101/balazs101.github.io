document.getElementById('btn').addEventListener("click", function() {
    console.log("Igen, most rámkattintottál");
  });


$('#btn').click(() => {
  $('#btn2').text('GOMB');
});


$('#btn3').click(() => {
    $('#btn3').css("background", "blue")
})