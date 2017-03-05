$(document).ready(function(){
	var red=89;
	var green=78;
	var blue=78;
	var color;
	var red2=89;
	var green2=78;
	var blue2=78;
	var angle=90;

	$(function() {
		$('#Red').on("change",function(){
			red =$(this).val();	
		});
		$('#Green').on("change",function(){

			green =$(this).val();

		});

		$('#Blue').on("change",function(){

			blue =$(this).val();

		});

		$('#Red2').on("change",function(){
			red2 =$(this).val();	
		});
		$('#Green2').on("change",function(){

			green2 =$(this).val();
		});

		$('#Blue2').on("change",function(){

			blue2 =$(this).val();
		});
		$('#angle').on("change",function(){

			angle =$(this).val();
		});
	});
	$("input").on('change',function(){
		$('#body').css('background',"linear-gradient("+angle+'deg ,rgb('+red +',' +green +',' +blue+'),rgb('+red2 +',' +green2 +',' +blue2+')) ');	
	});
});
