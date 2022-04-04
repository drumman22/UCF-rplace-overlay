// ==UserScript==
// @name         UCF r/place overlay
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  overlay colors over r/place
// @author       alifurkany
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
const w = 2000;
const h = 2000;
const img = "https://cdn.discordapp.com/attachments/237345537328807936/960405955382747146/ucf_place_overlay.png";
if (window.top !== window.self) {
	window.addEventListener(
		"load",
		() => {
			document
				.getElementsByTagName("mona-lisa-embed")[0]
				.shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0]
				.shadowRoot.children[0].appendChild(
					(function () {
						const i = document.createElement("img");
						i.style = `width: ${w}px;height: ${h};position: absolute;left: 0;top: 0;image-rendering: pixelated;`;
						i.src = img;
						return i;
					})()
				);
		},
		false
	);
}
