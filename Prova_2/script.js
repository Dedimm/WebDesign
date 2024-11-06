
document.addEventListener('DOMContentLoaded', () => {
    const botaoCriar = document.querySelector('.btn-primary'); 
    const nomeInput = document.getElementById('titulo'); 

    const cardsContainer = document.createElement('div'); 
    cardsContainer.classList.add('cards-container');
    cardsContainer.style.display = 'flex';
    cardsContainer.style.flexWrap = 'wrap';
    cardsContainer.style.margin = '-10px';
    document.body.appendChild(cardsContainer);

    botaoCriar.addEventListener('click', () => {
        const tituloCard = nomeInput.value;  

        const card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '18rem';  
        card.style.margin = '10px'; 

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        const numCards = cardsContainer.children.length + 1;
        img.src = `https://picsum.photos/400/200?random=${numCards}`;
        img.alt = 'Imagem aleatória';  

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitulo = document.createElement('h5');
        cardTitulo.classList.add('card-titulo');
        cardTitulo.textContent = tituloCard;  

        const apagarBtn = document.createElement('button');
        apagarBtn.classList.add('btn', 'btn-danger');  
        apagarBtn.textContent = 'Apagar';  

        apagarBtn.addEventListener('click', () => {
            card.remove();  
        });

        cardBody.appendChild(cardTitulo);
        cardBody.appendChild(apagarBtn);
        card.appendChild(img);
        card.appendChild(cardBody);

        cardsContainer.appendChild(card);  
    });
            function apagarTodos() {
            let cards = document.querySelectorAll(".card");
            cards.forEach(card => card.remove());
        }

});
function apagarTodos() {
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => card.remove());
}