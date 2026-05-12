const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;


    res.setHeader('Content-Type', 'text/html; charset=utf-8');


    if (url === '/') {
        res.statusCode = 200;
        res.end(`
            <h1> Portal da Copa do Mundo</h1>
            <p>Bem-vindo à página principal do maior evento de futebol do planeta!</p>
            <ul>
                <li><a href="/sobre">Sobre o Projeto</a></li>
                <li><a href="/contato">Fale Conosco</a></li>
            </ul>
        `);
    } 


    else if (url === '/sobre') {
        res.statusCode = 200;
        res.end(`
            <h1> Sobre o Projeto Copa</h1>
            <p>Este sistema foi desenvolvido para gerenciar informações dos atletas e resultados dos jogos.</p>
            <a href="/"> Voltar ao Início</a>
        `);
    }


    else if (url === '/contato') {
        res.statusCode = 200;
        res.end(`
            <h1>📞 Contato da Federação</h1>
            <p>Dúvidas sobre os ingressos ou escalação? Entre em contato!</p>
            <a href="/"> Voltar ao Início</a>
        `);
    }

  
    else {
        res.statusCode = 404;
        res.end(`
            <div style="text-align: center; font-family: sans-serif; padding-top: 50px;">
                <h1 style="color: red; font-size: 50px;">🟥 404</h1>
                <h2>Cartão Vermelho! Você saiu de campo.</h2>
                <p>O caminho "${url}" não existe na nossa tabela.</p>
                <br>
                <a href="/" style="background: green; color: white; padding: 10px; text-decoration: none; border-radius: 5px;">
                    Voltar para o Jogo (Início)
                </a>
            </div>
        `);
    }
});


server.listen(3000, () => {
    console.log('⚽ Servidor da Copa escalado em http://localhost:3000');
});