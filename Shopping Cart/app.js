
function addItem(){
     var select = document.querySelector('#item').value;
     var geek = [];
     for (var i = 0; i <= 2 ; i++){
            geek [i] = select
            }
            for (var i = 0; i <= 2 ; i++){
                console.log(geek[i]);
                }
        
     var unit = parseInt( document.querySelector('#quan').value);

     var pepsi = 150 * unit;
     var sting = 80 * unit;
     var mineral = 200 * unit;
     var slice = 300 * unit;





 if (unit == '' || unit <= 0){

     alert ('Kindly Insert the Quantity ')
 }

  else if (select === 'p'){
       console.log(pepsi);
       document.querySelector('#list').innerHTML = 'Pepsi 1 litre' +  " " +" "+pepsi;
  }

  else if (select === 's'){
    console.log(sting);
    document.querySelector('#list').innerHTML = 'Sting 500ml' +  " " +" "+ sting;
}
else if (select === 'm'){
    console.log(mineral);
    document.querySelector('#list').innerHTML = 'Mineral water 1.5 litre' +  " " +" "+ mineral;
}  

else if (select === 'sj'){
    console.log(slice);
    document.querySelector('#list').innerHTML = 'Slice Juice bottle 1 litre ' +  " " +" "+ slice;
}



}