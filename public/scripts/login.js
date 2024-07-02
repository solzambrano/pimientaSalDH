let userMenu=document.getElementById('user-menu');
let user=document.getElementById('user');

user.addEventListener('click',(e)=>{
  console.log('estoy en el script');
    e.stopPropagation();
  userMenu.style.display = userMenu.style.display === 'block' ? 'none' : 'block';
})