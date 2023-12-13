const button=document.getElementById('button');
button.addEventListener('click',submitBlog);

const items=document.getElementById('items');
items.addEventListener('click',deleteComment);


function submitBlog(e){
    e.preventDefault();
    
    const title=document.getElementById('title').value;
    const author=document.getElementById('author').value;
    const content=document.getElementById('content').value;

    const details={
        title:title,
        author:author,
        content:content
    }

       
    
    axios.post('http://localhost:3000/blogs/add-blog',details)
        .then((res)=>{            
            showBlogs(res.data.newBlogDetails)            
        }).catch((err)=>{
            document.body.innerHTML=document.body.innerHTML +'<h4>Something went wrong</h4>'
            console.log(err);
        
        })
}



function showBlogs(obj){
/*
    //Adding collapse button
    const blog=document.createElement('button');
    blog.appendChild(document.createTextNode(`${obj.title}`));
    blog.className='btn- btn-dark'

        //items.appendChild(deletBtn);
    */

    //creating the pre button
    const pre=document.createElement('pre');
    pre.appendChild(document.createTextNode(`
    ${obj.title}

    ${obj.author}
     
     ${obj.content}

     Comment
    `))
    
    //creating the comment box
    const comment=document.createElement('input')
    comment.type='text';
    comment.id=`${obj.title}`;

    //creating delete button;
    const sendBtn=document.createElement('button');
    sendBtn.className='btn btn-primary send';
    sendBtn.appendChild(document.createTextNode('>'));

    //creating li element
    const li=document.createElement('li');
    li.className='list-group-item'
    
    li.append(pre,comment,sendBtn);

    const div=document.createElement('div');
    div.className='card-body';
    const id='div'+'-'+obj.title
    div.id=id;

    

    div.appendChild(li);

    //Adding li to ul tag
    items.appendChild(div);
    
    let details={
        input:obj.title,
        div:div.id     
    }

    //console.log(details)

    sendBtn.onclick=function(){postComment(details)}
    
}

function postComment(obj){
    const comment=document.getElementById(obj.input).value;

    const bcomment={
        comment:comment,
        input:obj.input,
        div:obj.div
    }
    //console.log(bcomment)


    axios.post('http://localhost:3000/blogs/comment/add-comment',bcomment)
    .then((res)=>{
        //console.log(res.data.newcomment)
        showComment(res.data.newcomment);

    }).catch((err)=>{
        document.body.innerHTML=document.body.innerHTML +'<h4>Something went wrong</h4>'
        console.log(err);
    
    }) 



}

function showComment(obj){

    //console.log(obj)
    
    //creating span element for id;
    const sid=document.createElement('span');
    sid.className='id';
    sid.style.display='none';
    sid.appendChild(document.createTextNode(obj.id));

     //creating delete button;
    const deletBtn=document.createElement('button');
    deletBtn.className='btn btn-danger float-right delete';
    deletBtn.appendChild(document.createTextNode('Delete'));
    
    //creating li tag
    const li=document.createElement('li');
    li.className='list-group-item';
    li.append(obj.comment,deletBtn,sid);

    document.getElementById(obj.div).appendChild(li);           
            
                    

}


window.addEventListener("DOMContentLoaded",async()=>{
 

    try{
       const res= await axios.get('http://localhost:3000/blogs/show-blogs')
       for(let i=0;i<res.data.allBlogDetails.length;i++){
           showBlogs(res.data.allBlogDetails[i]);
       }

       const c= await axios.get('http://localhost:3000/blogs/comment/show-comments')
       for(let i=0;i<c.data.allcomments.length;i++){
        showComment(c.data.allcomments[i]);
       }

   } catch(err){
       document.body.innerHTML=document.body.innerHTML +'<h4>Could not show Details</h4>'

       console.log(err)
   }
})



function deleteComment(e){

    //Adding Delete Functionality
    if(e.target.classList.contains('delete')){
        
            const div=e.target.parentElement.parentElement
            const li=e.target.parentElement
            
            div.removeChild(li)
        

        const key=e.target.parentElement.getElementsByClassName('id')[0].textContent;
        axios.delete(`http://localhost:3000/blogs/comment/delete-comment/${key}`).catch((err)=>{console.log(err)})
        
    }

    
    }

    


