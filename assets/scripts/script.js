const btn_menu=document.getElementById('btn-menu');
const menu=document.getElementById('content-slider')
btn_menu.addEventListener('click',()=>{
    console.log('Menú');
    if(menu.style.height=='0px'){
        menu.style.height='400px';
    }
    else{
        menu.style.height='0px';
    }
    
})
