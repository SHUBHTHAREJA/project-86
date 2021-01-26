var canvas=new fabric.Canvas('myCanvas');

block_image_width=30;
block_image_height=30;

player_x=10;
player_y=10;

player_object="";
block_image_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(player_object);
    })
}

function new_image(get_image){
fabric.Image.fromURL(get_image,function(Img){
    block_image_object=Img;
    block_image_object.scaleToWidth(block_image_width)
    block_image_object.scaleToHeight(block_image_height)
    block_image_object.set({
        top:player_y,
        left:player_x
    })
    canvas.add(block_image_object);
})
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if (e.shiftKey==true && keypress=='80') {
        console.log("shift and p clicked together");
        block_image_height= block_image_height+10;
        block_image_width= block_image_width+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if (e.shiftKey==true && keypress=='77') {
        console.log("shift and m clicked together");
        block_image_height= block_image_height-5;
        block_image_width= block_image_width-5;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if (keypress=='70') {
        new_image('ironman_face.png');
        console.log("f");
    }
    if (keypress=='66') {
        new_image('spiderman_body.png')
        console.log("b");
    }
    if (keypress=='76') {
        new_image('hulk_legs.png')
        console.log("l");
    }
    if (keypress=='82') {
        new_image('thor_right_hand.png')
        console.log("r");
    }
    if (keypress=='72') {
        new_image('captain_america_left_hand.png')
        console.log("h");
    }
    if (keypress=='38' ) {
        up();
        console.log("up");
    }
    if (keypress=='37' ) {
        left();
        console.log("left");
    }
    if (keypress=='39' ) {
        right();
        console.log("right");
    }
    if (keypress=='40' ) {
        down();
        console.log("down");
    }
    

}
function up (){
    if (player_y>=0) 
    {
        player_y=player_y-block_image_height;
        console.log("x="+player_x+"y="+player_y);
        console.log("block image height="+block_image_height);
        canvas.remove(player_object);
        player_update();
    }
}
function down (){
    if (player_y<=500) 
    {
        player_y=player_y+block_image_height;
        console.log("x="+player_x+"y="+player_y);
        console.log("block image height="+block_image_height);
        canvas.remove(player_object);
        player_update();
    }
}

function right (){
    if (player_x<=750) 
    {
        player_x=player_x+block_image_width;
        console.log("x="+player_x+"y="+player_y);
        console.log("block image width="+block_image_width);
        canvas.remove(player_object);
        player_update();
    }
}
function left (){
    if (player_x>=0) 
    {
        player_x=player_x-block_image_width;
        console.log("x="+player_x+"y="+player_y);
        console.log("block image width="+block_image_width);
        canvas.remove(player_object);
        player_update();
    }
}