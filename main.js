const images_one = document.getElementsByClassName('a_tag')
const images_two = document.getElementsByClassName('images_two')
const images_three = document.getElementsByClassName('images_three')
const form_details = document.getElementById('form_details')
function btnsEvent(btnRight, btnLeft, images) {
    btnRight.onclick = () => {
        images[0].style = 'display:none;'
        images[3].style = 'display:block;'
    }
    btnLeft.onclick = () => {
        images[0].style = 'display:block;'
        images[3].style = 'display:none;'
    }
}
btnsEvent(btn_right, btn_left, images_one);
btnsEvent(btn_right_seconed, btn_left_seconed, images_two);
btnsEvent(btn_right_three, btn_left_three, images_three);

function btnLiClick(liClick, articleImage) {
    liClick.onclick = () => {
        articleImage.style = 'box-shadow:5px 10px 18px 18px #888888';
        setInterval(() => {
            articleImage.style = 'box-shadow:none';
        }, 1500);
    }
}
btnLiClick(li_click, warp_images);
btnLiClick(li_click_2, warp_images_second);
btnLiClick(li_click_3, warp_images_three);




// form_details.addEventListener('submit', e => {
//     console.log(e.children);
// })
// console.log(form_details);
function name2(param) {
    // const div = document.createElement('div')
    for (let i = 0; i < param.length; i++) {
        let clickImages = param[i]
        clickImages.onclick =()=>{
            // div.append(clickImages)
            // div.style = 'width:100vw;height: 200vh;'
            clickImages.style = ' position: absolute;width:80vw;height: 100vh;'
        }
    }
}
// name2(images_one)
console.log(images_one.length);