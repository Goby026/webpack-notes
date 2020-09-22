import Posts from '../views/posts.html';


const getPosts = async ()=>{
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await resp.json();
}

export default async()=>{

    const divElement = document.createElement('div');
    divElement.innerHTML = Posts;

    // selectores
    const lista = divElement.querySelector('#posts');
    const txtTotal = divElement.querySelector('#txtTotal');

    const posts = await getPosts();

    const total = Array.from(posts).length;

    txtTotal.innerHTML += total;

    posts.forEach(e => {
        lista.innerHTML += `
        <li class="collection-item">
            <h5>${e.id} - ${e.title}</h5>            
            <blockquote>
                ${e.body}
            </blockquote>
        </li>
        `;
    });

    divElement.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems, options);
      });
    
    return divElement;
}
