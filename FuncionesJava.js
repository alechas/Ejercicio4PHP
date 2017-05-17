function Suma()
{

  var pagina = "nexo.php";
  var num1 = $("num1").val();
  var num2 = $("num2").val();
  var res = 0;
    			alert(num1);
    			alert(num2);

    $.ajax({
        type: 'POST',
        url: pagina,
        dataType: "text",
        data: {queHago: "Suma" , num1: num1 , num2: num2 },
        async: true
        })
    	.then( 
    		function(respuesta) 
    		{ 	//alert(respuesta + ".php");
    		//alert("prueba");
    		//alert(respuesta);
    			res = num1 + num2;
                $("#container").html(res.toString());
    		}, 
  		function(respuesta) { alert( "Error" ); }
		);


}