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
    localStorage.setItem(details.Email,JSON.stringify(details));

    showDetails(details);
}



function showDetails(obj){
    //const sname=document.createElement('span');    
    //const sphone=document.createElement('span');

    //creating span element for email;
    const semail=document.createElement('span');
    semail.className='email';
    semail.style.display='none';
    semail.appendChild(document.createTextNode(obj.Email));

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
    li.append(" ",obj.Phone,semail,deletBtn,editBtn);

    //Adding li to ul tag
    items.appendChild(li); 
}



function updateInfo(e){

    //Adding Delete Functionality
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
            const li=e.target.parentElement;
            items.removeChild(li)
        }

        const key=e.target.parentElement.getElementsByClassName('email')[0].textContent;
        localStorage.removeItem(key);
        //console.log(e.target.parentElement.firstChild.textContent)
    }

    //Adding Edit functionality
    if(e.target.classList.contains('edit')){
        const key=e.target.parentElement.getElementsByClassName('email')[0].textContent;
        const data=JSON.parse(localStorage.getItem(key));

        localStorage.removeItem(key);
        const li=e.target.parentElement;
        items.removeChild(li);

        document.getElementById('name').value=data.Name;
        document.getElementById('phone').value=data.Phone;
        document.getElementById('email').value=data.Email;
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