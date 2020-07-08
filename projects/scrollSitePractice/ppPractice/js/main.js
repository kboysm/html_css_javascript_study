
const project01 = document.querySelector('#project01')
const project02 = document.querySelector('#project02')
const project03 = document.querySelector('#project03')
const intro = document.querySelector(".intro");
// Init ScrollMagic
var controller = new ScrollMagic.Controller();

// pin the intro
var pinIntroScene = new ScrollMagic.Scene({
	triggerElement: intro,
	triggerHook: 0,
	duration: 9000
})
	.addIndicators()
	.setPin(intro)

	.addTo(controller);



// pin again
// var pinIntroScene2 = new ScrollMagic.Scene({
// 	triggerElement: '#project01',
// 	triggerHook: 0.4
// })
// 	.setPin('#intro', { pushFollowers: false })
// 	.addTo(controller);


// $('.project').each(function () {

// 	// build a scene
// 	var ourScene = new ScrollMagic.Scene({
// 		triggerElement: this.children[0],
// 		triggerHook: 0.9
// 	})
// 		.setClassToggle(this, 'fade-in') // add class to project01
// 		.addIndicators({
// 			name: 'fade scene',
// 			colorTrigger: 'black',
// 			colorStart: '#75C695',
// 			colorEnd: 'pink'
// 		}) // this requires a plugin
// 		.addTo(controller);

// });




















