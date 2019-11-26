var photolist=["gray.png","red.png","green.png","orange.png"]
//var first_photo=document.getElementById("gray.png")
var count=0;
var play =function()
 {
     
     let imgSRC=document.getElementsByTagName("img")[0]
     imgSRC.setAttribute("src",photolist[count])
     if(count>3)
     {
     count=0 
     imgSRC.setAttribute("src",photolist[count])
    }
     count++

     
    }
/////////////////////next function 
    var next =function()
    {
        
      let imgSRC1 =document.getElementById("photo")
        imgSRC1.setAttribute("src",photolist[count])
        if(count>3)
     {
        count=0 
        imgSRC1.setAttribute("src",photolist[count])
     }
        count++
       
     }

     var previous=function()
    {
      let imgSRC2 =document.getElementById("photo")
      if(count==0)
      {
         
         imgSRC2.setAttribute("src",photolist[0])
      }
      else{
            imgSRC2.setAttribute("src",photolist[count-1])
            
              count-- 
          }
       
     }

 var t

    var set_interv=function()
    {
      t=setInterval(play, 2000)
    }

var stopF=function()
  {   
    console.log(t);
    
     clearInterval(t)
     
    //document.getElementById("play").removeEventListener("click",set_interv)
  }
    
    document.getElementById("play").addEventListener("click",set_interv)
    document.getElementById("next").addEventListener("click",next)
    document.getElementById("previous").addEventListener("click",previous)
    document.getElementById("stop").addEventListener("click",stopF)
 
 