function main_loop(controller){
    console.log(controller.mouse_x, controller.mouse_y, controller.click);
    
}

function main(){
//init
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

//change size of canvas for proper fullscreen
    canvas.width = screen.width;
    canvas.height = screen.height;
    //canvas.requestFullscreen();

    var controller = new Controller(context);

//set event listeners
    window.onkeydown = function(event){
        controller.setKeyDown(event);
    }
    window.onkeyup = function(event){
        controller.setKeyUp(event);
    }
    window.onmousedown = function(event){
        controller.setMouseCoordinates(event);
    }
    window.onmouseup = function(){
        controller.setMouseUp();
    }

    setInterval(main_loop, 1000 / 60, controller);
}