class Area_T {
    Base = null;
    Altura = null;
    constructor(Base, Altura){
        this.Base = Base;
        this.Altura = Altura;
    }
    
    resultado = function(){
        return "El area del rectangulo es: " + this.r
    }
    resultado2 = function(){
        return "El area del triangulo es: " + this.r2
    }
    

}
var r1 = this.Base * this.Altura;
var r2 = this.Base * this.Altura / 2;

var rectangulo = new Area( 15, 15);
var triangulo = new Area( 5, 15);

function resultado ( ) {
    alert (Area.resultado());
    
}