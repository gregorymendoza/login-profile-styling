class ProfileHeader extends HTMLElement {
	constructor() {
		super();

		this.shadow = this.createShadowRoot();
	}

	connectedCallback() {
		let template = `
			<style>
				@import "/dist/css/profile-header.css"
			</style>
			<header class="header">

				<a href="#" class="header__btn-logout"><strong>Log Out</strong></a>

				<div class="header-info__avatar"></div>

				<div class="header__cover-upload">
					<div class="header__cover-upload__label"><i class="ion-ios-camera"></i>Upload Cover Image</div>
					<input type="file" name="upload" class="header__cover-upload__input">
				</div>

				<div class="header-info">
					<div class="header-info__summary">
						<h3 class="header-info__summary__title">Jessica Parker</h3>
						<ul class="header-info__summary__contact">
							<li><div><i class="ion-ios-location-outline"></i>Newport Beach, CA</div></li>
							<li><div><i class="ion-ios-telephone-outline"></i><a href="tel:94932568594">(949) 325 - 68594</a></div></li>
						</ul>
					</div>
					<ul class="header-info__rating">
						<li><i class="ion-android-star"></i></li>
						<li><i class="ion-android-star"></i></li>
						<li><i class="ion-android-star"></i></li>
						<li><i class="ion-android-star"></i></li>
						<li><i class="ion-android-star-outline"></i></li>
						<li><span>6</span>Reviews</li>
					</ul>
				</div>

				<div class="header__followers">
					<i class="ion-android-add-circle"></i>
					<div><span>15</span> Followers</div>
				</div>

			</header>
		`;

		this.shadow.innerHTML = template;
	}
}

window.customElements.define('profile-header', ProfileHeader);