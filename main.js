
/*

/* Create background */
let yellowSkin = new Skin({ fill: "yellow" });

var MainContainer = new Column({left: 0, right: 0, top: 0, bottom: 0, skin: yellowSkin});
application.add(MainContainer);

/* Sliders */
import {

var spaghettiCount;
var bananaCount;
var macCount;
var breadCount;
var thaiCount;
var bobaCount;
var frapCount;
            spaghettiCount.string = this.data.value.toString();
            spaghettiCalorie.string = (this.data.value*600).toString();
            
        	bananaCalorie.string = (this.data.value*600).toString();
        	macCalorie.string = (this.data.value*600).toString();
        	breadCalorie.string = (this.data.value*600).toString();
        	thaiCalorie.string = (this.data.value*600).toString();
        	bobaCalorie.string = (this.data.value*600).toString();
        	frapCalorie.string = (this.data.value*600).toString();
        	

        	bananaCount.string = (Math.round((this.data.value*600/105)*100)/100).toString();
        	macCount.string = (Math.round((this.data.value*600/563)*100)/100).toString();
        	breadCount.string = (Math.round((this.data.value*600/79)*100)/100).toString();
        	thaiCount.string = (Math.round((this.data.value*600/889)*100)/100).toString();
        	bobaCount.string = (Math.round((this.data.value*600/316)*100)/100).toString();
        	frapCount.string = (Math.round((this.data.value*600/420)*100)/100).toString();
        	

        }





