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

pageview.innerHTML = (slider.value * 10) + ' K PAGEVIEWS';

slider.oninput = function(){ /*oninput means when some value be selected, something happens in the slider other words*/
    if(slider.value == 100){
        pageview.innerHTML = '1M PAGEVIEWS';
    } else {
        pageview.innerHTML = (slider.value * 10) + ' K PAGEVIEWS'; /*To keeps uploaded*/
    }
    
}

slider.addEventListener("mousemove", function(){
    var x = slider.value;
    var colorBg = 'linear-gradient(90deg,  rgb(16, 213, 194) ' + x + '%, rgb(234, 238, 251)' +  x + '%)';
    slider.style.background = colorBg;
})
