function item(element){
  var name=document.getElementById(element).value;
  if(name=="")
   return false
   return true

}
function radio_buton(element)
{

    
   var name =document.getElementsByClassName(element)
     for (let k in name)
      {
         if(name[k].checked==true)
            return true 
      
      }   
       return false 
}
var check_box=function(element)
{
    let counter=0
    let name =document.getElementsByClassName(element)
    for (let k in name)
    {
       if(name[k].checked)
           counter ++;
    
    }   
    if(counter>1)
        return true 
        
        return false 
}
var selected_list=function(element)
   {
      value =document.getElementById(element).value
      if(value!="")
         return true 
         return false


   }
   
  function formAction()
    {  
        var error_message=""
       if(item("element_1")==false)
       
          error_message+= "<li>name is required </li>"
       if(item("element_2")==false )
       
          error_message+= "<li>password is required </li>"
       if(item("element_3")==false )
       
          error_message+= "<li>email is required </li>"
          
       if (radio_buton("element radio")==false) 
           
           error_message+= '<li> Gender is required  </li>'
        if (check_box("element checkbox")==false) 
            
          error_message+= "<li> must choose at least two sport </li>"
       
        if (selected_list("element_6")==false) 
        error_message+= "<li> countery is required </li>"
        return error_message
       
    } 
      var prevent_def=function()
      {

        document.getElementById("saveForm").addEventListener("submit",(e)=>{
            e.preventDefault()
        })

      }


    var Get_error=function(e)
    {
      e.preventDefault()
        //prevent_def()
        let message=formAction()
      var li_message=document.getElementById('error-messages')
      li_message.innerHTML=message
      var list=document.getElementsByClassName("errors")[0]
      list.style.display="block"
      li_message.style.color="red"
    

    }
    document.getElementById("form_1085147").addEventListener("submit",Get_error)





