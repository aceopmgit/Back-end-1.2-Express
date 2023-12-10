const btn=document.getElementById('btn')
btn.addEventListener('click',submitDetails)

const itemlist=document.getElementById('items');
itemlist.addEventListener('click',updateDetails)

function submitDetails(e){
    e.preventDefault();

    //Getting input Values entered by user
    const Amount=document.getElementById('eAmount').value
    const Description=document.getElementById('desc').value
    const Category=document.getElementById('category').value

    //Creating object to store details
    const details={
        amount:Amount,
        description:Description,
        category:Category
    }

    axios.post('http://localhost:3000/expense/add-expense',details)
    .then((res)=>{
        //console.log(res);
        showExpense(res.data.newExpenseDetails)
        document.getElementById('eAmount').value="";
        document.getElementById('desc').value="";
        document.getElementById('category').value="";
        

        //showDetails(res.data);
    }).catch((err)=>{
        document.body.innerHTML=document.body.innerHTML +'<h4>Something went wrong</h4>'
        console.log(err);
    
    })


}

function showExpense(obj){

//Creating Span Element for id
    const sId=document.createElement('span')
    sId.className='id';
    sId.style.display='none';
    sId.appendChild(document.createTextNode(obj.id));

//Creating Delete Button and adding class and Text Node to it
    const deletebtn=document.createElement('button')
    deletebtn.className='btn btn-sm float-rignt delete'
    deletebtn.appendChild(document.createTextNode("Delete Expense"))

//Creating Edit Button and adding class and Text Node to it
    const editbtn=document.createElement('button');
    editbtn.className='btn btn-sm float-rignt edit'
    editbtn.appendChild(document.createTextNode("Edit Expense"))

// Creating li Element
    const li=document.createElement('li');
    li.className='list-group-item';
    li.append(obj.Amount," ",obj.Description," ",obj.Category,sId,deletebtn,editbtn);

    
//Appending li to ul tag
    itemlist.appendChild(li)
    
}
window.addEventListener("DOMContentLoaded",async()=>{
 

    try{
       const res= await axios.get('http://localhost:3000/expense/get-expense')
       //console.log(res)
       for(let i=0;i<res.data.allExpenseDetails.length;i++){
        //console.log(res.data.allExpenseDetails[i])
        showExpense(res.data.allExpenseDetails[i]);
       }

   } catch(err){
       document.body.innerHTML=document.body.innerHTML +'<h4>Could not show Details</h4>'

       console.log(err)
   }
})

function updateDetails(e){

//Code for Delete Button    
    if(e.target.classList.contains('delete')){
        let li=e.target.parentElement;
        itemlist.removeChild(li);

        const key=e.target.parentElement.getElementsByClassName('id')[0].textContent
        axios.delete(`http://localhost:3000/expense/delete-expense/${key}`).catch((err)=>{console.log(err)})
    }

//Code for Edit Button
    if(e.target.classList.contains('edit')){

    
        const key=e.target.parentElement.getElementsByClassName('id')[0].textContent
        
        axios.get(`http://localhost:3000/expense/edit-expense/${key}`)
        .then((res)=>{
            const li=e.target.parentElement;
            itemlist.removeChild(li);
            console.log(res)
            
            document.getElementById('eAmount').value=res.data.expenseDetails.Amount;
            document.getElementById('desc').value=res.data.expenseDetails.Description;     
            document.getElementById('category').value=res.data.expenseDetails.Category; 
        })
        .catch((err)=>{console.log(err)});
        axios.delete(`http://localhost:3000/expense/delete-expense/${key}`).catch((err)=>{console.log(err)})
        
    }
    



}