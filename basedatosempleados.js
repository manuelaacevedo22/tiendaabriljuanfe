let empleados=Array(
    {
        id:1,
        nombre:"Manuela Acevedo Orozco",
        cargo:"jefe",
        telefono:"3145678965",
        correo:"manuelaacevedo765@gmail.com",
        salario:7000000,
        contactoEmergencia:"2135023641",
        foto:"./img/foto mia.jpg"
    },
    {
        id:2,
        nombre:"sofia velez cano",
        cargo:"Joyero/a",
        telefono:"4256358974",
        correo:"sofiavelez@gmail.com",
        salario:2000000,
        contactoEmergencia:"1254368",
        foto:"./img/1 mujer.jpg"

    },
    {
        id:3,
        nombre:"sara ochoa cardona",
        cargo:"Zapatero/a ",
        telefono:"125469873",
        correo:"saracardo@gmail.com",
        salario:1000000,
        contactoEmergencia:"123543687",
        foto:"./img/2 mujer.jpg"
    },
    {
        id:4,
        nombre:"estefania oso cano",
        cargo:"Carnicero/a",
        telefono:"4256312879",
        correo:"estefania120@gmail.com",
        salario:1000000,
        contactoEmergencia:"132654879",
        foto:"./img/3 mujer.webp"
    },
    {
        id:5,
        nombre:"mateo osorio correa",
        cargo:"Estibador/a",
        telefono:"123054698",
        correo:"mateo452@gmail.com",
        salario:2000000,
        contactoEmergencia:"1324677659",
        foto:"./img/1 hombre.jpg"  
    },
    {
        id:6,
        nombre:"mariana alzate",
        cargo:"Sastre",
        telefono:"425635987",
        correo:"mariana65474@gmail.com",
        salario:1000000,
        contactoEmergencia:"1256447645",
        foto:"./img/4 mujer.jpg"    
    },
    {
        id:7,
        nombre:"andry acevedo",
        cargo:"Albañil",
        telefono:"563298745",
        correo:"andryacevedo98@gmail.com",
        salario:1000000,
        contactoEmergencia:"125475455445",
        foto:"./img/10 mujer.webp"      
    },
    {
        id:8,
        nombre:"lina marcela orozco",
        cargo:"Auxiliar contable",
        telefono:"4256398542",
        correo:"lina125@gmail.com",
        salario:2000000,
        contactoEmergencia:"5214547852",
        foto:"./img/11 mujer.jpg"      
    },
    {
        id:9,
        nombre:"camilo cardona",
        cargo:"Plomero o fontanero",
        telefono:"142568975",
        correo:"camilo152@gmail.com",
        salario:3000000,
        contactoEmergencia:"45854121485",
        foto:"./img/2 hombres.jpg"      
    },
    {
        id:10,
        nombre:"Juan pablo velez",
        cargo:"Soldador",
        telefono:"425136789",
        correo:"juan1203@gmail.com",
        salario:2000000,
        contactoEmergencia:"4754124784",
        foto:"./img/3 hombres.jpg"    
    },
    {
        id:11,
        nombre:"laura restrepo",
        cargo:"Mecánica automotriz",
        telefono:"5246387912",
        correo:"laura345@gmail.com",
        salario:3000000,
        contactoEmergencia:"544584552",
        foto:"./img/12 mujer.jpg"    
    },
    {
        id:12,
        nombre:"pamela castañeda",
        cargo:"Recepcionista de hotel",
        telefono:"125463287",
        correo:"pamelo095@gmail.com",
        salario:2000000,
        contactoEmergencia:"4855474512",
        foto:"./img/13 mujer.avif"      
    },
    {
        id:13,
        nombre:"linda correa mora",
        cargo:"Mesero",
        telefono:"425168793",
        correo:"linda120@gmail.com",
        salario:2000000,
        contactoEmergencia:"4574842345",
        foto:"./img/14 mujer.jpg"    
    },
    {
        id:14,
        nombre:"marta montoya",
        cargo:"Guardia de seguridad",
        telefono:"12453587",
        correo:"martamon5@gmail.com",
        salario:1000000,
        contactoEmergencia:"444455252154",
        foto:"./img/15 mujer.jpg"   
    },
    {
        id:15,
        nombre:"oriana salazar",
        cargo:"Almacenista",
        telefono:"124563287",
        correo:"oriana123@gmail.com",
        salario:2000000,
        contactoEmergencia:"44447445",
        foto:"./img/16 mujer.jpg"      
    },
    {
        id:16,
        nombre:"diego gomez",
        cargo:"Cajero",
        telefono:"4251673865",
        correo:"diegogomez1@gmail.com",
        salario:1000000,
        contactoEmergencia:"4523874552",
        foto:"./img/4 hombre.jpg"    
    },
    {
        id:17,
        nombre:"maria angel cano",
        cargo:"Cosmetóloga",
        telefono:"1254678235",
        correo:"maria876@gmail.com",
        salario:4000000,
        contactoEmergencia:"152452323",
        foto:"./img/17 mujer.jpg"   
    },
    {
        id:18,
        nombre:"mariani gomez",
        cargo:"Estilista",
        telefono:"425698127",
        correo:"mariani876@gmail.com",
        salario:1000000,
        contactoEmergencia:"44474545",
        foto:"./img/18 mujer.jpg"      
    },
    {
        id:19,
        nombre:"camila gomez",
        cargo:"cocinera",
        telefono:"4225687954",
        correo:"camila987@gmail.com",
        salario:2000000,
        contactoEmergencia:"654452145",
        foto:"./img/19 mujer.jpg"  
    },
    {
        id:20,
        nombre:"sara orozco",
        cargo:"pintora",
        telefono:"125489632",
        correo:"sara152@gmail.com",
        salario:1000000,
        contactoEmergencia:"65457455447",
        foto:"./img/20 mujer.jpg"    
    },
)


//creando una referncia al contenedor de empleados
let contenedor=document.getElementById("contenedor")

//pasos para crear una lista dinamica de elementos

//1.Debo recorrer la base de datos del problema:
 empleados.forEach(function(empleado){
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","shadow")

    let foto=document.createElement("img")
    foto.classList.add("img-fluid","mx-auto","d-block")
    foto.src=empleado.foto

    let nombre=document.createElement("h3")
    nombre.textContent=empleado.nombre

    let correo=document.createElement("h3")
    correo.textContent=empleado.correo

    let cargo=document.createElement("h3")
    cargo.textContent=empleado.cargo

    let telefono=document.createElement("h3")
    telefono.textContent=empleado.telefono

    let salario=document.createElement("h3")
    salario.textContent=empleado.salario

    


    //se asocian las estructuras en orden logica
    tarjeta.appendChild(foto)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(correo)
    tarjeta.appendChild(cargo)
    tarjeta.appendChild(telefono)
    tarjeta.appendChild(salario)



    columna.appendChild(tarjeta)
    contenedor.appendChild(columna)
 })