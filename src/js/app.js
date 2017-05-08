let users = [{
	username: 'John Doe',
	site: 'www.seller.com',
	phone: '(949) 325 - 68594',
	address: 'Newport Beach, CA'
}];

let profileInfo = `
		<ul class="profile-info">
			<li class="profile-info__data">
				<div class="profile-info__data-content"><span "id="username"">${users[0].username}</span><i class="ion-edit"></i></div>
			</li>
			<li class="profile-info__data">
				<div class="profile-info__data-content"><i class="ion-android-globe"></i><span id="site">${users[0].site}</span><i class="ion-edit"></i></div>
			</li>
			<li class="profile-info__data">
				<div class="profile-info__data-content"><i class="ion-ios-telephone-outline"></i><span id="phone">${users[0].phone}</span><i class="ion-edit"></i></div>
			</li>
			<li class="profile-info__data">
				<div class="profile-info__data-content"><i class="ion-ios-home-outline"></i><span id="address">${users[0].address}</span><i class="ion-edit"></i></div>
			</li>
		</ul>
`;

$('#tab-1').append(profileInfo);