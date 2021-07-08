$(document).ready(function (){
    
    $("#btn-ocultar").click(
        function () {
            //alert("hola desde h1");
            $(".p-ocultar").slideToggle(4000,
                function(){
                    
                    $("btn-ocultar").addClass("fondo-verde")
                }
            )
        }    
    )

})



$(document).ready(function (){
    
    $(".btn-primary1").click(
        function () {
            //alert("hola desde h1");
            $(".card-text1").slideToggle(
                function(){
                    
                    $("btn-ocultar1").addClass("fondo-verde")
                }
            )
        }    
    )

})


