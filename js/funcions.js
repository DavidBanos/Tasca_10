function afegirAlumne() {
    //Assignem dades del formulari a variables per les funcions
    var email=document.getElementById("email").value;
    var dni=document.getElementById("dni").value;
    
    //Fem la validació del DNI abans d'imprimir a la taula
    //La validacio del correu electrònic la farà el navegador perquè és type="email"
    if (validarNif()==true){
        var fila=$("<tr>"+
        "<td>"+document.getElementById("dni").value+"</td>"+
        "<td>"+document.getElementById("nom").value+"</td>"+
        "<td>"+document.getElementById("llinatges").value+"</td>"+
        "<td>"+document.getElementById("email").value+"</td>"+
        "<td>"+document.getElementById("nota").value+"</td>"+
        "<td> <form class='boto'>"+
        "<input type='image' src='img/x.png' width='20px' height='20px' id='eliminar'>"+
        "</form></td>"+
        "</tr>");
        //Imprimim per pantalla cada fila
        $ ("#taula").append(fila);
        
        //Eliminem files de la taula
        $(document).on('click', '#eliminar', function (event) {
            event.preventDefault();
            $(this).closest('tr').remove();
        });
        
        //Retorna "false" perquè quedi reflectit per pantalla i no continui enviant el formulari infinitament
        return false;
    }
    
    
    
    
    function validarNif(dni) {
        var dni=document.getElementById("dni").value;
        
        var numero;
        var letr;
        var letra;
        var normaldni;
        
        normaldni = /^\d{8}[a-zA-Z]$/;
        
        if(normaldni.test (dni) == true){
            numero = dni.substr(0,dni.length-1);
            letr = dni.substr(dni.length-1,1);
            numero = numero % 23;
            letra='TRWAGMYFPDXBNJZSQVHLCKET';
            letra=letra.substring(numero,numero+1);
            
            if (letra!=letr.toUpperCase()) {
                alert("DNI incorrecte, la lletra no correspon");
                return false;
            }else{
                return true;
            }
            
        }else{
            alert("DNI incorrecte, format no vàlid");
            return false;
        }
    }
}   