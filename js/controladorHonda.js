function llenarHonda(){
    let honda=[
        {nombre:"Cr 125",precio:5000000,modelo:"Modelo 1998",foto:"../img/honda/cr-125.jpg"},
        {nombre:"Crm 250",precio:10000000,modelo:"Modelo 1998",foto:"../img/honda/crm-250.jpg"},
        {nombre:"Mb 100",precio:11000000,modelo:"Modelo 2003",foto:"../img/honda/mb-100.jpg"},
        {nombre:"Mbx 125",precio:18000000,modelo:"Modelo 2001",foto:"../img/honda/mbx-125.jpg"},
        {nombre:"Mt 50",precio:7000000,modelo:"Modelo 2006",foto:"../img/honda/mt-50.jpg"},
        {nombre:"Mtx 200",precio:30000000,modelo:"Modelo 2008",foto:"../img/honda/mtx-200.webp"}
        
        
    ]

    let filaH=document.getElementById("filaH")
    honda.forEach(function(honda){
    
        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        let imagen=document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.classList.add("h-50")
        imagen.classList.add("p-2")
        imagen.src=honda.foto

        let separador=document.createElement("hr")
        separador.classList.add("w-50")
        separador.classList.add("mx-auto")
        separador.classList.add("d-block")

        let nombreMoto=document.createElement("h4")
        nombreMoto.textContent=honda.nombre

        let modeloMoto=document.createElement("h5")
        modeloMoto.textContent=honda.modelo

        let precioMoto=document.createElement("h4")
        precioMoto.textContent="$"+honda.precio


        tarjeta.appendChild(imagen)
        tarjeta.appendChild(separador)
        tarjeta.appendChild(nombreMoto)
        tarjeta.appendChild(modeloMoto)
        tarjeta.appendChild(precioMoto)
        
        columna.appendChild(tarjeta)
        filaH.appendChild(columna)

    })
}
llenarHonda()