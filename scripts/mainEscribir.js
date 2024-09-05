const body = document.querySelector("body");
const menuNav = document.getElementById("menu");
const inputAutor = document.getElementById("escritor");
const inputPoema = document.getElementById("poema");
const poesias = document.getElementById("poesias-card");

const escribirCont = document.getElementById("escribir-container");
const mostEscribir = document.getElementById("mostrar-escribir");
const ocultEscribir = document.getElementById("ocultar-escribir");

const btnDelete = document.querySelectorAll(".delete");

const iconMenu = document.getElementById("btn-menu");

let iconMenuClass1 = "fa-solid fa-bars";
let iconMenuClass2 = "fa-solid fa-xmark";

const card = document.getElementById("card");

iconMenu.addEventListener("click", () => {
  cambiaIcono(iconMenu, iconMenuClass1, iconMenuClass2);
});

function agregarPoema() {
  let delet = document.createElement("DIV");
  let card = document.createElement("DIV");
  let content = document.createElement("DIV");
  let autor = document.createElement("DIV");
  let name = document.createElement("DIV");
  let p = document.createElement("P");
  let deletIcon = document.createElement("I");
  if (inputAutor.value.trim() === "" || inputPoema.value.trim() === "") {
    let alert = document.createElement("DIV");
    alert.innerHTML = "Tienes que rellenar ambos campos";
    alert.classList.add("alert");
    body.appendChild(alert);
    setTimeout(() => {
      alert.classList.add("alert-hide");
    }, 1000);
    setTimeout(()=>{
      body.removeChild(alert);
    },1500)
  } else {
    


    deletIcon.classList.add("fa-solid");
    deletIcon.classList.add("fa-trash");
    delet.classList.add("delete");
    card.classList.add("card");
    content.classList.add("content");
    autor.classList.add("autor");
    name.classList.add("name");
    name.innerHTML = `<b>Autor:</b> ${inputAutor.value.trim()}`;
    p.innerHTML = `${inputPoema.value.trim()}`;
    content.appendChild(p);
    delet.appendChild(deletIcon);
    autor.appendChild(name);
    autor.appendChild(delet);
    card.appendChild(content);
    card.appendChild(autor);
    
    poesias.appendChild(card);
    inputAutor.value = "";
    inputPoema.value = "";
    let alert = document.createElement("DIV");
    alert.innerHTML = "Publicado con exito";
    alert.classList.add("alert");
    body.appendChild(alert);
    setTimeout(() => {
      alert.classList.add("alert-hide");
      
    }, 1000);
    setTimeout(()=>{
      body.removeChild(alert);
    },1500);
    mostrarEscribir();
  }
  
  
 
}

function toggleMenu() {
  menuNav.classList.toggle("menu-aparecer");
}

function cambiaIcono(icon, class1, class2) {
  if (icon.className == `${class1}`) {
    icon.className = `${class2}`;
  } else if (icon.className == `${class2}`) {
    icon.className = `${class1}`;
  }
}

function mostrarEscribir() {
  escribirCont.classList.toggle("escribir-container");
  escribirCont.classList.toggle("escribir-hiden");
  console.log("ejecutando");
}

mostEscribir.addEventListener("click", () => {
  mostrarEscribir();

});

ocultEscribir.addEventListener("click", () => {
  mostrarEscribir();
  

});

function eliminarCard(event) {
  // Asegúrate de que el clic fue en el ícono de eliminación
  if (event.target.classList.contains('fa-trash')) {
    const card = event.target.closest('.card');
    if (card) {
        card.classList.add("card-hide");
      setTimeout(()=>{
        card.remove();

      },300)
      
    }
  }
}

// Agrega el event listener para el contenedor de poesías
poesias.addEventListener('click', eliminarCard);



