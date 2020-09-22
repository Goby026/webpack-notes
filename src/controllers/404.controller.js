import NotFound from '../views/404.html';

export default ()=>{

    const divElement = document.createElement('div');
    divElement.innerHTML = NotFound;

    // const btnClick = divElement.querySelector('#btnClick');

    // btnClick.addEventListener('click', ()=>{
    //     alert('Click');
    // } );

    return divElement;
}