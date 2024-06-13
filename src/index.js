import './style.css';
import { 
    btnEvent
} from './logic';

const menuBtn = document.querySelector('.menu-button');
menuBtn.addEventListener('click',()=>{
    const hiddenMenu = document.querySelector('.hidden-container');
    btnEvent(hiddenMenu);
});




