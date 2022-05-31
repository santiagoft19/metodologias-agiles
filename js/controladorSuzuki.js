function llenarSuzuki(){
    let suzuki=[
        {nombre:"Ax 100",precio:5000000,modelo:"Modelo 2002",foto:"../img/suzuki/ax-100.jpg"},
        {nombre:"Ax 115",precio:10000000,modelo:"Modelo 2004",foto:"../img/suzuki/ax-115.jpg"},
        {nombre:"Tr 125",precio:11000000,modelo:"Modelo 2003",foto:"../img/suzuki/tr.jpg"},
        {nombre:"Ts 125",precio:18000000,modelo:"Modelo 1998",foto:"../img/suzuki/ts-125.jpg"},
        {nombre:"Ts 180",precio:7000000,modelo:"Modelo 2006",foto:"../img/suzuki/ts-185.jpg"},
        {nombre:"Gp 125",precio:7000000,modelo:"Modelo 2006",foto:"../img/suzuki/gp.jpg"}
        
    ]

    let filaS=document.getElementById("filaS")
    suzuki.forEach(function(suzuki){
    
        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        let imagen=document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.classList.add("h-50")
        imagen.classList.add("p-2")
        imagen.src=suzuki.foto

        let separador=document.createElement("hr")
        separador.classList.add("w-50")
        separador.classList.add("mx-auto")
        separador.classList.add("d-block")

        let nombreMoto=document.createElement("h4")
        nombreMoto.textContent=suzuki.nombre

        let modeloMoto=document.createElement("h5")
        modeloMoto.textContent=suzuki.modelo

        let precioMoto=document.createElement("h4")
        precioMoto.textContent="$"+suzuki.precio


        tarjeta.appendChild(imagen)
        tarjeta.appendChild(separador)
        tarjeta.appendChild(nombreMoto)
        tarjeta.appendChild(modeloMoto)
        tarjeta.appendChild(precioMoto)
        
        columna.appendChild(tarjeta)
        filaS.appendChild(columna)

    })
}
llenarSuzuki()