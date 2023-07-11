//Créez une classe "Rectangle" avec les propriétés "largeur" et "hauteur".
// Ajoutez une méthode pour calculer et renvoyer la surface du rectangle.
//Ajoutez une méthode à la classe "Rectangle" pour calculer et renvoyer le périmètre du rectangle.
// Créez une sous-classe "Carré" qui hérite de la classe "Rectangle". Assurez-vous que les côtés du carré sont toujours égaux.
// Ajoutez une méthode à la classe "Carré" pour calculer et renvoyer la diagonale du carré.
// Créez une instance de la classe "Carré" et appelez ses méthodes pour afficher la surface, le périmètre et la diagonale.
class Rectangle {
    constructor(largeur, hauteur) {
      this.largeur = largeur;
      this.hauteur = hauteur;
    }
  
    calculSurface() {
      return this.largeur * this.hauteur;
    }
  
    calculPerimetre() {
      return 2 * (this.largeur + this.hauteur);
    }
  }
  
  class Carre extends Rectangle {
    constructor(cote) {
      super(cote, cote);
    }
  
    calculDiagonale() {
      return Math.sqrt(2) * this.largeur;
    }
  
    calculSurface() {
      return this.largeur * this.largeur;
    }
  }
  
  let monCarre = new Carre(4);
  console.log("Surface du carré :", monCarre.calculSurface());
  console.log("Périmètre du carré :", monCarre.calculPerimetre());
  console.log("Diagonale du carré :", monCarre.calculDiagonale());
  

