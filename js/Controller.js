class Controller{
    //variables for mouse event
    mouse_x;
    mouse_y;
    keys;
    click;
    model;
    context;
    
    constructor(context){
        this.mouse_x = 0;
        this.mouse_y = 0;
        this.keys = [];
        this.click = 0;
        this.model = new Model();
        this.context = context;
    }

    setMouseCoordinates(event){
        this.mouse_x = event.offsetX;
        this.mouse_y = event.offsetY;
        this.click = 1;
    }
    
    setMouseUp(){
        this.click = 0;
    }

    setKeyDown(event){
        this.keys[event.keyCode] = true;
    }

    setKeyUp(event){
        this.keys[event.keyCode] = false;
    }
}