(function (global) {
    'use strict';

    const nonce = window['dfBootstrapNonce'];

    let policy = { createScriptURL: url => url };
    if (global.trustedTypes) {
        policy = global.trustedTypes.createPolicy('dialogflow#messenger', policy);
    }

    var MESSENGER_URL =
        'scripts/main.js';

    var loadDfMessenger = function () {
        var elementScript = document.createElement('script');
        elementScript.addEventListener('load', onMessengerLoaded, false);
        elementScript.src = policy.createScriptURL(MESSENGER_URL);
        if (nonce) {
            elementScript.setAttribute('nonce', nonce);
        }
        global.document.body.insertBefore(elementScript, null);
    };

    var onMessengerLoaded = function () {
        window.dispatchEvent(new Event('dfMessengerLoaded'))
    };

    const loadWhenReady = function () {
        if (global.document.readyState === "loading") {
            global.document.addEventListener('DOMContentLoaded', loadDfMessenger);
        } else {
            loadDfMessenger();
        }
    };

    loadWhenReady();
})(window);
