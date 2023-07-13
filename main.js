
const items = [
    {
      nombre: 'it1',
      precio: 100,
      descripcion: 'lorem',
      grupo: 'monetario',
    },
    {
      nombre: 'it2',
      precio: 90,
      descripcion: 'lorem',
      grupo: 'monetario',
    },
    {
      nombre: 'it3',
      precio: 80,
      descripcion: 'lorem',
      grupo: 'monetario',
    },
    {
      nombre: 'it4',
      precio: 50,
      descripcion: 'lorem',
      grupo: 'monetario',
    },
    {
      nombre: 'it5',
      precio: 40,
      descripcion: 'lorem',
      grupo: 'monetario',
    },
    {
      nombre: 'it6',
      precio: 30,
      descripcion: 'lorem',
      grupo: 'monetario',
    },
  ];

function menu() {
  contador();
  let op = confirm ("Quiere seguir operando?")
  if(op){
  const entrada = prompt('Ingrese el item a vender: ');
  if (entrada == 'it1' || entrada == 'it2' || entrada == 'it3' || entrada == 'it4' || entrada == 'it5' || entrada == 'it6') {
    const filt1 = items.filter((i) => i.nombre === entrada);
    let pseudoContador = Number(prompt('Ingrese la cantidad a vender (debe ser menor a 100): '));
    if (pseudoContador <= 100) {
      const entrada2 = prompt('Item a comprar: ');
      if (entrada2 == 'it1' || entrada2 == 'it2' || entrada2 == 'it3' || entrada2 == 'it4' || entrada2 == 'it5' || entrada2 == 'it6') {
        const filt2 = items.filter((i) => i.nombre === entrada2);
        let precioE = filt1[0].precio;
        // console.log (precioE)
        let precioE2 = filt2[0].precio;
        // console.log (precioE2)
        operar(pseudoContador, precioE, precioE2, entrada, entrada2);
        menu();
        
      } else {
        alert('Asegurese de introducir un item valido');
        menu();
        
      }
    } else {
      alert('Asegurese de que el numero ingresado sea valido');
      menu();
      
    }
  } else {
    alert('Asegurese de introducir un item valido');
    menu();
  
  }
  } else {
    console.log ("HASTA LUEGO");
  }
}

let contador1 = 0;
function contador(){
  for (let i = 0; i < 1; i++) {
    contador1++;
    console.log("Usted ha hecho " + contador1 + " operaciones")
    return contador1;
  }
}

function operar(a, b, c, entrada, entrada2) {
  c
  let check = a * b;
  console.log('Al vender ' + entrada + ' tu saldo a favor es de ' + check);
  if (check >= c) {
    const resultado = Math.floor (check / c);
    console.log('Al comprar ' + entrada2 + ' te corresponden ' + resultado + 'unidades.');
    console.log ("Si le corresponde un vuelto, pase por caja a retirarlo")
  } else {
    console.log('No se pudo realizar la compra por fondos insuficientes');
  }
}
//////////////////////////////////////////////////////////////////////

console.log ("LISTA DE ITEMS")
items.forEach (elemento => console.log (elemento))
  const entrada = prompt('Ingrese el item a vender: ');
  if (entrada == 'it1' || entrada == 'it2' || entrada == 'it3' || entrada == 'it4' || entrada == 'it5' || entrada == 'it6') {
    const filt1 = items.filter((i) => i.nombre === entrada);
    let pseudoContador = Number(prompt('Ingrese la cantidad a vender (debe ser menor a 100): '));
    if (pseudoContador <= 100) {
      const entrada2 = prompt('Item a comprar: ');
      if (entrada2 == 'it1' || entrada2 == 'it2' || entrada2 == 'it3' || entrada2 == 'it4' || entrada2 == 'it5' || entrada2 == 'it6') {
        const filt2 = items.filter((i) => i.nombre === entrada2);
        let precioE = filt1[0].precio;
        // console.log (precioE)
        let precioE2 = filt2[0].precio;
        // console.log (precioE2)
        operar(pseudoContador, precioE, precioE2, entrada, entrada2);
        menu();
        
      } else {
        alert('Asegurese de introducir un item valido');
        menu ();
        
      }
    } else {
      alert('Asegurese de que el numero ingresado sea valido');
      menu ();
      
    }
  } else {
    alert('Asegurese de introducir un item valido');
    menu ();
  }
  
  