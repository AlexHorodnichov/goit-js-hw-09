!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o=r("h6c0i");document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements.amount.value,t=+e.currentTarget.elements.step.value;i=+e.currentTarget.elements.delay.value;for(var r=0;r<n;r++)u({position:a,delay:i}).then((function(e){o.Notify.success(e)})).catch((function(e){o.Notify.failure(e)})),i+=t,a+=1;i=0,a=1}));var i=0,a=1;function u(e){var n=e.position,t=e.delay;return new Promise((function(e,r){var o=Math.random()>.3;setTimeout((function(){o&&e("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms")),r("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}),t)}))}}();
//# sourceMappingURL=03-promises.2f9e49ae.js.map
