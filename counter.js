const counters = document.querySelectorAll(".counter");

 counters.forEach((counter) =>{
     counter.innerHTML=0;

    
    
     const update = () =>{
        
        const target= +counter.getAttribute("data-target");
         const start=+counter.innerHTML;
         const incrementor= target/100

         if(start<target)
         {
             counter.innerHTML =`${Math.round(start + incrementor)}`;
             setTimeout(update,10);
         }
         else{
             counter.innerHTML=target;
         }


     }


     update ();





 })
