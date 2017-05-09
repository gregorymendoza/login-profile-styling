let users = [{
	username: 'John Doe',
	site: 'www.seller.com',
	phone: '(949) 325 - 68594',
	address: 'Newport Beach, CA'
}];

let profileInfo = `
		<ul class="profile-info">
			<li class="profile-info__data">
				<span id="username">${users[0].username}</span><i class="ion-edit"></i>
				<div class="edit-popup"></div>
			</li>
			<li class="profile-info__data">
				<span id="site">${users[0].site}</span><i class="ion-edit"></i>
				<div class="edit-popup"></div>
			</li>
			<li class="profile-info__data">
				<span id="phone">${users[0].phone}</span><i class="ion-edit"></i>
				<div class="edit-popup"></div>
			</li>
			<li class="profile-info__data">
				<span id="address">${users[0].address}</span><i class="ion-edit"></i>
				<div class="edit-popup"></div>
			</li>
		</ul>
`;

$('#tab-1').append(profileInfo);

const editPopUp = `
		<div class="edit-popup__inner">
			<label class="edit-popup__inner__label">%label%</label>
			<input class="edit-popup__inner__input" required>
			<button class="edit-popup__inner__btn edit-popup__inner__btn-save" type="submit"><strong>Save</strong></button>
			<button class="edit-popup__inner__btn edit-popup__inner__btn-cancel" type="button"><strong>Cancel</strong></button>
		</div>
`;

const hidePopUp = id => {
	$('.edit-popup').hide().html('');
	$(id).siblings('.ion-edit').show();
	$('.ion-edit').css('pointer-events', 'auto');
};

$('.ion-edit').click(function() {
	$(this).hide();
	$(this).next().show();

	$('.ion-edit').css('pointer-events', 'none');

	let label = $(this).siblings('span').text();
	let spanId = $(this).siblings('span').attr('id');

	let formattedEditPopUp;

	switch(spanId) {
		case 'username':
			formattedEditPopUp = editPopUp.replace('%label%', 'Name');
			break;
		case 'site':
			formattedEditPopUp = editPopUp.replace('%label%', 'Website');
			break;
		case 'phone':
			formattedEditPopUp = editPopUp.replace('%label%', 'Phone Number');
			break;
		case 'address':
			formattedEditPopUp = editPopUp.replace('%label%', 'City, State & ZIP');
			break;
	}

	let text = $('#' + spanId).text();

	$(this).next().append(formattedEditPopUp);
	$('.edit-popup__inner__input').attr('value', text);

	let data;

	$('.edit-popup__inner__input').blur(function() {
		data = $(this).val();
	});

	$('.edit-popup__inner__btn-save').click(() => {
		$('#' + spanId).text(data);
		hidePopUp('#' + spanId);
		return
	});

	$('.edit-popup__inner__btn-cancel').click(() => {
		hidePopUp('#' + spanId);
	});
});