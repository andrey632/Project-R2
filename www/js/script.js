var q =document.getElementsByClassName('nav-menu');
console.log(q);

for (var i=0; i<q.length; i++){
    q[i].onclick= menuTab;
}



function menuTab(){
    console.log(this.innerText);
   if (this.textContent == ' Главная') 
    {
     var obj = document.getElementById(1);
     obj.style.display = "block"
      for (var i=2; i<5; i++)
          {
            obj = document.getElementById([i]);
             obj.style.display = "none" 
          }
     
    } 
       
        
    else if  (this.textContent == ' Публикация') 
        {
            var obj = document.getElementById(2);
            obj.style.display = "block"
                for (var i=1; i<5; i++)
                {
                    if (i!=2)
                        {
                         obj = document.getElementById([i]);
                         obj.style.display = "none"  
                        }
                    
                }
            
        }
        
    else if  (this.textContent == ' Рассылка') 
        {
            var obj = document.getElementById(3);
            obj.style.display = "block"
             for (var i=1; i<5; i++)
                {
                   if(i!=3)
                       {
                        obj = document.getElementById([i]);
                        obj.style.display = "none"   
                       }
                   
                }
     
        }
        
    else if  (this.textContent == ' Настройки') 
        {
            var obj = document.getElementById(4);
            obj.style.display = "block"
                for (var i=1; i<4; i++)
                    {
                        obj = document.getElementById([i]);
                        obj.style.display = "none" 
                    }
            
        }
}

$.getJSON('config.json', callback);

function callback(respond) {
  for (var i = 0; i < respond.length; i++) {
    var data = respond[i];
    var rowClone = $('.mess_hide').clone().removeClass('mess_hide');
    $('#messages').append(rowClone);
    $('.time', rowClone).html(data.time);
    $('.name', rowClone).html(data.user);
    $('.message', rowClone).html(data.message);
  }
}