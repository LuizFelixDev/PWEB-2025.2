function carregarDiv() {
    let div = document.getElementById("divName");
    if (div.innerHTML === '') {
        div.innerHTML = `<h1>Acerola</h1>`;     
    } else {
        div.innerHTML = '';
    }
}

let button = document.getElementById('button');
button.addEventListener('click', function() {
    carregarDiv(); 
    document.querySelector('#divName') 
        .classList.toggle('fade');
});
