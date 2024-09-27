function criaCartao(titulo, pergunta, resposta) 
{
    const container = document.getElementById('container');

            const cartao = document.createElement('article');
            cartao.className = 'cartao';

            const conteudo = document.createElement('div');
            conteudo.className = 'cartao__conteudo';

            const h3 = document.createElement('h3');
            h3.textContent = titulo;
            conteudo.appendChild(h3);

            const divPergunta = document.createElement('div');
            divPergunta.className = 'cartao__conteudo__pergunta';
            divPergunta.textContent = pergunta;
            conteudo.appendChild(divPergunta);

            const divResposta = document.createElement('div');
            divResposta.className = 'cartao__conteudo__resposta';
            divResposta.textContent = resposta;
            conteudo.appendChild(divResposta);

            cartao.appendChild(conteudo);
            container.appendChild(cartao);

}
{
criarCartao(
    'Qual é a grande fonte?',
    'Saúde Mental',
    'Uma grande fonte de sofrimento atualmente é o trabalho, ja que se dedica grande parte do tempo das vidas .'
);
criarCartao(
    'Transtorno Mental',
    'Saúde Mental',
    'Se refere a uma trajetoria diagnosticada que varia bastante de pessoa, pra pessoa'
);
criarCartao(
    'Doença Mental',
    'Saúde Mental',
    'Ao falarmos de doença nós temos as causas, um padrão de sintomas e medidas terapêuticas padronizadas.'
);
}