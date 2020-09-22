import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './main.css';

import { router } from './router/index.routes';

router(window.location.hash);

window.addEventListener('hashchange', ()=>{
    // console.log(window.location.hash);
    router(window.location.hash);
});