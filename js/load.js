$(document).ready( function() {
	var canvas = new fabric.Canvas('canvas')
    window.canvas = canvas;

	$('#bg-loader-url').on('input', function(){
        canvas.setBackgroundImage($('#bg-loader-url').val());   
    });


    // $('#bg-loader').change( function (e) {
 //    	var reader = new FileReader();

 //    	reader.onload = function (event) {
 //        	var imgObj = new Image();
 //        	imgObj.src = event.target.result;       

 //        	imgObj.onload = function () {          	
 //            	var image = new fabric.Image(imgObj);
 //                var prop = image.width/$('#canvas-drop-area').width();
 //                image.width = $('#canvas-drop-area').width();
 //                image.height /= prop;    
 //                console.log(image.width + " " + image.height);        
 //    	        canvas.backgroundImage = image;
 //                canvas.setHeight(image.height);
 //                canvas.setWidth(image.width);
 //    	        canvas.renderAll();    	        	    
 //    	    };
        
	//     };
	//     reader.readAsDataURL(e.target.files[0]);

	// });  
});