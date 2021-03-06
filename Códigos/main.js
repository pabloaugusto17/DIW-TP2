//Autenticação de chaves
const cliente_id = "e31f54d8f8f7c49e52dd";
const cliente_secret = "3c6d3fd681537dee29270a4903e8b41ac0183183 ";

//URL padrão de usuário Git
const url = "https://api.github.com/users";


//Função assíncrona para retornar o usuário, ela deve ser assíncrona pois recebe informações da API
async function receber_Usuario(usuario) {

    //Aqui é feita a concatenação para busca na API
    const profile_response = await fetch(`${url}/${usuario}?cliente_id=${cliente_id}&cliente_secret=${cliente_secret} `);
    
    //Transforma as informações recebidas em um Json para sua conseguir manipular seus atributos
    const perfil = profile_response.json();

    //Retorna o perfil
    return perfil;

}

//Aqui é pego o resultado das pesquisas feitas pela API e mostrado na home page
function apresenta_informacoes(){

    //Obtido o pefil do usuario no gitHub
    const perfil_usuario = receber_Usuario("pabloaugusto17");

    //Declarado os ids do nome, descrição, foto de pefil e número de seguidores
    let span = document.getElementById('span_nome');
    let span_des = document.getElementById('span_descricao');
    let imagem_perfil = document.getElementById('foto_perfil');
    let span_seguidores = document.getElementById('span_seguidores');
    let span_seguindo = document.getElementById('span_seguindo');
    let span_rep = document.getElementById('span_rep');

    let foto_url = document.getElementById('foto_url');
    let seguidores_url = document.getElementById('seguidores_url');
    let seguindo_url = document.getElementById('seguindo_url');
    let rep_url = document.getElementById('rep_url');
    let url_pefil = document.getElementById('url_perfil');

    //Atribuído os valores
    perfil_usuario.then(res => span.innerHTML = res.name);
    perfil_usuario.then(res => span_des.innerHTML = res.bio);
    perfil_usuario.then(res => imagem_perfil.src = res.avatar_url);   
    perfil_usuario.then(res => span_seguidores.innerHTML = res.followers);
    perfil_usuario.then(res => span_seguindo.innerHTML = res.following);    
    perfil_usuario.then(res => span_rep.innerHTML = res.public_repos);

    perfil_usuario.then(res => foto_url.href = res.avatar_url);
    perfil_usuario.then(res => seguidores_url.href = res.followers_url);
    perfil_usuario.then(res => seguindo_url.href = res.following_url);
    perfil_usuario.then(res => rep_url.href = res.repos_url);
    perfil_usuario.then(res => url_pefil.href = res.html_url);    

    
}

//Quando carregado a página as informações da API serão mostradas
window.onload = () => {
    apresenta_informacoes();
}



