let posts = [];
let comments=[];
window.addEventListener('load', () => {
   
    posts = fetch('http://localhost:3000/posts')
    .then(posts => posts.json()).then( posts =>
        posts.forEach(element => {
            

            let i=document.createElement('i');
            i.setAttribute('class', 'glyphicon glyphicon-thumbs-up icon');
            
            let publisher = document.createElement('h4');
            publisher.innerText = element.publisher;
            publisher.setAttribute('class', 'titleClass');
            
            let content  = document.createElement('h3');
            content.setAttribute('style', 'float:left; margin-left:50px');
            content.innerText = element.content;

            let reactions=document.createElement('h4');
            reactions.innerText=element.reactions;
            reactions.setAttribute('class', 'reactclass');

            let img=document.createElement('img');
            img.setAttribute('src', './image/5.png');
            img.setAttribute('class', 'reactclass imgReactClass');

            let image = document.createElement('img');
            image.src=element.image;
            image.setAttribute('class', 'imageClass');
            let dv = document.createElement('div');
            dv.setAttribute('class', 'divClass'); 
            dv.appendChild(reactions);
            dv.appendChild(i);
            dv.appendChild(image);
            dv.appendChild(publisher);
            dv.appendChild(content);
            dv.appendChild(img);

            
            
            
            let commentsDiv = document.createElement('div');
            for (let i = 0; i <element.comments.length; i++)

            {
                let dvv = document.createElement('div');
                dvv.setAttribute('class', 'divvClass');
                
                let publisherr = document.createElement('h4');
                publisherr.innerText = element.comments[i].publisher;
                publisherr.setAttribute('class', 'titleeClass');
                
                let imagee = document.createElement('img');
                imagee.src=element.comments[i].image;
                imagee.setAttribute('class', 'imageeClass');

                let contentt  = document.createElement('h3');
                contentt.innerText = element.comments[i].content;

                dvv.appendChild(imagee);
                dvv.appendChild(publisherr);
                dvv.appendChild(contentt);

                commentsDiv.appendChild(dvv);
            }
            commentsDiv.setAttribute('style', 'margin-top:40px');
            let postsDialog = document.getElementById('posts');
            postsDialog.setAttribute('class', 'divClass'); 
            dv.appendChild(commentsDiv);
            postsDialog.appendChild(dv);
        }));
});



