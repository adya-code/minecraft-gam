var canvas =  new fabric.Canvas("canvas_page");

player_x=10;
player_y=10;

block_width =30;
block_height=30;

var player_object="";
var block_object="";

function player_update(){

fabric.Image.fromURL("player.png",function(Img){
 player_object=Img;
 player_object.scaleToWidth=150;
 player_object.scaleToHeight=150;
 player_object.set({
 top:player_y, 
 left:player_x     
 }); 
canvas.add(player_object);
});

}

function  new_image(get_image){

fabric.Image.fromURL(get_image,function(Img){
block_object=Img;
block_object.scaleToWidth =block_width;
block_object.scaleToHeight=block_height;
block_object.set({
    top:player_y,
    left:player_x
});
canvas.add(block_object);
});

}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){

    keypressed=e.keyCode
    
    if(e.shiftKey==true &&  keypressed==80){
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }

  if(e.shiftKey==true && keypressed==77) {
      block_width=block_width-10;
      block_height=block_height-10;
      document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
  } 
  console.log(keypressed);
  if(keypressed=="38"){
      up();
      console.log("up");

}

console.log(keypressed);
  if(keypressed=="40"){
      down();
      console.log("down");

}

if(keypressed=="39"){
    right();
    console.log("right");
}

if (keypressed=="37"){
    left();
    console.log("left");
}

if (keypressed=='87'){
    new_image('wall.jpg'); 
    console.log("w");

}

if(keypressed == '71')
	{
		new_image('ground.png'); 
		console.log("g");

}

if(keypressed =='76'){

    new_image('light_green.png');
    console.log("l");
}

if(keypressed=='84'){

    new_image('trunk.jpg');
    console.log('t');}

    if(keypressed=='82'){

        new_image('roof.jpg');
        console.log('r');
    }

    
    if(keypressed=='89'){

        new_image('yellow_wall.png');
        console.log('y');
    }

    
    if(keypressed=='66'){

        new_image('dark_green.png');
        console.log('d');
    }

    
    if(keypressed=='85'){

        new_image('unique.png');
        console.log('u');
    }
    
    if(keypressed=='67'){

        new_image('cloud.jpg');
        console.log('c');
    }

    
if(keypressed == '66')
{
    new_image('player.png'); 
    console.log("p");

}
}

function up()
{
	if(player_y >=0)
	{
		player_y = player_y - 30;
		canvas.remove(player_object);
		player_update();
	}
}

function down()
{
    if(player_y <=500){

        player_y=player_y+30;
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(player_x>=0){
        player_x=player_x-30;
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_x<=900){
        player_x=player_x+30;
        canvas.remove(player_object);
        player_update();
    }
}
