(function () {

    var controller = new ScrollMagic.Controller();


    var wipeAnimation = new TimelineMax()
        // animate to second
        .to("#slideContainer", 1, { z: -500, opacity: 0, ease: Linear.ease })
        .to("#slideContainer", 1, { x: "-25%" })
        .to("#slideContainer", 1, { z: 0, opacity: 1, ease: Linear.ease })
        // animate to third
        .to("#slideContainer", 1, { z: -500, delay: 0.6, opacity: 0, ease: Linear.ease })
        .to("#slideContainer", 1, { x: "-50%" })
        .to("#slideContainer", 1, { z: 0, opacity: 1, ease: Linear.ease })
        // animate to forth
        .to("#slideContainer", 1, { z: -500, delay: 0.6, opacity: 0, ease: Linear.ease })
        .to("#slideContainer", 1, { x: "-75%" })
        .to("#slideContainer", 1, { z: 0, opacity: 1, ease: Linear.ease })


    var scene = new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "200%" //이 값이 클 수록 천천히 덮어씀
    }).setTween(".one", 1, { opacity: 0 }) // trigger a TweenMax.to tween
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        .addIndicators()
        .addTo(controller);


}())
var xmlns = "http://www.w3.org/2000/svg",
    xlinkns = "http://www.w3.org/1999/xlink",
    select = function (s) {
        return document.querySelector(s);
    },
    selectAll = function (s) {
        return document.querySelectorAll(s);
    }


TweenMax.set('svg', {
    visibility: 'visible'
})
TweenLite.defaultEase = Linear.easeNone;

var tl = new TimelineMax({ repeat: -1, yoyo: true }).timeScale(1);
tl.to('.reelL', 4, {
    strokeWidth: 5,
    attr: {
        r: 31
    }
})
    .to('.reelR', 4, {
        strokeWidth: 39,
        attr: {
            r: 48
        }
    }, 0)
    .to('.tapeL', 4, {
        attr: {
            x2: '+=36'
        }
    }, 0)
    .to('.tapeR', 4, {
        attr: {
            x2: '+=35.5'
        }
    }, 0)
    .to('.centerReel', 4, {
        rotation: '-=1440',
        transformOrigin: '50% 50%'
    }, 0)

window.addEventListener("scroll", function () {
    let pageY = window.pageYOffset;
    let main = document.querySelector(".one");
    main.style.backgroundPosition = `-${pageY * 8}px -100px`;
})