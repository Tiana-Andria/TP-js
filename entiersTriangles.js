/*
1
22
33
4444
*/
function entiersTriangles(){
    let n=4;
    for(let i=1;i<=n;i++){
        let triangle='';
        for(let j=1;j<=i;j++){
            triangle+=i;
        }
        console.log(triangle);
    }
}
entiersTriangles()