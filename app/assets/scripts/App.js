import "../styles/styles.css"
/* import Person from "./modules/Person"; */
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll"

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
let mobileMenu = new MobileMenu();


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


