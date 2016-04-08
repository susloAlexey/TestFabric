$(document).ready( function() {
	var canvas = window.canvas = new fabric.Canvas('canvas');

	$('#bg-loader-url').on('input', function(){  
        canvas.setBackgroundImage($('#bg-loader-url').val(), canvas.renderAll.bind(canvas), {
            originX: 'left',
            originY: 'top',
            left: 0,
            top: 0,
            crossOrigin: 'anonymous'
        });
    });

	// img.src = "http://cs8.pikabu.ru/post_img/2016/04/08/10/1460136759189063615.jpg";


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