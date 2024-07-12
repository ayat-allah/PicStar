const pics = document.getElementsByClassName('pic');
const btns = document.getElementsByClassName('filters');
function Select(ele){
    for (let index = 0; index < 9; index++) {
        if(pics[index].id == ele.id){
            pics[index].style.display = "flex";
        }
        else{
            pics[index].style.display = "none";
        }
    }
    for(let i = 0; i < 4; i++){
        btns[i].style.display = "flex";
    }
}
