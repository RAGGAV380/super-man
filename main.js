var canvas=new fabric.Canvas("myCanvas");

player_x=10;
player_y=10;

block_width=30;
block_height=30;

 var block_image="";
  var player_image="";


  function playerinfo(){
      fabric.Image.fromURL("player.png", function (img){
          player_image=img;
          player_image.scaleToWidth(150);
          player_image.scaleToHeight(140);
        
          player_image.set({

            top:player_y,
            left:player_x
          });
          canvas.add(player_image);
      })
  }

  

  function blockinfo(block){
    fabric.Image.fromURL(block, function (img){
        block_image=img;
        block_image.scaleToWidth(block_width);
        block_image.scaleToHeight(block_height);
      
        block_image.set({

          top:player_y,
          left:player_x
        });
        canvas.add(block_image);
    })
}
window.addEventListener("keydown",mykeydown);

function mykeydown(e){
  keypress=e.keyCode;
  if(e.shiftKey==true && keypress=="80"){
block_width=block_width+10;
block_height=block_height+10;
document.getElementById("current_width").innerHTML=block_width;
document.getElementById("current_height").innerHTML=block_height;
  }
if(e.shiftKey==true && keypress=="77"){
  block_width=block_width-10;
  block_height=block_height-10;
  document.getElementById("current_width").innerHTML=block_width;
  document.getElementById("current_height").innerHTML=block_height;
  }
  if( keypress=='38'){
    up();
      }
    
      if( keypress=='40'){
        down();
          }
    
          if( keypress=='37'){
            left();
              }
    
    
              if( keypress=='39'){
                right();
                  }

                  if( keypress=='70'){
                    blockinfo('hulk_face.png');
                      }

                      if( keypress=='76'){
                        blockinfo('hulk_legs.png');
                          }

                          if( keypress=='82'){
                            blockinfo('hulk_right_hand.png');
                              }

                              if( keypress=='72'){
                                blockinfo('hulk_left_hand.png');
                                  }
                                  if( keypress=='66'){
                                    blockinfo('hulkd_body.png');
                                      }
    
}

function up(){
    if(player_y>=0){
player_y-=10;
canvas.remove(player_image);
playerinfo();

    }
    
} 
 
    function down(){
        if(player_y<=500){
            player_y+=10;
            canvas.remove(player_image);
            playerinfo();
            
        }
          
    }

    function right(){
if (player_x<=700){
    player_x+=10;
    canvas.remove(player_image);
    playerinfo();
    
}
    }
    function left(){
        if(player_x>=0){
            player_x-=10;
            canvas.remove(player_image);
            playerinfo();
        
        }
    }


