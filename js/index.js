function copiartexto() {
    // Get the text field
    var copiartexto = document.getElementById("email");
  
    // Select the text field
    copiartexto.select();
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copiartexto.value);
  
    // Alert the copied text
    alert("Texto Copiado");
  } 

  function enviaropinion() {
    // Alert the copied text
    alert("Gracias por tu Comentario");
  } 