/* somente uma deve estar ativada function Person  ou  class Person */
/* ativada executa exatamente como a class abaixo  */
/* JavaScript  Using Construction function - 

function Person(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function() {
        console.log("Hello, my name is  " + this.name + " and my favorite color is " + this.favoriteColor + ".");
    }
}

*/

/* ativada executa exatamente como a função acima */
/* JavaScript Using class syntax -  Like C++ or Java or PHP -    */

class Person {
    constructor(name, favoriteColor) {
        this.name = name;
        this.favoriteColor = favoriteColor;
    }
    greet() {
        console.log("Hello, my name is  " + this.name + " and my favorite color is " + this.favoriteColor + ".");
    }
}

export default Person

