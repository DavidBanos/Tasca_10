function afegirAlumne() {
    //assignam dades del formulari a variables per a les funcions
    var email=document.getElementById("email").value;
    var dni=document.getElementById("dni").value;
    
    //feim la validació del DNI antes de imprimir a la taula
    //la validacio del email la fará el navegador perque és type="email"
    if (validarNif()==true){
        var fila=$("<tr>"+
        "<td>"+document.getElementById("dni").value+"</td>"+
        "<td>"+document.getElementById("nom").value+"</td>"+
        "<td>"+document.getElementById("llinatges").value+"</td>"+
        "<td>"+document.getElementById("email").value+"</td>"+
        "<td>"+document.getElementById("nota").value+"</td>"+
        //"<td>"+document.getElementById("eliminar").value+"</td>"+
        "</tr>");
        
        
        
        $ ("#taula").append(fila);
        
        return false;
    }
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