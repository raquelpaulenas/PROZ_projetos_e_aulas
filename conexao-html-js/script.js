//capturando elementos por class ou ID
//const blogTitle = document.getElementById('blog_title')
//console.log (blogTitle)

//const post02 = document.getElementById('post02')
//console.log(post02)

//const form = document.getElementsByClassName('formulario')
//console.log(form)

//const posts = document.getElementsByClassName('post')
//console.log(posts)

//const data = document.getElementsByClassName('post-data')
//console.log(data)

//const textos = document.getElementsByClassName('post-texto')
//console.log(textos)

//const redes = document.getElementsByClassName('lista_redes')
//console.log(redes)

// capturando com elementos css

//let texto02 = document.querySelector("#post02 .post-texto")
//console.log(texto02)

let rodapeRedes = document.querySelectorAll("footer .lista_redes li")
//console.log(rodapeRedes)

//let strongPost02 = document.querySelector("#post02 .post-texto strong")
//console.log(strongPost02)

//let listLinksConections = document.querySelectorAll(".lista_redes a href")
//console.log(listLinksConections)

function percorrerArray(lista){
    for(let i = 0; i < lista.length; i++){
        console.log(lista[i]);
    
    }
}

percorrerArray(rodapeRedes)