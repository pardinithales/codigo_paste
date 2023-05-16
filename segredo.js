// ==UserScript==
// @name         Solução deinitiva para o BO
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://intranet4.hcrp.usp.br/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=repl.co
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('paste', function (event) {
        event.stopPropagation();
    }, true);

    document.addEventListener('drop', function (event) {
        event.stopPropagation();
    }, true);
})();
