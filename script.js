/*Advantages script */
var advantages0 = document.querySelector("span.adv0");
var advantages1 = document.querySelector("span.adv1");
var advantages2 = document.querySelector("span.adv2");

advantages0.innerText = `✔️ ` + advantages0.innerText;
advantages1.innerText = `✔️ ` + advantages1.innerText;
advantages2.innerText = `✔️ ` + advantages2.innerText;

/*Slider */
var slider = document.getElementById('MyRange');
var pageview = document.getElementById('pageview');
var sliderMobile = document.getElementsByTagName('input');
var price = document.getElementById('price');
const checkbox = document.querySelector('input[name=discount]');

pageview.innerHTML = (slider.value * 10) + ' K PAGEVIEWS';

slider.oninput = function(){ /*oninput means when some value be selected, something happens in the slider other words*/
    if(slider.value == 100){
        pageview.innerHTML = '1M PAGEVIEWS';
    } else {
        pageview.innerHTML = (slider.value * 10) + ' K PAGEVIEWS'; /*To keeps uploaded*/
    }

    /* PRICE ORIGINAL AND WITH DISCOUNT*/
    pricePerPageview();    
}

slider.addEventListener("mousemove", function(){
    var x = slider.value;
    var colorBg = 'linear-gradient(90deg,  rgb(16, 213, 194) ' + x + '%, rgb(234, 238, 251)' +  x + '%)';
    slider.style.background = colorBg;
})

/*SLIDER ON MOBILE*/
sliderMobile[0].ontouchmove = function(){
    if(sliderMobile[0].value == 100){
        pageview.innerHTML = '1M PAGEVIEWS';
    } else {
        pageview.innerHTML = (sliderMobile[0].value * 10) + ' K PAGEVIEWS'; /*To keeps uploaded*/
    }
    
}

sliderMobile[0].addEventListener("touchmove", function(){
    var x = sliderMobile[0].value;
    var colorBg = 'linear-gradient(90deg,  rgb(16, 213, 194) ' + x + '%, rgb(234, 238, 251)' +  x + '%)';
    slider.style.background = colorBg;
})

/*To upload when the toggle switch be pressed*/
checkbox.addEventListener("change", function() {
    pricePerPageview();
});

function pricePerPageview() {
    if(!checkbox.checked){ /* When isn't with discount = Don't pressed */
        if (slider.value >= 1 && slider.value < 5){
            price.innerHTML = `$08.00`;
        } 
        else if (slider.value >= 5 && slider.value <= 9) {
            price.innerHTML = `$12.00`;
        } 
        else if (slider.value > 9 && slider.value <= 49) {
            price.innerHTML = `$16.00`;
        }
        else if (slider.value > 49 && slider.value <= 99){
            price.innerHTML = `$24.00`;
        }
        else if (slider.value == 100){
            price.innerHTML = `$36.00`;
        };  
    } else { /* When the switch is pressed, discount activated */
        if (slider.value >= 1 && slider.value < 5){
            let pricePage = 08.00 - (08.00 * 0.25)
            price.innerHTML = `$` + pricePage.toString() + `.00`;
        } 
        else if (slider.value >= 5 && slider.value <= 9) {
            let pricePage = 12.00 - (12.00 * 0.25);
            price.innerHTML = `$` + pricePage.toString() + `.00`;
        } 
        else if (slider.value > 9 && slider.value <= 49) {
            let pricePage = 16.00 - (16.00 * 0.25);
            price.innerHTML = `$` + pricePage.toString() + `.00`;
        }
        else if (slider.value > 49 && slider.value <= 99){
            let pricePage = 24.00 - (24.00 * 0.25);
            price.innerHTML = `$` + pricePage.toString() + `.00`;
        }
        else if (slider.value == 100){
            let pricePage = 36.00 - (36.00 * 0.25);
            price.innerHTML = `$` + pricePage.toString() + `.00`;
        };
    };
};

/* Changing order of div for desktop version */
// var featuredPrice = document.getElementsByClassName('main-priceSelected');
// console.log(featuredPrice[0]);
// var inputSlider = document.getElementsByClassName('slider');
// console.log(inputSlider[0]);

// featuredPrice.insertBefore(inputSlider);

deviceWidth();

function deviceWidth() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    
    var discountText = window.document.getElementById('Percentage-discount');

    if(screenWidth > 1366) {
        console.log('higher than 1366');
        discountText.innerHTML = '25% discount';
    } else if (screenWidth <= 700) {
        console.log('less than 1366');
        discountText.innerHTML = '-25%';
    }
}

window.addEventListener('resize', function(){ /*When the size of screen changes*/
    deviceWidth();
});