let questions, posicion = 0;

document.addEventListener("DOMContentLoaded", () => {

    questions = [
        {qright: 'some books on the shelf.', answer: '', correct: 'THERE ARE'},
        {qright:'very little money left in the box.', answer: '', correct: 'THERE IS'},
        {qright:'only one student in the lab now.', answer: '', correct: 'THERE IS'},
        {qright:'very few people at the conference.', answer: '', correct: 'THERE ARE'},
        {qright:'no more milk in the jug.', answer: '', correct: 'THERE IS'},
        {qright:'no more cassettes in the box.', answer: '', correct: 'THERE ARE'},
        {qright:'no time left.', answer: '', correct: 'THERE IS'},
        {qright:'several helicopters in the airfield.', answer: '', correct: 'THERE ARE'},
        {qright:'some letters for you on the desk.', answer: '', correct: 'THERE ARE'},
        {qright:'a lot of mistakes in your composition.', answer: '', correct: 'THERE ARE'}
    ];

    mostrarPregunta(posicion);

    document.getElementById("btnfin").style.display = "none";

    document.getElementById('btnprev').addEventListener('click', () => {
    if(posicion != 0) {
        posicion--;
        mostrarPregunta(posicion);

        document.getElementById("btnnext").style.display = "inline-block";
        document.getElementById("btnfin").style.display = "none";
    }
});

    document.getElementById('btnnext').addEventListener('click', () => {
        if(posicion != questions.length - 1) {
            posicion++;
            mostrarPregunta(posicion);
        } else {
            document.getElementById("btnnext").style.display = "none";
            document.getElementById("btnfin").style.display = "inline-block";
        }
    });

});

function mostrarPregunta(posicion){
    const question = document.getElementsByClassName('question')[0];
    question.innerHTML = `
        <input type="text" value="${questions[posicion].answer}" readonly
        ondrop="SoltarTexto(event)" ondragover="PermitirSoltar(event)">
        <p>${questions[posicion].qright}</p>
    `;
}

function iniciarArrastre(evento){
    evento.dataTransfer.setData("text/plain", evento.target.textContent.trim());
}

function PermitirSoltar(evento){
    evento.preventDefault();
}

function SoltarTexto(evento){
    evento.preventDefault();
    const datos = evento.dataTransfer.getData("text/plain");
    questions[posicion].answer = datos;
    evento.target.value = datos;
}

