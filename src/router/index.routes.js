import {pages} from '../controllers/index';

let root = document.getElementById('root');

export const router = async (route)=>{    
    root.innerHTML = '';

    switch (route) {
        case '#/': {
            root.appendChild(pages.home());
            break;
        }
        case '#/products':
            console.log('Products');
            break;
        case '#/posts':
            root.appendChild(await pages.posts());
            break;
        case '#/user':
            console.log('User');
            break;
    
        default:
            root.appendChild(pages.notFound());
            break;
    }
}