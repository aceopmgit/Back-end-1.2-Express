const button=document.getElementById('button');
button.addEventListener('click',show);

const items=document.getElementById('items');

function show(){

    const deletBtn=document.createElement('button');
    deletBtn.appendChild(document.createTextNode('delete'));
    deletBtn.className='btn- btn-dark'
    
    deletBtn.ariaExpanded='true'

    deletBtn.onclick=function(){showComment()}


    const div=document.createElement('div');
    div.id=div;
    div.appendChild(document.createTextNode('hello'))
    

    items.appendChild(deletBtn);




    //heading.appendChild(deletBtn);
}

function showComment(){
    ("#div").collapse('toggle');
}