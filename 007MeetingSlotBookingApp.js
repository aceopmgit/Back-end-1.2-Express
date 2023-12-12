const items=document.getElementById('items')
items.addEventListener('click',cancelMeeting);

const btn1=document.getElementById('2:00');
btn1.addEventListener('click',slot200);

const btn2=document.getElementById('2:30');
btn2.addEventListener('click',slot230);

const btn3=document.getElementById('3:00');
btn3.addEventListener('click',slot300);

const btn4=document.getElementById('3:30');
btn4.addEventListener('click',slot330);

const book=document.getElementById('book')
book.addEventListener('click',bookSlot);

function slot200(){
    const slot=document.getElementById('200').textContent;
    document.getElementById('slot').value=slot;
    document.getElementById('btn').value='2:00'
    document.getElementById('Time').value='2:00 PM'
    
}

function slot230(){
    const slot=document.getElementById('230').textContent;
    document.getElementById('slot').value=slot;
    document.getElementById('btn').value='2:30'
    document.getElementById('Time').value='2:30 PM'
    console.log(slot);
}

function slot300(){
    const slot=document.getElementById('300').textContent;
    document.getElementById('slot').value=slot;
    document.getElementById('btn').value='3:00'
    document.getElementById('Time').value='3:00 PM'
    console.log(slot);
}

function slot330(){
    const slot=document.getElementById('330').textContent;
    document.getElementById('slot').value=slot;
    document.getElementById('btn').value='3:30'
    document.getElementById('Time').value='3:30 PM'
    console.log(slot);
}

function bookSlot(){

    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const button=document.getElementById('btn').value
    const time=document.getElementById('Time').value
    let slot=document.getElementById('slot').value;
    

    if(slot>=1){
        slot=slot-1
    }
    


    const details={
        Name:name,
        Email:email,
        Slot:slot,
        Button:button,
        Time:time
    }



    axios.post('http://localhost:3000/bookSlots/scheduleMeeting',details)
    .then((res)=>{
        //console.log(res);
        showBookedSlots(res.data.newMeetingDetails)
        

        
    }).catch((err)=>{
        document.body.innerHTML=document.body.innerHTML +'<h4>Something went wrong</h4>'
        console.log(err);
    
    })

}

window.addEventListener("DOMContentLoaded",async()=>{
 

    try{
       const res= await axios.get('http://localhost:3000/bookSlots/get-AllMeetings')
       for(let i=0;i<res.data.allMeetingDetails.length;i++){
        showBookedSlots(res.data.allMeetingDetails[i]);
       }

   } catch(err){
       document.body.innerHTML=document.body.innerHTML +'<h4>Could not show Details</h4>'

       console.log(err)
   }
})

function showBookedSlots(obj){
   // console.log(obj.Slot)

   const button=document.getElementById(obj.Button);
   button.firstElementChild.textContent=`${obj.Slot}`

    if(obj.Slot===0){
        const button=document.getElementById(`${obj.Button}`);
        //console.log(button)
        button.style.visibility='hidden';        
    }

    //creating span element for id;
    const sid=document.createElement('span');
    sid.className='id';
    sid.style.display='none';
    sid.appendChild(document.createTextNode(obj.id));

    //Adding Cancel Button
    const cancelBtn=document.createElement('button');
    cancelBtn.className='btn btn-danger float-right cancel';
    cancelBtn.appendChild(document.createTextNode('cancel'));

    const pre=document.createElement('pre');
    pre.appendChild(document.createTextNode(`
     Hi ${obj.Name},
     Please join meeting via this https://meet.google.com/xy/dffd-86ghg 
     at ${obj.Time}
    `))

    //creating li element
    const li=document.createElement('li');
    li.className='list-group-item'        
    li.append(pre," ",sid,cancelBtn);

    //Adding li to ul tag
    items.appendChild(li); 
}

function cancelMeeting(e){
    if(e.target.classList.contains('cancel')){

        const key=e.target.parentElement.getElementsByClassName('id')[0].textContent;

        axios.get(`http://localhost:3000/bookSlots/get-MeetingDetails/${key}`)
        .then((res)=>{
            
            
            
            const li=e.target.parentElement;
            items.removeChild(li);

            const button=res.data.meetingDetails.Button

            const btn=document.getElementById(button)

            btn.style.visibility="visible"
                
            let newSlot=Number(btn.firstElementChild.textContent)+1
            btn.firstElementChild.textContent=`${newSlot}`

            axios.delete(`http://localhost:3000/bookSlots/update-slots/${key}`).catch((err)=>{console.log(err)});
            

             
        }).catch((err)=>{console.log(err)})


        
    }

}