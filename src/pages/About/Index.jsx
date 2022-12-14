import React from "react";

export default function Cadastro() {
    return (
        < !DOCTYPE html >
        <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>E-Doação: Home</title>
                            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
                                <link rel="stylesheet" href="../css/style.css">
                                </head>
                                <body style="background-color: #E9F3FE">
                                    <nav class="navbar navbar-expand-lg navbar-light shadow" style="background-color: #ffffff">
                                        <div class="container">
                                            <a class="navbar-brand" href="../index.html">E-DOAÇÃO</a>
                                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                <span class="navbar-toggler-icon"></span>
                                            </button>
                                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                                <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="color: #333; font-weight: 400;">
                                                    <li class="nav-item" style="margin-left: 1rem">
                                                        <a class="nav-link" href="../index.html">Home</a>
                                                    </li>
                                                    <li class="nav-item" style="margin-left: 1rem">
                                                        <a class="nav-link" style="color: #699dee" href="about.html">Sobre Nós</a>
                                                    </li>
                                                    <li class="nav-item" style="margin-left: 1rem">
                                                        <a class="nav-link" href="team.html">Equipe</a>
                                                    </li>
                                                </ul>
                                                <div>
                                                    <a class="btn btn-primary mx-2 rounded-pill" style="width: 100px; background-color: #699dee" href="login.html">Login</a>
                                                    <a class="btn btn-primary rounded-pill" style="width: 100px; background-color: #699dee" href="cadastro.html">Cadastro</a>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                    <div class="container rcd-about">
                                        <h1 style="text-align: center; font-size: 2.5rem; margin-top: 3rem">Sobre Nós</h1>
                                        <div id="rcd-about">
                                            <img src="../img/about.svg" alt="">
                                                <div class="d-flex align-content-center">
                                                    <div class="d-flex align-items-start flex-column">
                                                        <h2 style="font-size: 2rem">Quem somos?</h2>
                                                        <p class="mt-3 mb-4">Nós somos a E-Doação, uma instituição sem fins lucrativos cujo principal objetivo é causar um impacto social positivo na sociedade em que vivemos ao facilitar o acesso de jovens estudantes ao mundo digital e a tecnologia por meio da doação de equipamentos.</p>
                                                        <h2 style="font-size: 2rem">Quem é impactado diretamente pelo projeto?</h2>
                                                        <p class="mt-3 mb-4">Nosso público alvo são jovens estudantes do ensino de escolas públicas brasileira, uma vez que este público se encontra em fase decisiva da vida estudantil e profissional com a chegada iminente do ensino médio. Logo, buscamos não só facilitar o acesso a equipamentos e internet, mas também buscamos facilitar o acesso ao ensino superior e ao mercado de trabalho.</p>
                                                        <h2 style="font-size: 2rem">Como posso ajudar com o projeto?</h2>
                                                        <p class="mt-3 mb-4">Você pode ajudar nosso projeto de diversas formas: doando equipamentos eletrônicos que estejam funcionando ou que precisem de reparos (aceitamos computadores, tablets e smartphones). Caso entenda sobre equipamentos eletrônicas, pode ser um voluntário na nossa equipe de conserto e manutenção. Se for gestor ou funcionários de uma instituição de ensino pode entrar em contato conosco para saber como a sua instituição pode participar do programa.</p>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <footer>
                                        <p>© Copyright <strong>Squad 11 (Recode Pro)</strong>. All Rights Reserved.</p>
                                    </footer>
                                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
                                </body>
                            </html>
                            )
}