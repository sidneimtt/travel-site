import "../styles/styles.css"
/* import Person from "./modules/Person"; */
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll"
import StickyHeader from "./modules/StickyHeader";
/* import Modal from "./modules/Modal"; */
/* cria uma nova instancia das classes acima */
/* new Modal()  */
let stickyHeader = new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
let mobileMenu = new MobileMenu();
let modal 

//Carrendo um modulo JS on the fly 
//listen for open click - somente carrega o modulo JS modal se usuario clickar no botão para evitar carregar na memoria quando o modulo for grande, so carrega quando o usuário clickar. 
document.querySelectorAll(".open-modal").forEach(el => { el.addEventListener("click", e => {
      e.preventDefault()
      if (typeof modal == "undefined") {
            import(/* webpackChunkName: "modal" */'./modules/Modal').then((x) => {
              /* cria uma nova instancia das classes como acima */
              /* new Modal()  */
              modal = new x.default()
              setTimeout(() => modal.openTheModal(), 20)
          }).catch(() => {
              console.log("There was a problem.")
          })
      } else {
            modal.openTheModal()  
      }      
})})


if (module.hot) {
  module.hot.accept()
}









/* Exemplo de uso - ver arq. modules/Person.js somente uma deve estar ativada function Person  ou  class Person */
/*
class Adult extends Person {
    payTaxes() {
        console.log(this.name + " now owes zero taxes. ");
    }
}

let sidnei = new Person("SIDNEI MOTTA", "PURPLE");
sidnei.greet();

let camila = new Person("CAMILA  MTT", "blue");
camila.greet();

let malu = new Adult("MALU MOTTA", "Yellow");
malu.greet(); 
malu.payTaxes();
*/


