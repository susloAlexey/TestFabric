$(document).ready( function() {
	$('#canvas-drop-area').on('mousewheel', function(e) {
        var target = canvas;
        var delta = e.originalEvent.wheelDelta / 3000;
    
        if (target) {
            target.scaleX += delta;
            target.scaleY += delta;
        
            // constrain
            if (target.scaleX < 0.05) {
                target.scaleX = 0.05;
                target.scaleY = 0.05;
            }
            // constrain
            if (target.scaleX > 10) {
                target.scaleX = 10;
                target.scaleY = 10;
            }

            canvas.renderAll();
            return false;
        }
    });	
});