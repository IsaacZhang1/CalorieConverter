
/* *     Copyright (C) 2010-2016 Marvell International Ltd. *     Copyright (C) 2002-2010 Kinoma, Inc. * *     Licensed under the Apache License, Version 2.0 (the "License"); *     you may not use this file except in compliance with the License. *     You may obtain a copy of the License at * *      http://www.apache.org/licenses/LICENSE-2.0 * *     Unless required by applicable law or agreed to in writing, software *     distributed under the License is distributed on an "AS IS" BASIS, *     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *     See the License for the specific language governing permissions and *     limitations under the License. */

/* Create background */let whiteSkin = new Skin({ fill: "white" });
let yellowSkin = new Skin({ fill: "yellow" });let bigText = new Style({ font: "bold 12px", color: "#333333" });

var MainContainer = new Column({left: 0, right: 0, top: 0, bottom: 0, skin: yellowSkin});
application.add(MainContainer);

/* Sliders */
import {    HorizontalSlider, HorizontalSliderBehavior} from 'sliders';

var spaghettiCount;
var bananaCount;
var macCount;
var breadCount;
var thaiCount;
var bobaCount;
var frapCount;let spaghettiSlider = HorizontalSlider.template($ => ({    height: 50, left: 70, right: 70,    Behavior: class extends HorizontalSliderBehavior {        onValueChanged(container) {            trace("Value is: " + this.data.value + "\n");
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


    }}));let sliderContainer1 = new Container({    left: -60, right: 110, top: -190, bottom: 0,    contents: [        new spaghettiSlider({ min: 0, max: 100, value: 0 })    ],
});application.add(sliderContainer1);

let bananaSlider = HorizontalSlider.template($ => ({    height: 50, left: 70, right: 70,    Behavior: class extends HorizontalSliderBehavior {        onValueChanged(container) {            trace("Value is: " + this.data.value + "\n");
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
        	
        }    }}));

let sliderContainer2 = new Container({    left: -60, right: 110, top: -125, bottom: 0,    contents: [        new bananaSlider({ min: 0, max: 100, value: 0 })    ]});application.add(sliderContainer2);


let macSlider = HorizontalSlider.template($ => ({    height: 50, left: 70, right: 70,    Behavior: class extends HorizontalSliderBehavior {        onValueChanged(container) {            trace("Value is: " + this.data.value + "\n");
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
        }    }}));

let sliderContainer3 = new Container({    left: -60, right: 110, top: -55, bottom: 0,    contents: [        new macSlider({ min: 0, max: 100, value: 0 })    ]});application.add(sliderContainer3);


let breadSlider = HorizontalSlider.template($ => ({    height: 50, left: 70, right: 70,    Behavior: class extends HorizontalSliderBehavior {        onValueChanged(container) {            trace("Value is: " + this.data.value + "\n");            breadCount.string = this.data.value.toString();
            breadCalorie.string = (this.data.value*79).toString();
                    	macCalorie.string = (this.data.value*79).toString();
        	bananaCalorie.string = (this.data.value*79).toString();
        	spaghettiCalorie.string = (this.data.value*79).toString();
        	thaiCalorie.string = (this.data.value*79).toString();
        	bobaCalorie.string = (this.data.value*79).toString();
        	frapCalorie.string = (this.data.value*79).toString();
        	
        	        	spaghettiCount.string = (Math.round((this.data.value*79/600)*100)/100).toString();
        	bananaCount.string = (Math.round((this.data.value*79/105)*100)/100).toString();
        	macCount.string = (Math.round((this.data.value*79/563)*100)/100).toString();
        	thaiCount.string = (Math.round((this.data.value*79/889)*100)/100).toString();
        	bobaCount.string = (Math.round((this.data.value*79/316)*100)/100).toString();
        	frapCount.string = (Math.round((this.data.value*79/420)*100)/100).toString();        }    }}));

let sliderContainer4 = new Container({    left: -60, right: 110, top: 15, bottom: 0,    contents: [        new breadSlider({ min: 0, max: 100, value: 0 })    ]});application.add(sliderContainer4);

let thaiSlider = HorizontalSlider.template($ => ({    height: 50, left: 70, right: 70,    Behavior: class extends HorizontalSliderBehavior {        onValueChanged(container) {            trace("Value is: " + this.data.value + "\n");            thaiCount.string = this.data.value.toString();
            thaiCalorie.string = (this.data.value*889).toString();
                    	breadCalorie.string = (this.data.value*889).toString();        	macCalorie.string = (this.data.value*889).toString();
        	bananaCalorie.string = (this.data.value*889).toString();
        	spaghettiCalorie.string = (this.data.value*889).toString();
        	bobaCalorie.string = (this.data.value*889).toString();
        	frapCalorie.string = (this.data.value*889).toString();
        	
        	        	spaghettiCount.string = (Math.round((this.data.value*889/600)*100)/100).toString();
        	bananaCount.string = (Math.round((this.data.value*889/105)*100)/100).toString();
        	macCount.string = (Math.round((this.data.value*889/563)*100)/100).toString();
        	breadCount.string = (Math.round((this.data.value*889/79)*100)/100).toString();
        	bobaCount.string = (Math.round((this.data.value*889/316)*100)/100).toString();
        	frapCount.string = (Math.round((this.data.value*889/420)*100)/100).toString();        }    }    }));

let sliderContainer5 = new Container({    left: -60, right: 110, top: 85, bottom: 0,    contents: [        new thaiSlider({ min: 0, max: 100, value: 0 })    ]});application.add(sliderContainer5);

let bobaSlider = HorizontalSlider.template($ => ({    height: 50, left: 70, right: 70,    Behavior: class extends HorizontalSliderBehavior {        onValueChanged(container) {            trace("Value is: " + this.data.value + "\n");            bobaCount.string = this.data.value.toString();
            bobaCalorie.string = (this.data.value*316).toString();
                    	breadCalorie.string = (this.data.value*316).toString();          	macCalorie.string = (this.data.value*316).toString();        	bananaCalorie.string = (this.data.value*316).toString();        	spaghettiCalorie.string = (this.data.value*316).toString();        	thaiCalorie.string = (this.data.value*316).toString();        	frapCalorie.string = (this.data.value*316).toString();
        	
        	        	spaghettiCount.string = (Math.round((this.data.value*316/600)*100)/100).toString();
        	bananaCount.string = (Math.round((this.data.value*316/105)*100)/100).toString();
        	macCount.string = (Math.round((this.data.value*316/563)*100)/100).toString();
        	breadCount.string = (Math.round((this.data.value*316/79)*100)/100).toString();
        	thaiCount.string = (Math.round((this.data.value*316/889)*100)/100).toString();
        	frapCount.string = (Math.round((this.data.value*316/420)*100)/100).toString();        }    }    }));

let sliderContainer6 = new Container({    left: -60, right: 110, top:160, bottom: 0,    contents: [        new bobaSlider({ min: 0, max: 100, value: 0 })    ]});application.add(sliderContainer6);

let frapSlider = HorizontalSlider.template($ => ({    height: 50, left: 70, right: 70,    Behavior: class extends HorizontalSliderBehavior {        onValueChanged(container) {	            trace("Value is: " + this.data.value + "\n");            frapCount.string = this.data.value.toString();
            frapCalorie.string = (this.data.value*420).toString();
                    	bobaCalorie.string = (this.data.value*420).toString();        	breadCalorie.string = (this.data.value*420).toString();          	macCalorie.string = (this.data.value*420).toString();        	bananaCalorie.string = (this.data.value*420).toString();        	spaghettiCalorie.string = (this.data.value*420).toString();        	thaiCalorie.string = (this.data.value*420).toString();
        	
        	        	spaghettiCount.string = (Math.round((this.data.value*420/600)*100)/100).toString();
        	bananaCount.string = (Math.round((this.data.value*420/105)*100)/100).toString();
        	macCount.string = (Math.round((this.data.value*420/563)*100)/100).toString();
        	breadCount.string = (Math.round((this.data.value*420/79)*100)/100).toString();
        	thaiCount.string = (Math.round((this.data.value*420/889)*100)/100).toString();
        	bobaCount.string = (Math.round((this.data.value*420/316)*100)/100).toString();        }    }    }));

let sliderContainer7 = new Container({    left: -60, right: 110, top: 220, bottom: 0,    contents: [        new frapSlider({ min: 0, max: 100, value: 0 })    ]});application.add(sliderContainer7);

var MyLabel = Label.template(function($) { return {    left: 0, right: 0, string: $ }});

var MyHeader = Container.template(function($) { return {    left: 50, right:180, top: 0, height:40,    contents: [        new MyLabel($.title)    ]}});application.add(new MyHeader({ title: "five" }));







var spaghetti = new Text({ left: -230, right: 0, top: 0, bottom: 0, string: "Plate of Spaghetti" });application.add(spaghetti);
spaghettiCount = new Text({ left: 70, right: 0, top: 0, bottom: 0, string: "" });application.add(spaghettiCount);
var spaghettiCalorie = new Text({ left: 250, right: 0, top: 0, bottom: 0, string: "" });application.add(spaghettiCalorie);
var banana = new Text({ left: -275, right: 0, top: 35, bottom: 0, string: "Banana" });application.add(banana);
bananaCount = new Text({ left: 70, right: 0, top: 35, bottom: 0, string: "" });application.add(bananaCount);
var bananaCalorie = new Text({ left: 250, right: 0, top: 35, bottom: 0, string: "" });application.add(bananaCalorie);var bigMac = new Text({ left: -275, right: 0, top: 70, bottom: 0, string: "Big Mac" });application.add(bigMac);
macCount = new Text({ left: 70, right: 0, top: 70, bottom: 0, string: "" });application.add(macCount);
var macCalorie = new Text({ left: 250, right: 0, top: 70, bottom: 0, string: "" });application.add(macCalorie);var bread = new Text({ left: -250, right: 0, top: 105, bottom: 0, string: "Slice of Bread" });application.add(bread);
breadCount = new Text({ left: 70, right: 0, top: 105, bottom: 0, string: "" });application.add(breadCount);
var breadCalorie = new Text({ left: 250, right: 0, top: 105, bottom: 0, string: "" });application.add(breadCalorie);var padThai = new Text({ left: -235, right: 0, top: 140, bottom: 0, string: "Plate of Pad Thai" });application.add(padThai);
thaiCount = new Text({ left: 70, right: 0, top: 140, bottom: 0, string: "" });application.add(thaiCount);
var thaiCalorie = new Text({ left: 250, right: 0, top: 140, bottom: 0, string: "" });application.add(thaiCalorie);var boba = new Text({ left: -220, right: 0, top: 175, bottom: 0, string: " Boba with grass jelly" });application.add(boba);
bobaCount = new Text({ left: 70, right: 0, top: 175, bottom: 0, string: "" });application.add(bobaCount);
var bobaCalorie = new Text({ left: 250, right: 0, top: 175, bottom: 0, string: "" });application.add(bobaCalorie);var frap = new Text({ left: -215, right: 0, top:210, bottom: 0, string: "Caramel frappuccino" });application.add(frap);
frapCount = new Text({ left: 70, right: 0, top: 210, bottom: 0, string: "" });application.add(frapCount);
var frapCalorie = new Text({ left: 250, right: 0, top: 210, bottom: 0, string: "" });application.add(frapCalorie);


var count = new Text({ left: 70, right: 0, top:225, bottom: 0, string: "amount" });application.add(count);

var calorie = new Text({ left: 0, right: -250, top:225, bottom: 0, string: "calories" });application.add(calorie);

