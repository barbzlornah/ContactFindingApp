// Get input element

let filterInput = document.getElementById('contact-input');
// Add event Listener

filterInput.addEventListener('keyup', filterNames);

function filterNames(){
     let filterValue = document.getElementById('contact-input').value.toUpperCase();
     //get ul

     let ul = document.getElementById('ul');
   // get li collection from ul
     let  li = ul.querySelectorAll('li.names');
    // loop thorugh it all
     for(let i = 0; i<li.length; i++){
         //the names now inside it
         let a = li[i].getElementsByTagName('a')[0];
         //ifmatches
         if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display ='';
         }else{
            li[i].style.display ='none';
         }
     }
}




