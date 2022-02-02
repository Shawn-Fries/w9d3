/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {

class FollowToggle  {
    // const $el = $('.follow-toggle');

    constructor (el) {
        this.$el = $(el);
        this.userId = this.$el.data("user-id");
        if (this.$el.data("initial-follow-state") === true) {
            this.followState = "followed";
        } else {
            this.followState = "unfollowed";
        };        
        this.render();
    }

    render() {
        if (this.followState === "followed") {
            this.$el.text(`Unfollow!`);
            // el.value.append($`("Follow!")`);
        } else if (this.followState === "unfollowed") {
            this.$el.text(`Follow!`);
            // el.value.append($`("Unfollow!")`);
        };
    };

    handleClick() {
        $('.follow-toggle').on('submit', e => {
            e.preventDefault();
            if (this.followState === "followed") {
                actions[unfollow]();
            } else {
                actions[follow](this);
            }
        })
    }
};

const actions = {
    follow: function (userArgs) {
        return $.ajax({
            method: 'POST',
            url: '/users',
            data: {
                user: userArgs
            },
            dataType: 'JSON'
        })
    },

    unfollow: function () {
        return $.ajax({
            method: 'DELETE',
            url: '/users',
            data: {
                user: userArgs
            },
            dataType: 'JSON'
        })
    }
}

module.exports = FollowToggle;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js")



$(function () {
    $("button.follow-toggle").each((id, ele) => new FollowToggle(ele))
});


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map