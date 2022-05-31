function llenarYamaha(){

    let yamaha=[
        {nombre:"Dt 125",precio:7000000,modelo:"Modelo 2006",foto:"../img/Yamaha/dt-125.jpg"},
        {nombre:"Calimatic 175",precio:10000000,modelo:"Modelo 1998",foto:"../img/Yamaha/calimatic.jpg"},
        {nombre:"Dt 175",precio:11000000,modelo:"Modelo 2003",foto:"../img/Yamaha/dt-175.jpg"},
        {nombre:"Dt 200",precio:18000000,modelo:"Modelo 2001",foto:"../img/Yamaha/dt-200.jpg"},
        {nombre:"Rx 100",precio:7000000,modelo:"Modelo 2006",foto:"../img/Yamaha/Rx100.jpg"},
        {nombre:"Rx 115",precio:8000000,modelo:"Modelo 2008",foto:"../img/Yamaha/rx-115.jpg"},
        {nombre:"Rx 135",precio:20000000,modelo:"Modelo 1999",foto:"../img/Yamaha/rx-135.jpg"},
        {nombre:"Rx-z",precio:20000000,modelo:"Modelo 1999",foto:"../img/Yamaha/rx-z.jpg"},
        {nombre:"V 80",precio:5000000,modelo:"Modelo 2000",foto:"../img/Yamaha/v-80.jpg"},
        {nombre:"Yz 85",precio:14000000,modelo:"Modelo 2006",foto:"../img/Yamaha/yz-85.jpg"},
        {nombre:"Yz 125",precio:21000000,modelo:"Modelo 2011",foto:"../img/Yamaha/yz-125.jpg"},
        {nombre:"Yz 250",precio:24000000,modelo:"Modelo 2010",foto:"../img/Yamaha/yz-250.jpg"},
        {nombre:"Yz 450",precio:30000000,modelo:"Modelo 2006",foto:"../img/Yamaha/yz-450.jpg"},
        {nombre:"Xt 500",precio:25000000,modelo:"Modelo 1980",foto:"../img/Yamaha/Yamaha-Xt-500-.jpg"}
    ]

    

    let filaY=document.getElementById("filaY")
    yamaha.forEach(function(yamaha){

        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        let imagen=document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.classList.add("h-50")
        imagen.classList.add("p-2")
        imagen.src=yamaha.foto

        let separador=document.createElement("hr")
        separador.classList.add("w-50")
        separador.classList.add("mx-auto")
        separador.classList.add("d-block")

        let nombreMoto=document.createElement("h4")
        nombreMoto.textContent=yamaha.nombre

        let modeloMoto=document.createElement("h5")
        modeloMoto.textContent=yamaha.modelo

        let precioMoto=document.createElement("h4")
        precioMoto.textContent="$"+yamaha.precio


        tarjeta.appendChild(imagen)
        tarjeta.appendChild(separador)
        tarjeta.appendChild(nombreMoto)
        tarjeta.appendChild(modeloMoto)
        tarjeta.appendChild(precioMoto)
        
        columna.appendChild(tarjeta)
        filaY.appendChild(columna)

    })

    
}
llenarYamaha()