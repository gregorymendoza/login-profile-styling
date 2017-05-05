class ProfileHeader extends HTMLElement {
	constructor() {
		super();

		this.shadow = this.createShadowRoot();
	}

	connectedCallback() {
		let template = `
			<style>
				@import "/dist/css/general.css"
			</style>
			<style>
				.profile__header {
					position: relative;
					background-color: #fff;
					padding: 22px 22px 20px;
				}

				.profile__header__logout {
					float: right;
					background-color: transparent;
					border: 1px solid #007ee5;
					border-radius: 3px;
					font-size: 12px;
					color: #007ee5;
					text-transform: uppercase;
					padding: 7px 21px 6px;
				}

				.profile__header__cover__upload {
					position: relative;
					display: table;
					border: 1px solid #d0dce7;
					border-radius: 3px;
					cursor: pointer;
					text-align: center;
					padding: 2px 18px 2px 17px;
					margin: 60px auto 0;
					overflow: hidden;
				}

				.profile__header__cover__upload__title {
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 15px;
					color: #727e88;
				}

				.profile__header__cover__upload__title i {
					font-size: 28px;
					color: #d0dce7;
					margin-right: 20px;
				}

				.profile__header__cover__upload__input {
					position: absolute;
					right: 0;
					bottom: 0;
					outline: none;
					cursor: pointer;
					height: 100px;
				}

				.profile__header__avatar {
					position: absolute;
					background: url(/dist/img/profile_image.jpg) no-repeat 67% 0;
					box-shadow: 0px 1px 24px 0px rgba(189, 196, 201, 0.7);
					width: 171px;
					height: 171px;
					left: 22px;
					bottom: -36px;
					overflow: hidden;
				}

				.profile__header__info {
					padding-left: 200px;
					margin-top: 22px;
				}

				.profile__header__info__summary {
					display: inline-block;
				}

				.profile__header__info__summary__title {
					font-size: 20px;
					color: #3f454a;
					margin-bottom: 10px;
				}

				.profile__header__info__summary__contact li {
					position: relative;
					font-size: 14px;
					color: #3f454a;
					margin-bottom: 10px;
				}

				.profile__header__info__summary__contact li div {
					display: flex;
					align-items: center;
				}

				.profile__header__info__summary__contact li div i {
					font-size: 22px;
					color: #a8b8c4;
					margin-right: 10px;
				}

				.profile__header__info__summary__contact li a {
					color: #3f454a;
				}

				.profile__header__info__summary__contact li:last-of-type {
					margin-bottom: 0;
				}

				.profile__header__info__rating {
					float: right;
					display: flex;
					align-items: center;
				}

				.profile__header__info__rating li {
					display: inline-block;
					margin-left: 7px;
				}

				.profile__header__info__rating li i {
					font-size: 24px;
					color: #727e88;
				}

				.profile__header__info__rating li:last-of-type {
					font-size: 13px;
					color: #a6b0b7;
				}

				.profile__header__info__rating li:last-of-type span {
					margin: 0 16px 0 24px;
				}
			</style>
			<header class="profile__header">
				<a href="#" class="profile__header__logout"><strong>Log Out</strong></a>

				<div class="profile__header__cover__upload">
					<div class="profile__header__cover__upload__title"><i class="ion-ios-camera"></i>Upload Cover Image</div>
					<input type="file" name="upload" class="profile__header__cover__upload__input">
				</div>

				<div class="profile__header__avatar"></div>

				<div class="profile__header__info">
					<div class="profile__header__info__summary">
						<h3 class="profile__header__info__summary__title">Jessica Parker</h3>
						<ul class="profile__header__info__summary__contact">
							<li><div><i class="ion-ios-location-outline"></i>Newport Beach, CA</div></li>
							<li><div><i class="ion-ios-telephone-outline"></i><a href="tel:94932568594">(949) 325 - 68594</a></div></li>
						</ul>
					</div>
					<ul class="profile__header__info__rating">
						<li><i class="ion-android-star"></i></li>
						<li><i class="ion-android-star"></i></li>
						<li><i class="ion-android-star"></i></li>
						<li><i class="ion-android-star"></i></li>
						<li><i class="ion-android-star-outline"></i></li>
						<li><span>6</span>Reviews</li>
					</ul>
				</div>
			</header>
		`;

		this.shadow.innerHTML = template;
	}
}

window.customElements.define('profile-header', ProfileHeader);