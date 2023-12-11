const button=document.getElementById('button');
button.addEventListener('click',submitUser);

const items=document.getElementById('items');
items.addEventListener('click',updateInfo);


function submitUser(e){
    e.preventDefault();
    //console.log('hello')
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const phone=document.getElementById('phone').value;

    const details={
        Name:name,
        Email:email,
        Phone:phone
    }

    
        
    axios.post('http://localhost:3000/user/add-user',details)
        .then((res)=>{
            //console.log(res);
            showDetails(res.data.newUserDetail)
            document.getElementById('name').value="";
            document.getElementById('phone').value="";
            document.getElementById('email').value="";
            

            //showDetails(res.data);
        }).catch((err)=>{
            document.body.innerHTML=document.body.innerHTML +'<h4>Something went wrong</h4>'
            console.log(err);
        
        })
               



}



function showDetails(obj){

    //creating span element for id;
    const sid=document.createElement('span');
    sid.className='id';
    sid.style.display='none';
    sid.appendChild(document.createTextNode(obj.id));

    //creating delete button;
    const deletBtn=document.createElement('button');
    deletBtn.className='btn btn-danger float-right delete';
    deletBtn.appendChild(document.createTextNode('Delete'));

    //creating edit button
    const editBtn=document.createElement('button');
    editBtn.className='btn btn-primary float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));


    
    //creating li element
    const li=document.createElement('li');
    li.className='list-group-item'
    li.appendChild(document.createTextNode(obj.Name));
    li.append(" ",obj.Phone,sid,deletBtn,editBtn);

    //Adding li to ul tag
    items.appendChild(li); 
}


window.addEventListener("DOMContentLoaded",async()=>{
 

    try{
       const res= await axios.get('http://localhost:3000/user/get-user')
       for(let i=0;i<res.data.allUserDetails.length;i++){
           showDetails(res.data.allUserDetails[i]);
       }

   } catch(err){
       document.body.innerHTML=document.body.innerHTML +'<h4>Could not show Details</h4>'

       console.log(err)
   }
})



function updateInfo(e){

    //Adding Delete Functionality
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
            const li=e.target.parentElement;
            items.removeChild(li)
        }

        const key=e.target.parentElement.getElementsByClassName('id')[0].textContent;
        axios.delete(`http://localhost:3000/user/delete-user/${key}`).catch((err)=>{console.log(err)})
        
    }

    //Adding Edit functionality
    if(e.target.classList.contains('edit')){
        
        const key=e.target.parentElement.getElementsByClassName('id')[0].textContent;

        axios.get(`http://localhost:3000/user/edit-user/${key}`)
        .then((res)=>{
            const li=e.target.parentElement;
            items.removeChild(li);
            
            document.getElementById('name').value=res.data.UserDetails.Name;
            document.getElementById('phone').value=res.data.UserDetails.Phone;
            document.getElementById('email').value=res.data.UserDetails.Email;
        })
        .catch((err)=>{console.log(err)});

        axios.delete(`http://localhost:3000/user/delete-user/${key}`).catch((err)=>{console.log(err)})
        
        //console.log(res);


        
        
        

    }

    
}

