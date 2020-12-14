const li=document.querySelectorAll('li');
function on(){
    this.classList.toggel('active');
}
li.forEach(element => {
    addEventListener('click', on)
});