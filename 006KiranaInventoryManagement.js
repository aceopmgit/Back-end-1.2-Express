const button=document.getElementById('button');
button.addEventListener('click',addToInventory);

const items=document.getElementById('items');
items.addEventListener('click',updateInventory);


function addToInventory(e){
    e.preventDefault();
    //console.log('hello')
    const iName=document.getElementById('iName').value;
    const iDesc=document.getElementById('iDesc').value;
    const iPrice=document.getElementById('iPrice').value;
    const iQuant=document.getElementById('iQuant').value;

    const details={
        iName:iName,
        iDesc:iDesc,
        iPrice:iPrice,
        iQuant:iQuant
    }

    
        
    axios.post('http://localhost:3000/inventory/add-Inventory',details)
        .then((res)=>{
            //console.log(res);
            showDetails(res.data.newInventoryItem)

            

        
        }).catch((err)=>{
            document.body.innerHTML=document.body.innerHTML +'<h4>Something went wrong</h4>'
            console.log(err);
        
        })
               



}



function showDetails(obj){

    //creating span element for email;
    const sid=document.createElement('span');
    sid.className='id';
    sid.style.display='none';
    sid.appendChild(document.createTextNode(obj.id));

    //creating Buy1 button;
    const buy1=document.createElement('button');
    buy1.className='btn btn-dark float-right buy1';
    buy1.appendChild(document.createTextNode('Buy 1'));

    //creating Buy2 button;
    const buy2=document.createElement('button');
    buy2.className='btn btn-dark float-right buy2';
    buy2.appendChild(document.createTextNode('Buy 2'));

    //creating Buy3 button;
    const buy3=document.createElement('button');
    buy3.className='btn btn-dark float-right buy3';
    buy3.appendChild(document.createTextNode('Buy 3'));



    
    //creating li element
    const li=document.createElement('li');
    li.className='list-group-item'
    //li.appendChild(document.createTextNode());
    li.append(obj.iName," ",obj.iDescription," ",obj.iPrice," ",obj.iQuantity,sid,buy3,buy2,buy1);

    //Adding li to ul tag
    items.appendChild(li); 
}


window.addEventListener("DOMContentLoaded",async()=>{
 

    try{
       const res= await axios.get('http://localhost:3000/inventory/get-Inventory')
       for(let i=0;i<res.data.allInventoryItems.length;i++){
           showDetails(res.data.allInventoryItems[i]);
       }

   } catch(err){
       document.body.innerHTML=document.body.innerHTML +'<h4>Could not show Details</h4>'

       console.log(err)
   }
})



function updateInventory(e){


    if(e.target.classList.contains('buy1')){
        
        const key=e.target.parentElement.getElementsByClassName('id')[0].textContent;

        axios.get(`http://localhost:3000/inventory/get-InventoryItem/${key}`)
        .then((res)=>{
            const oldQuantity=res.data.InventoryItem.iQuantity;
            let newQuantity;
            if(oldQuantity===0){
                newQuantity=0
            }
            else{
                newQuantity=oldQuantity-1;
            }
             
            

            const quantity={
                id:key,
                quantity:newQuantity
            }
            axios.post(`http://localhost:3000/inventory/update-Inventory`,quantity).catch((err)=>{console.log(err)})

        })
        .catch((err)=>{console.log(err)});

        
    }
    if(e.target.classList.contains('buy2')){
        
        const key=e.target.parentElement.getElementsByClassName('id')[0].textContent;

        axios.get(`http://localhost:3000/inventory/get-InventoryItem/${key}`)
        .then((res)=>{
            const oldQuantity=res.data.InventoryItem.iQuantity;
            let newQuantity;
            if(oldQuantity>=2){
                                
            if(oldQuantity===2){
                newQuantity=0
            }
            else{
                newQuantity=oldQuantity-2;
            }

            }
            else{
                //alert('not enough quantity !!')
            }

             
            

            const quantity={
                id:key,
                quantity:newQuantity
            }
            axios.post(`http://localhost:3000/inventory/update-Inventory`,quantity).catch((err)=>{console.log(err)})

        })
        .catch((err)=>{console.log(err)});
    }

    if(e.target.classList.contains('buy3')){
        
        const key=e.target.parentElement.getElementsByClassName('id')[0].textContent;

        axios.get(`http://localhost:3000/inventory/get-InventoryItem/${key}`)
        .then((res)=>{
            const oldQuantity=res.data.InventoryItem.iQuantity;
            let newQuantity;
            if(oldQuantity>=3){
                                
            if(oldQuantity===3){
                newQuantity=0
            }
            else{
                newQuantity=oldQuantity-3;
            }

            }
            else{
                //alert('not enough quantity !!')
            }

             
            

            const quantity={
                id:key,
                quantity:newQuantity
            }
            axios.post(`http://localhost:3000/inventory/update-Inventory`,quantity).catch((err)=>{console.log(err)})

        })
        .catch((err)=>{console.log(err)});
    }
   // axios.delete(`http://localhost:3000/user/delete-user/${key}`).catch((err)=>{console.log(err)})
    
    
    
    


    
}

