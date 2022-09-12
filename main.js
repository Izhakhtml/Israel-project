const images_one = document.getElementsByClassName('a_firstImagesRow');
const images_two = document.getElementsByClassName('a_secondImagesRow');
const images_three = document.getElementsByClassName('a_threeImagesRow');
const form_details = document.getElementById('form_details');

rangeOfImage.innerText = `${images_one.length - 1} From ${images_one.length}`;
rangeOfImage_second.innerText = `${images_two.length - 1} From ${images_two.length}`;
rangeOfImage_three.innerText = `${images_two.length - 1} From ${images_two.length}`;


//! show how much images in array;
function showHowImages(arrayLength, idBtnTarget, pElement) {
    switch (idBtnTarget.target.id) {
        case 'btn_right':
            pElement.innerText = `${arrayLength.length} From ${arrayLength.length}`;
            return;
        case 'btn_left':
            pElement.innerText = `${arrayLength.length - 1} From ${arrayLength.length}`;
            return;
        case 'btn_right_seconed':
            pElement.innerText = `${arrayLength.length} From ${arrayLength.length}`;
            return;
        case 'btn_left_seconed':
            pElement.innerText = `${arrayLength.length - 1} From ${arrayLength.length}`;
            return;
        case 'btn_right_three':
            pElement.innerText = `${arrayLength.length} From ${arrayLength.length}`;
            return;
        case 'btn_left_three':
            pElement.innerText = `${arrayLength.length - 1} From ${arrayLength.length}`;
            return;
        default:
            console.log("lommas");
            return;
    }
}
//! button event
function btnsEvent(btnRight, btnLeft, images, pTarget) {
    btnRight.onclick = (e) => {
        images[0].style = 'display:none;'
        images[images.length - 1].style = 'display:block;'
        showHowImages(images, e, pTarget)
    }
    btnLeft.onclick = (e) => {
        images[0].style = 'display:block;'
        images[images.length - 1].style = 'display:none;'
        showHowImages(images, e, pTarget)
    }
}
btnsEvent(btn_right, btn_left, images_one, rangeOfImage);
btnsEvent(btn_right_seconed, btn_left_seconed, images_two, rangeOfImage_second);
btnsEvent(btn_right_three, btn_left_three, images_three, rangeOfImage_three);

//! btn li click focous on the images 
function btnLiClick(liClick, articleImage) {
    liClick.onclick = () => {
        articleImage.style = 'box-shadow:5px 10px 18px 18px #888888';
        setInterval(() => {
            articleImage.style = 'box-shadow:none';
        }, 1700);
    }
}
btnLiClick(li_click, warp_images);
btnLiClick(li_click_2, warp_images_second);
btnLiClick(li_click_3, warp_images_three);

//! scroll event of the page
document.addEventListener('scroll', () => {
    if (window.pageYOffset > 235) {
        back_to_aTag.style = 'display:block'
    } else {
        back_to_aTag.style = 'display:none'
    }
})

//! when the screen of mobile
function showAndDisappearImage(eventElement, images) {
    eventElement.onclick = () => {
        if (eventElement.innerText == 'show more') {
            images[images.length - 1].style = 'display:block'
            eventElement.innerText = 'show less'
        } else {
            images[images.length - 1].style = 'display:none'
            eventElement.innerText = 'show more'
        }
    }
}
showAndDisappearImage(show_more, images_one);
showAndDisappearImage(show_more_2, images_two);
showAndDisappearImage(show_more_3, images_three);

