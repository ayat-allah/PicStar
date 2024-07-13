document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('headerToggle');
    const discoverSection = document.getElementById('discoverSection');

    header.addEventListener('click', function () {
        discoverSection.classList.toggle('show');
    });
});
const pics = document.getElementsByClassName('pic');
const btns = document.getElementsByClassName('filters');
const results = document.getElementsByClassName('result');
const ppl = document.getElementsByClassName('Persons');
const posts = document.getElementsByClassName('user');
var x = window.matchMedia("(max-width: 400px)")
for (let index = 0; index < results.length; index++) {
    results[index].style.display = "none";
}
function Select(ele){
    for (let index = 0; index < pics.length; index++) {
        if(pics[index].id == ele.id){
            pics[index].style.display = "flex";
            if(x.matches){
                pics[index].style.left = "14%";
                pics[index].style.borderRadius = "0px";
            }
            else{
                pics[index].style.left = "33%";
            }
        }
        else{
            pics[index].style.display = "none";
        }
    }
    for(let i = 0; i < btns.length; i++){
        btns[i].style.display = "flex";
        btns[i].style.flex = "0 0 15%";
    }
}
function configure(){
    document.querySelector('.con').style.filter = "blur(50px)";
    //animation
}
function cancel(){
    for (let index = 0; index < pics.length; index++) {
            pics[index].style.display = "flex";
            if(x.matches){
                pics[index].style.left = "14%";
            }
            else{
                pics[index].style.left = "0%";
            }
    }
    for (let index = 0; index < btns.length; index++) {
        btns[index].style.display = "none";
    }
}
function search(prof){
    for (let index = 0; index < results.length; index++) {
        results[index].style.display = "none";
    }
    document.getElementsByTagName('h1')[0].style.display = "flex";
    document.getElementsByTagName('h1')[0].style.flexBasis = "100%";
    document.getElementsByTagName('h1')[0].style.textDecoration = "underline";
    for (let index = 0; index < ppl.length; index++) {
        if(prof.id == ppl[index].classList.item('0')){
            ppl[index].style.display = "flex";
        }
        else{
            ppl[index].style.display = "none";
        }
    }
    document.getElementsByTagName('h1')[1].style.display = "flex";
    document.getElementsByTagName('h1')[1].style.flexBasis = "100%";
    document.getElementsByTagName('h1')[1].style.textDecoration = "underline";
    for (let index = 0; index < posts.length; index++) {
        if(prof.id == posts[index].classList.item('0')){
            posts[index].style.display = "flex";
            posts[index].style.width = "32.5%";
        }
        else{
            posts[index].style.display = "none";
        }
    }

}
function look(){
    document.getElementById('results').style.display = "flex";  
    document.getElementById('results').style.flexBasis = "100%";
    for (let index = 0; index < results.length; index++) {
        results[index].style.display = "flex";
        results[index].style.flexBasis = "95%";
    }
    for (let index = 0; index < ppl.length; index++) {
        ppl[index].style.display = "none";
    }
    for (let index = 0; index < posts.length; index++) {
        posts[index].style.display = "none";
    }
    for (let index = 0; index < 2; index++) {
        document.getElementsByTagName('h1')[index].style.display = "none";
    }
}
