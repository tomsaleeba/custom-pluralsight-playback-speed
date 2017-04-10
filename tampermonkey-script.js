// ==UserScript==
// @name PluralSight custom speeds
// @namespace https://techotom.wordpress.com
// @version 0.2
// @description more fasterer
// @author Tom
// @match https://app.pluralsight.com/player*
// @grant none
// ==/UserScript==

(function() {
    'use strict';

    var console = console || {};
    var className = 'speed-selector';
    function resetBoldness() {
        var speedSelectors = document.getElementsByClassName(className);
        for (var i = 0;i < speedSelectors.length;i++) {
            var curr = speedSelectors[i];
            curr.style.fontWeight = 'normal';
        }
    }

    function appendSpeedControl(div, speed) {
        var speedAnchor = document.createElement("a");
        speedAnchor.style.display = "block";
        speedAnchor.style.cursor = "pointer";
        speedAnchor.onclick = function() {
            localStorage.setItem("playbackRate", (speed));
            document.getElementById('play-control').click();
            document.getElementById('play-control').click();
            resetBoldness();
            this.style.fontWeight = "bold";
        };
        speedAnchor.classList.add('speed-selector');
        var label = document.createTextNode(speed + "x");
        speedAnchor.appendChild(label);
        div.appendChild(speedAnchor);
    }

    var body = document.getElementsByTagName('body')[0];
    var div = document.createElement("div");
    div.style.position = "fixed";
    div.style.margin = "1em";
    div.style.fontSize = "1.5em";
    div.style.background = "#FFF";
    div.style.zIndex = "2";
    div.style.width = "3em";
    div.style.marginTop = "6em";
    div.style.opacity = ".5";
    appendSpeedControl(div, 1);
    appendSpeedControl(div, 1.2);
    appendSpeedControl(div, 1.3);
    appendSpeedControl(div, 1.5);
    appendSpeedControl(div, 1.7);
    appendSpeedControl(div, 1.8);
    appendSpeedControl(div, 2);
    appendSpeedControl(div, 2.1);
    appendSpeedControl(div, 2.2);
    appendSpeedControl(div, 2.5);
    appendSpeedControl(div, 2.7);
    appendSpeedControl(div, 3);
    body.insertBefore(div, body.childNodes[0]);
})();