document.addEventListener('DOMContentLoaded', () => {
    const botaoImagem = document.querySelector('.botao_imagem');
    const image = document.getElementById('dog');
    const botaoTitulo = document.querySelector('.botao_titulo');
    const botaoParagrafo = document.querySelector('.botao_paragrafo');
    const botaoAudio = document.querySelector('.botao_audio');
    const botaoAltera = document.querySelector('.botao_altera')
    const titulo = document.querySelector('.titulo');
    const audio = document.querySelector('.audio');

    botaoImagem.addEventListener('click', () => {
        image.src = 'cat.png'; 
    });
    botaoTitulo.addEventListener('click', () => {
        titulo.textContent = "Tituloooooooooooo novo";
    })
    botaoParagrafo.addEventListener('click', () =>{ 
        document.body.style.color = 'purple';
    })
    botaoAudio.addEventListener('click', () => {
        audio.play();
    })
    botaoAltera.addEventListener('click', () => {
        const buttonsMudar = document.querySelectorAll('.btn1, .btn2, .botao_altera'); 
        buttonsMudar.forEach(button => {
            button.classList.toggle('btn');
        });
});
});