let bananaSlider = HorizontalSlider.template($ => ({
            bananaCount.string = this.data.value.toString();
            bananaCalorie.string = (this.data.value*105).toString();
            
        	spaghettiCalorie.string = (this.data.value*105).toString();
        	macCalorie.string = (this.data.value*105).toString();
        	breadCalorie.string = (this.data.value*105).toString();
        	thaiCalorie.string = (this.data.value*105).toString();
        	bobaCalorie.string = (this.data.value*105).toString();
        	frapCalorie.string = (this.data.value*105).toString();
        	
        	
        	spaghettiCount.string = (Math.round((this.data.value*105/600)*100)/100).toString();
        	macCount.string = (Math.round((this.data.value*105/563)*100)/100).toString();
        	breadCount.string = (Math.round((this.data.value*105/79)*100)/100).toString();
        	thaiCount.string = (Math.round((this.data.value*105/889)*100)/100).toString();
        	bobaCount.string = (Math.round((this.data.value*105/316)*100)/100).toString();
        	frapCount.string = (Math.round((this.data.value*105/420)*100)/100).toString();
        	
        }

let sliderContainer2 = new Container({


let macSlider = HorizontalSlider.template($ => ({
            macCount.string = this.data.value.toString();
            macCalorie.string = (this.data.value*563).toString();
            
        	bananaCalorie.string = (this.data.value*563).toString();
        	spaghettiCalorie.string = (this.data.value*563).toString();
        	breadCalorie.string = (this.data.value*563).toString();
        	thaiCalorie.string = (this.data.value*563).toString();
        	bobaCalorie.string = (this.data.value*563).toString();
        	frapCalorie.string = (this.data.value*563).toString();
        	
        	
        	spaghettiCount.string = (Math.round((this.data.value*563/600)*100)/100).toString();
        	bananaCount.string = (Math.round((this.data.value*563/105)*100)/100).toString();
        	breadCount.string = (Math.round((this.data.value*563/79)*100)/100).toString();
        	thaiCount.string = (Math.round((this.data.value*563/889)*100)/100).toString();
        	bobaCount.string = (Math.round((this.data.value*563/316)*100)/100).toString();
        	frapCount.string = (Math.round((this.data.value*563/420)*100)/100).toString();
        }

let sliderContainer3 = new Container({


let breadSlider = HorizontalSlider.template($ => ({
            breadCalorie.string = (this.data.value*79).toString();
            
        	bananaCalorie.string = (this.data.value*79).toString();
        	spaghettiCalorie.string = (this.data.value*79).toString();
        	thaiCalorie.string = (this.data.value*79).toString();
        	bobaCalorie.string = (this.data.value*79).toString();
        	frapCalorie.string = (this.data.value*79).toString();
        	
        	
        	bananaCount.string = (Math.round((this.data.value*79/105)*100)/100).toString();
        	macCount.string = (Math.round((this.data.value*79/563)*100)/100).toString();
        	thaiCount.string = (Math.round((this.data.value*79/889)*100)/100).toString();
        	bobaCount.string = (Math.round((this.data.value*79/316)*100)/100).toString();
        	frapCount.string = (Math.round((this.data.value*79/420)*100)/100).toString();

let sliderContainer4 = new Container({

let thaiSlider = HorizontalSlider.template($ => ({
            thaiCalorie.string = (this.data.value*889).toString();
            
        	bananaCalorie.string = (this.data.value*889).toString();
        	spaghettiCalorie.string = (this.data.value*889).toString();
        	bobaCalorie.string = (this.data.value*889).toString();
        	frapCalorie.string = (this.data.value*889).toString();
        	
        	
        	bananaCount.string = (Math.round((this.data.value*889/105)*100)/100).toString();
        	macCount.string = (Math.round((this.data.value*889/563)*100)/100).toString();
        	breadCount.string = (Math.round((this.data.value*889/79)*100)/100).toString();
        	bobaCount.string = (Math.round((this.data.value*889/316)*100)/100).toString();
        	frapCount.string = (Math.round((this.data.value*889/420)*100)/100).toString();

let sliderContainer5 = new Container({

let bobaSlider = HorizontalSlider.template($ => ({
            bobaCalorie.string = (this.data.value*316).toString();
            
        	
        	
        	bananaCount.string = (Math.round((this.data.value*316/105)*100)/100).toString();
        	macCount.string = (Math.round((this.data.value*316/563)*100)/100).toString();
        	breadCount.string = (Math.round((this.data.value*316/79)*100)/100).toString();
        	thaiCount.string = (Math.round((this.data.value*316/889)*100)/100).toString();
        	frapCount.string = (Math.round((this.data.value*316/420)*100)/100).toString();

let sliderContainer6 = new Container({

let frapSlider = HorizontalSlider.template($ => ({
            frapCalorie.string = (this.data.value*420).toString();
            
        	
        	
        	bananaCount.string = (Math.round((this.data.value*420/105)*100)/100).toString();
        	macCount.string = (Math.round((this.data.value*420/563)*100)/100).toString();
        	breadCount.string = (Math.round((this.data.value*420/79)*100)/100).toString();
        	thaiCount.string = (Math.round((this.data.value*420/889)*100)/100).toString();
        	bobaCount.string = (Math.round((this.data.value*420/316)*100)/100).toString();

let sliderContainer7 = new Container({

var MyLabel = Label.template(function($) { return {

var MyHeader = Container.template(function($) { return {







var spaghetti = new Text({ left: -230, right: 0, top: 0, bottom: 0, string: "Plate of Spaghetti" });
spaghettiCount = new Text({ left: 70, right: 0, top: 0, bottom: 0, string: "" });
var spaghettiCalorie = new Text({ left: 250, right: 0, top: 0, bottom: 0, string: "" });

bananaCount = new Text({ left: 70, right: 0, top: 35, bottom: 0, string: "" });
var bananaCalorie = new Text({ left: 250, right: 0, top: 35, bottom: 0, string: "" });
macCount = new Text({ left: 70, right: 0, top: 70, bottom: 0, string: "" });
var macCalorie = new Text({ left: 250, right: 0, top: 70, bottom: 0, string: "" });
breadCount = new Text({ left: 70, right: 0, top: 105, bottom: 0, string: "" });
var breadCalorie = new Text({ left: 250, right: 0, top: 105, bottom: 0, string: "" });
thaiCount = new Text({ left: 70, right: 0, top: 140, bottom: 0, string: "" });
var thaiCalorie = new Text({ left: 250, right: 0, top: 140, bottom: 0, string: "" });
bobaCount = new Text({ left: 70, right: 0, top: 175, bottom: 0, string: "" });
var bobaCalorie = new Text({ left: 250, right: 0, top: 175, bottom: 0, string: "" });
frapCount = new Text({ left: 70, right: 0, top: 210, bottom: 0, string: "" });
var frapCalorie = new Text({ left: 250, right: 0, top: 210, bottom: 0, string: "" });


var count = new Text({ left: 70, right: 0, top:225, bottom: 0, string: "amount" });

var calorie = new Text({ left: 0, right: -250, top:225, bottom: 0, string: "calories" });

