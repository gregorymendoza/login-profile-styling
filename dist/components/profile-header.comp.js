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
			var template = '\n\t\t\t<style>\n\t\t\t\t@import "/dist/css/general.css"\n\t\t\t</style>\n\t\t\t<style>\n\t\t\t\t.profile__header {\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tbackground-color: #fff;\n\t\t\t\t\tpadding: 22px 22px 20px;\n\t\t\t\t}\n\n\t\t\t\t.profile__header__logout {\n\t\t\t\t\tfloat: right;\n\t\t\t\t\tbackground-color: transparent;\n\t\t\t\t\tborder: 1px solid #007ee5;\n\t\t\t\t\tborder-radius: 3px;\n\t\t\t\t\tfont-size: 12px;\n\t\t\t\t\tcolor: #007ee5;\n\t\t\t\t\ttext-transform: uppercase;\n\t\t\t\t\tpadding: 7px 21px 6px;\n\t\t\t\t}\n\n\t\t\t\t.profile__header__cover__upload {\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tdisplay: table;\n\t\t\t\t\tborder: 1px solid #d0dce7;\n\t\t\t\t\tborder-radius: 3px;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tpadding: 2px 18px 2px 17px;\n\t\t\t\t\tmargin: 60px auto 0;\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t}\n\n\t\t\t\t.profile__header__cover__upload__title {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\tfont-size: 15px;\n\t\t\t\t\tcolor: #727e88;\n\t\t\t\t}\n\n\t\t\t\t.profile__header__cover__upload__title i {\n\t\t\t\t\tfont-size: 28px;\n\t\t\t\t\tcolor: #d0dce7;\n\t\t\t\t\tmargin-right: 20px;\n\t\t\t\t}\n\n\t\t\t\t.profile__header__cover__upload__input {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tright: 0;\n\t\t\t\t\tbottom: 0;\n\t\t\t\t\toutline: none;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\theight: 100px;\n\t\t\t\t}\n\n\t\t\t\t.profile__header__avatar {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tbackground: url(/dist/img/profile_image.jpg) no-repeat 67% 0;\n\t\t\t\t\tbox-shadow: 0px 1px 24px 0px rgba(189, 196, 201, 0.7);\n\t\t\t\t\twidth: 171px;\n\t\t\t\t\theight: 171px;\n\t\t\t\t\tleft: 22px;\n\t\t\t\t\tbottom: -36px;\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t}\n\n\t\t\t\t.profile__header__info {\n\t\t\t\t\tpadding-left: 200px;\n\t\t\t\t\tmargin-top: 22px;\n\t\t\t\t}\n\n\t\t\t\t.profile__header__info__summary {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t}\n\n\t\t\t\t.profile__header__info__summary__title {\n\t\t\t\t\tfont-size: 20px;\n\t\t\t\t\tcolor: #3f454a;\n\t\t\t\t\tmargin-bottom: 10px;\n\t\t\t\t}\n\n\t\t\t\t.profile__header__info__summary__contact li {\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tfont-size: 14px;\n\t\t\t\t\tcolor: #3f454a;\n\t\t\t\t\tmargin-bottom: 10px;\n\t\t\t\t}\n\n\t\t\t\t.profile__header__info__summary__contact li div {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t}\n\n\t\t\t\t.profile__header__info__summary__contact li div i {\n\t\t\t\t\tfont-size: 22px;\n\t\t\t\t\tcolor: #a8b8c4;\n\t\t\t\t\tmargin-right: 10px;\n\t\t\t\t}\n\n\t\t\t\t.profile__header__info__summary__contact li a {\n\t\t\t\t\tcolor: #3f454a;\n\t\t\t\t}\n\n\t\t\t\t.profile__header__info__summary__contact li:last-of-type {\n\t\t\t\t\tmargin-bottom: 0;\n\t\t\t\t}\n\n\t\t\t\t.profile__header__info__rating {\n\t\t\t\t\tfloat: right;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t}\n\n\t\t\t\t.profile__header__info__rating li {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tmargin-left: 7px;\n\t\t\t\t}\n\n\t\t\t\t.profile__header__info__rating li i {\n\t\t\t\t\tfont-size: 24px;\n\t\t\t\t\tcolor: #727e88;\n\t\t\t\t}\n\n\t\t\t\t.profile__header__info__rating li:last-of-type {\n\t\t\t\t\tfont-size: 13px;\n\t\t\t\t\tcolor: #a6b0b7;\n\t\t\t\t}\n\n\t\t\t\t.profile__header__info__rating li:last-of-type span {\n\t\t\t\t\tmargin: 0 16px 0 24px;\n\t\t\t\t}\n\t\t\t</style>\n\t\t\t<header class="profile__header">\n\t\t\t\t<a href="#" class="profile__header__logout"><strong>Log Out</strong></a>\n\n\t\t\t\t<div class="profile__header__cover__upload">\n\t\t\t\t\t<div class="profile__header__cover__upload__title"><i class="ion-ios-camera"></i>Upload Cover Image</div>\n\t\t\t\t\t<input type="file" name="upload" class="profile__header__cover__upload__input">\n\t\t\t\t</div>\n\n\t\t\t\t<div class="profile__header__avatar"></div>\n\n\t\t\t\t<div class="profile__header__info">\n\t\t\t\t\t<div class="profile__header__info__summary">\n\t\t\t\t\t\t<h3 class="profile__header__info__summary__title">Jessica Parker</h3>\n\t\t\t\t\t\t<ul class="profile__header__info__summary__contact">\n\t\t\t\t\t\t\t<li><div><i class="ion-ios-location-outline"></i>Newport Beach, CA</div></li>\n\t\t\t\t\t\t\t<li><div><i class="ion-ios-telephone-outline"></i><a href="tel:94932568594">(949) 325 - 68594</a></div></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class="profile__header__info__rating">\n\t\t\t\t\t\t<li><i class="ion-android-star"></i></li>\n\t\t\t\t\t\t<li><i class="ion-android-star"></i></li>\n\t\t\t\t\t\t<li><i class="ion-android-star"></i></li>\n\t\t\t\t\t\t<li><i class="ion-android-star"></i></li>\n\t\t\t\t\t\t<li><i class="ion-android-star-outline"></i></li>\n\t\t\t\t\t\t<li><span>6</span>Reviews</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</header>\n\t\t';

			this.shadow.innerHTML = template;
		}
	}]);

	return ProfileHeader;
}(HTMLElement);

window.customElements.define('profile-header', ProfileHeader);
