function TriangleChiffres(){
  for (let i = 1; i <=10 ; i++) {
    let ligne = '';
    for (let j = i; j <=10; j++) {
      ligne += j + ' ';
    }
    console.log(ligne);
  }
}
TriangleChiffres()