
//-Capturamos en JS todos los botones para poder trabajarlos
   let btnEncriptar=document.getElementById("btn-encriptar");
   let btnDesencriptar=document.getElementById("btn-desencriptar");
   let btnCopiar=document.getElementById("btn-copiar");

//-Creamos un evento Click a cada boton 
   btnEncriptar.addEventListener("click", msmEncriptar);
   btnDesencriptar.addEventListener("click",msmDesencriptar);
   btnCopiar.addEventListener("click", copiar)
   
//-Capturamos los campos de texto
   let txtMensaje=document.getElementById("txt-mensaje");
   let txtEncriptar=document.getElementById("txt-encriptar");
   var img= document.getElementById("myImage");

//Creamos la funcion ocultarImg 
function ocultarImg(){
  
         img.style.display = "none";
         txtMensaje.appendChild(img);
         
         if (img.style.display === "none") {
           
          img.style.visibility = "hidden";
    
    }
};   
//-Creamos la función Copiar
   function copiar(){

//-Creamos una condición que nos retornara
// un alert si no hay texto para copiar 
      if(txtMensaje.value==""){
        alert("No hay texto para copiar");
   
   }

      else{
//Selecciona los valor dentro de txt.Mensaje
        txtMensaje.select()
        navigator.clipboard.writeText(txtMensaje.value);

        if(txtMensaje.select){
         txtMensaje.value="";
        }
        
   };  
     
};
//Creamos la funcion msmEncriptar
   function msmEncriptar(txtMensaje){
//Si no hay texto para encriptar nos muestra el alert 
   if(txtEncriptar.value==""){
      alert("No hay texto para ENCRIPTAR!");
   }else{

      ocultarImg();
      let encriptado = txtEncriptar.value;
      
//El metodo replace reemplaza el valor guardado entre los slash(/valor/) por el valor que esta entre las comillas("valor");
//El modificador g indica que se debe reemplazar todas las apariciones del valor entre los slash(/valor/);

      let newTextE = encriptado.replace(/a/g, "ai").replace(/(?<!a)i/g, "imes").replace(/(?<!m)e/g, "enter").replace(/(?<!n)o/g, "ober").replace(/(?<!t)u/g, "ufat");

      txtMensaje=document.getElementById("txt-mensaje").value=newTextE;
   
      txtEncriptar.value="";
       }
   }
//Creamos la funcion msmDesencriptar 
function msmDesencriptar(txtMensaje){

//Si no hay texto para desencriptar nos muestra el alert   
   if(txtEncriptar.value==""){
      alert("No hay texto para DESENCRIPTAR!")
   }else{  

       ocultarImg();

      let textD = txtEncriptar.value;
//El metodo replace reemplaza el valor guardado entre los slash(/valor/) por el valor que esta entre las comillas("valor");
//El modificador g indica que se debe reemplazar todas las apariciones del valor entre los slash(/valor/);

      let newTextD = textD.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g,"i").replace(/ober/g, "o").replace(/ufat/g, "u");
      
      txtMensaje=document.getElementById("txt-mensaje").value=newTextD;
      txtEncriptar.value="";

   }

}

 


   


  