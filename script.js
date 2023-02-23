function carregaDicionario() {
  var biografias = {
    bio01: {
      nome: "Agência de Viagens",
      imagem: "img/agencia.jpeg",
      descricao: "Projeto do disponibilizado por Isadora Stangarlin, que simula uma agência de viagens. Elaborado por mim, utilizando HTML e CSS.",
      site: "https://debbywar.github.io/site-viagens"
    },
    bio02: {
      nome: "Sign In Form",
      imagem: "img/signinform.png",
      descricao: "Esse projeto foi realizado durante o curso Frontstart, por Isadora Stangarlin com o objetivo de aprimorar o HTML e o CSS voltados para Formulários.",
      site: "https://debbywar.github.io/signinform/"
    },
    bio03: {
      nome: "RocketPay",
      imagem: "img/rocketpay.png",
      descricao: "O Rocketpay é um projeto que simula o formulário de preenchimento de cartão de crédito, onde é possível adicionar máscara aos inputs e atualizar elementos HTML via DOM.",
      site: "https://rocketpay-omega.vercel.app/"
    },
    bio04: {
      nome: "Rocket Coffee",
      imagem: "img/menu.jpeg",
      descricao: "Cardápio digital elaborado por mim, durante aula da Rocketseat.",
      site: "https://debbywar.github.io/Coffe_Shop_Menu/"
    },
    bio05: {
      nome: "Rocket Links",
      imagem: "img/rocketlinks.jpeg",
      descricao: "Projeto de um Linktree/Link na Bio, elaborado por mim, durante aula da Rocketseat.",
      citacao: "https://debbywar.github.io/rocket-links/"
    },
    bio06: {
      nome: "Login Form",
      imagem: "img/loginform.jpeg",
      descricao: "Formulário de Login, desenvolvido conforme instruções de tutorial em vídeo, do canal Seek Codes.",
      site: "https://debbywar.github.io/login-register-form/"
    }
  }

  var content = document.getElementById("content");

  for (var bio in biografias) {
    content.innerHTML +=
      '<div class="card">'
      + '<img src="' + biografias[bio].imagem + '"/>'
      + '<details>' + '<summary>' + biografias[bio].nome
      + "</summary>"
      + "<p>" + biografias[bio].descricao
      + "</p>" + "<p> Para ver o projeto "
      + '<a href="' + biografias[bio].site + '"/>'
      + "Clique aqui"
      + "</a>" + "</p>"
      + "</details>"
      + "</div>"
  }
}

carregaDicionario();
