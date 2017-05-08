'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProfileHeader = function (_HTMLElement) {
	_inherits(ProfileHeader, _HTMLElement);

	function ProfileHeader() {
		_classCallCheck(this, ProfileHeader);

		var _this = _possibleConstructorReturn(this, (ProfileHeader.__proto__ || Object.getPrototypeOf(ProfileHeader)).call(this));

		_this.shadow = _this.createShadowRoot();
		return _this;
	}

	_createClass(ProfileHeader, [{
		key: 'connectedCallback',
		value: function connectedCallback() {
			var template = '\n\t\t\t<style>\n\t\t\t\t@import "/dist/css/profile-header.css"\n\t\t\t</style>\n\t\t\t<header class="header">\n\n\t\t\t\t<a href="#" class="header__btn-logout"><strong>Log Out</strong></a>\n\n\t\t\t\t<div class="header__cover-upload">\n\t\t\t\t\t<div class="header__cover-upload__label"><i class="ion-ios-camera"></i>Upload Cover Image</div>\n\t\t\t\t\t<input type="file" name="upload" class="header__cover-upload__input">\n\t\t\t\t</div>\n\n\t\t\t\t<div class="header-info">\n\t\t\t\t\t<div class="header-info__avatar"></div>\n\t\t\t\t\t<div class="header-info__summary">\n\t\t\t\t\t\t<h3 class="header-info__summary__title">Jessica Parker</h3>\n\t\t\t\t\t\t<ul class="header-info__summary__contact">\n\t\t\t\t\t\t\t<li><div><i class="ion-ios-location-outline"></i>Newport Beach, CA</div></li>\n\t\t\t\t\t\t\t<li><div><i class="ion-ios-telephone-outline"></i><a href="tel:94932568594">(949) 325 - 68594</a></div></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class="header-info__rating">\n\t\t\t\t\t\t<li><i class="ion-android-star"></i></li>\n\t\t\t\t\t\t<li><i class="ion-android-star"></i></li>\n\t\t\t\t\t\t<li><i class="ion-android-star"></i></li>\n\t\t\t\t\t\t<li><i class="ion-android-star"></i></li>\n\t\t\t\t\t\t<li><i class="ion-android-star-outline"></i></li>\n\t\t\t\t\t\t<li><span>6</span>Reviews</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="header__followers">\n\t\t\t\t\t<i class="ion-android-add-circle"></i>\n\t\t\t\t\t<div><span>15</span> Followers</div>\n\t\t\t\t</div>\n\n\t\t\t</header>\n\t\t';

			this.shadow.innerHTML = template;
		}
	}]);

	return ProfileHeader;
}(HTMLElement);

window.customElements.define('profile-header', ProfileHeader);
