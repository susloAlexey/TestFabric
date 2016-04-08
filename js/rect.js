$(document).ready( function() {
    
    // $("#rect-mode").click(function(){
    //     var pushed = $("#rect-mode").val();

    //     if(pushed) {
    //         $(".options-rectangle").show();  
    //         $("#rect-mode").val("false");
    //     } else {
    //         $(".options-rectangle").hide(); 
    //         $("#rect-mode").val("true");  
    //     }        
        
    // });

    canvas.on('mouse:over', function (option) {
        console.log(option);
    });

    canvas.on('mouse:down', function (option) {
        if (typeof option.target != "undefined" || !$("#rect-mode").prop("checked")) {
            return;
        } else {
            var startY = option.e.offsetY,
                startX = option.e.offsetX;

            var stroke_color = $('#stroke-color').val(),
                stroke_width = +$('#stroke-width').val();

            var rect = new fabric.Rect({
                top : startY,
                left : startX,
                width : 0,
                height : 0,
                fill : 'transparent',
                stroke: stroke_color,
                strokeWidth: stroke_width
            });

            canvas.add(rect);

            canvas.on('mouse:move', function (option) {
                var e = option.e;
                console.log(option);
                rect.set('width', e.offsetX - startX);
                rect.set('height', e.offsetY - startY);
                rect.setCoords();
            });
        }
    });

    canvas.on('mouse:up', function () {
        canvas.off('mouse:move');
    }); 

    // canvas.on('mouse:down', function(option) {
    //     alert('kek');
    //     if(canvas.getActiveGroup()){
    //         canvas.getActiveGroup().forEachObject(function (o) { canvas.remove(o) });
    //         canvas.discardActiveGroup().renderAll();
    //     } else {
    //         canvas.remove(canvas.getActiveObject());
    //     }      
    // });   

});