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
			<header class="profile__header">
				<div class="profile__header__top">
					<a href="#" class="profile__header__logout"><strong>Log Out</strong></a>

					<div class="profile__header__cover__upload">
						<div class="profile__header__cover__upload__title"><i class="ion-ios-camera"></i>Upload Cover Image</div>
						<input type="file" name="upload" class="profile__header__cover__upload__input">
					</div>

					<div class="profile__header__info">
						<div class="profile__header__info__avatar"></div>
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
				</div>

				<div class="profile__header__followers">
					<i class="ion-android-add-circle"></i>
					<div><span>15</span> Followers</div>
				</div>

				<div class="profile__header__bottom">
					<nav class="main__menu main__menu--scroll">
						<span class="main__menu__item">About</span>
						<span class="main__menu__item">Settings</span>
						<span class="main__menu__item">Option1</span>
						<span class="main__menu__item">Option2</span>
						<span class="main__menu__item">Option3</span>
					</nav>
				</div>
			</header>
		`;

		this.shadow.innerHTML = template;
	}
}

window.customElements.define('profile-header', ProfileHeader);