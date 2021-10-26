"use strict";

function initScripts() {
	document.removeEventListener('DOMContentLoaded', initScripts);
	@@include('_INIT.js')
	init();
}
document.addEventListener('DOMContentLoaded', initScripts);
