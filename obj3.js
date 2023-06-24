//objet cercle
let cercle={
    rayon:2,
    diametre:4,
    circonference:()=>{
        let circonf=diametre*Math.PI;
        return circonf;
    },
    surface:()=>{
        let surf= Math.pow(rayon,2)*Math.PI;
        return surf;
    }

}