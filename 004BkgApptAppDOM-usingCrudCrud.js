const button=document.getElementById('button');
button.addEventListener('click',submitUser);

const items=document.getElementById('items');
items.addEventListener('click',updateInfo);

const filter=document.getElementById('filter');
filter.addEventListener('keyup',searchUser);


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

    async function postDetails(){
        try{
            const res=await axios.post('https://crudcrud.com/api/5df7d08601b145fbbdc3c907b5e267bf/userDetails',details);
            
            
            document.getElementById('name').value="";
            document.getElementById('phone').value="";
            document.getElementById('email').value="";
            

            showDetails(res.data);

        }
        catch{
            console.log(err);
        }
    }
    postDetails();

}



function showDetails(obj){
    //const sname=document.createElement('span');    
    //const sphone=document.createElement('span');

    //creating span element for email;
    const sid=document.createElement('span');
    sid.className='id';
    sid.style.display='none';
    sid.appendChild(document.createTextNode(obj._id));

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
       const res= await axios.get('https://crudcrud.com/api/5df7d08601b145fbbdc3c907b5e267bf/userDetails')
       for(let i=0;i<res.data.length;i++){
           showDetails(res.data[i]);
       }

   } catch(err){
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
        axios.delete(`https://crudcrud.com/api/5df7d08601b145fbbdc3c907b5e267bf/userDetails/${key}`).catch((err)=>{console.log(err)})
        
    }

    //Adding Edit functionality
    if(e.target.classList.contains('edit')){
        
        const key=e.target.parentElement.getElementsByClassName('id')[0].textContent;

        const res=axios.get(`https://crudcrud.com/api/5df7d08601b145fbbdc3c907b5e267bf/userDetails/${key}`)
        .then((res)=>{
            document.getElementById('name').value=res.data.Name;
            document.getElementById('phone').value=res.data.Phone;
            document.getElementById('email').value=res.data.Email;
        })
        .catch((err)=>{console.log(err)});

        axios.delete(`https://crudcrud.com/api/5df7d08601b145fbbdc3c907b5e267bf/userDetails/${key}`).catch((err)=>{console.log(err)})
        
        //console.log(res);


        
        
        const li=e.target.parentElement;
        items.removeChild(li);

    }
}

function searchUser(e){
    const text=e.target.value.toLowerCase()

    const li=items.getElementsByTagName('li');

    Array.from(li).forEach((li)=>{
        const listName=li.firstChild.textContent;

        if(listName.toLowerCase().indexOf(text) !=-1){
            li.style.display='block';
        }
        else{
            li.style.display='none';
        }
        
    })

}