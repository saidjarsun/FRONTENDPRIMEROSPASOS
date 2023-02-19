document.getElementById('boton').addEventListener('click', function() {
    console.log('se apreto el boton');
    document.getElementById('demo').innerHTML="Lo apretaste q boludo jaja"
})


document.getElementById('botoncolor').addEventListener('click', function() {
    console.log('se apreto el boton de color');
    document.body.style.backgroundColor= '#BBAB47'
})

document.getElementById('botonocultar').addEventListener('click', function() {
        document.getElementById('demo').style.display= 'none'
})