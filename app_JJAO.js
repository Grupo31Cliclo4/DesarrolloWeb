
class empleado{
    constructor(name,email,rol,empresa,año){
        this.name=name;
        this.email=email;
        this.rol=rol;
        this.empresa=empresa;
        this.año=año;
    }
}

class UI{
    addEmpleado(){

    }
    deleteEmpleado(){

    }
    showMensaje(){

    }
}

//DOM events
document.getElementById("empleado-form").addEventListener("submit", function(){
    alert("Capturando formulario");
})