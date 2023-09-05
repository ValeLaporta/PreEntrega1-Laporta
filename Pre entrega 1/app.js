
////Para la primer pre-entrega realizare un ejemplo de carrito de compras 
////Este carrito de compras es de un e-commerce que se dedica a la venta de camisetas
////Para realizar la compra el usuario debera ingresar el color, el talle y el precio
////cuando el usuario no quiera agregar mas items al carrito se le mostrarra el total en un alert 

////Alert de Bienvenida
////Prompt preguntando si esta listo para comenzar la compra (si/no)
////Prompr:---- Ingrese el color de remera que desea comprar
////----- Ingrese el talle de la remera
////-----Ingrese el valor de la remera
////----Ingrese la cantidad de remeras que va a comprar
////-----Desea seguir comprando (si/No)
////Si el usuario contesta que si se vuelve a comenzar y si dice que no se le muestra el total y un detalle en un alert


const SI = "si"
const NO = "no"
let precio ;
let cantidad ;
let colorRemera;
let talleRemera;
let total = 0 ;
let continuar;
let detalleCompra;
let resultadoCompra; (`Color     Talle     Precio     Cantidad \n `)

function cargarCarrito ()
{
    colorRemera = prompt ("Ingrese el color de su remera")
    talleRemera = prompt("Ingrese el talle que desea comprar")
    precio = prompt ("Ingrese el valor de su remera")
    cantidad = prompt ("Ingrese la canidad de remeras que quiere comprar")
}
alert ("Bienvenidos a la Tienda RemerasGeniales!")
respuesta = prompt ("Esta listo para comenzar su compra?")
    if (respuesta === "si") 
    alert("Perfecto, comenzaremos la compra.");
else if (respuesta === "no") {
   alert("Entendido, nos vemos la próxima vez.");
 } 
 else {
   alert("Respuesta no válida. Por favor, responde 'si' o 'no'.");
 }
do{
    cargarCarrito();
    continuar = prompt ("Desea seguir comprando si/no?")
    while (continuar !== SI && continuar !== NO) {
        continuar = prompt ("respuesta invalida, por favor conteste si o no")
    }
    total = total + precio * cantidad;
    detalleCompra = `${colorRemera}     ${talleRemera}     ${precio}     ${cantidad}     ${precio*cantidad} \n`
    resultadoCompra = resultadoCompra + detalleCompra
    }while(continuar == SI);

resultadoCompra = resultadoCompra + ` total: ${total};`
alert (resultadoCompra)

