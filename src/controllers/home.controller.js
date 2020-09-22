import Home from '../views/home.html';

export default ()=>{
    const divElement = document.createElement('div');
    divElement.innerHTML = Home;

    const btnClick = divElement.querySelector('#btnClick');

    btnClick.addEventListener('click', ()=>{
        alert('Click');
    } );

    return divElement;
}