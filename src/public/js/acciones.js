function abrir(url,contenedor){
    $.get(url,{},function (data){
        $("#" + contenedor).html(data);
    });
}