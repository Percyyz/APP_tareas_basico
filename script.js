function mostrarMensaje() {
    console.log("Hola, mundo!");
}

function capturaTexto() {
    // capturamos el elemeno del input
    let input=document.querySelector("#nuevaTarea");
    if(input.value==="") {
        alert("El campo no puede estar vacío");
        return;
    }

    // capturamos el valor del input
    let valorInput=input.value;

    // capturamos el elemento ul
    let ul=document.querySelector("#listaTareas");

    // capturamos el elemento li
    let li=document.createElement("li");

    // le asignamos como contenido del li el valor capturando del input
    li.textContent=valorInput;

    // creamos un botón para eliminar la tarea
    let button=document.createElement("button");
    button.textContent="Eliminar";
    button.onclick=function() {
        li.remove();
    }
    li.appendChild(button);

    // le agregamos como hijo el li al elemento padre ul
    ul.appendChild(li);
    

    document.querySelector("#nuevaTarea").value="";
}