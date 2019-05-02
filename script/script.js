let btn_drawer_menu = document.querySelectorAll('.drawer-menu')[0];
let btn_action_menu = document.querySelectorAll('.action-menu')[0];

btn_drawer_menu.addEventListener('click', () => {
    let menu = document.querySelectorAll('.menu-container')[0];
    menu.classList.toggle('hide-menu');
    console.log('Drawer button pressed');
});

btn_action_menu.addEventListener('click', () => {
    console.log('Action button pressed');
});