function llenarKawasaki(){
    let kawasaki=[
        {nombre:"Gto 100",precio:5000000,modelo:"Modelo 1998",foto:"../img/kawasaki/gto-100.jpg"},
        {nombre:"Gto 125",precio:10000000,modelo:"Modelo 1998",foto:"../img/kawasaki/gto-125.jpg"},
        {nombre:"Ke 175",precio:11000000,modelo:"Modelo 2003",foto:"../img/kawasaki/ke-175.jpg"},
        {nombre:"Kmx 125",precio:18000000,modelo:"Modelo 2001",foto:"../img/kawasaki/kmx-125.jpg"},
        {nombre:"Kv 100",precio:7000000,modelo:"Modelo 2006",foto:"../img/kawasaki/kv-100.jpg"},
        {nombre:"kx",precio:30000000,modelo:"Modelo 2008",foto:"../img/kawasaki/kx.jpg"},
        {nombre:"Magic",precio:4000000,modelo:"Modelo 1999",foto:"../img/kawasaki/magic.jpg"},
        {nombre:"Victor M",precio:20000000,modelo:"Modelo 1999",foto:"../img/kawasaki/victor-m.jpg"},
        {nombre:"Victor S",precio:22000000,modelo:"Modelo 2000",foto:"../img/kawasaki/victor-s.jpg"}
        
    ]

    let filaK=document.getElementById("filaK")
    kawasaki.forEach(function(kawasaki){
    
        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        let imagen=document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.classList.add("h-50")
        imagen.classList.add("p-2")
        imagen.src=kawasaki.foto

        let separador=document.createElement("hr")
        separador.classList.add("w-50")
        separador.classList.add("mx-auto")
        separador.classList.add("d-block")

        let nombreMoto=document.createElement("h4")
        nombreMoto.textContent=kawasaki.nombre

        let modeloMoto=document.createElement("h5")
        modeloMoto.textContent=kawasaki.modelo

        let precioMoto=document.createElement("h4")
        precioMoto.textContent="$"+kawasaki.precio


        tarjeta.appendChild(imagen)
        tarjeta.appendChild(separador)
        tarjeta.appendChild(nombreMoto)
        tarjeta.appendChild(modeloMoto)
        tarjeta.appendChild(precioMoto)
        
        columna.appendChild(tarjeta)
        filaK.appendChild(columna)

    })
}
llenarKawasaki()