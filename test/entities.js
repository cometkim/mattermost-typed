// @flow

const user: mattermost$User = {
	username: '',
	auth_data: '',
	auth_service: '',
	email: '',
	email_verified: true,
	nickname: '',
	first_name: '',
	last_name: '',
	positiond: '',
	roles: 'system_user',
	allow_marketing: true,
	notify_props: {
		channel: true,
		comments: 'any',
		desktop: 'mention',
		desktop_duration: 5,
		desktop_sound: true,
		email: true,
		first_name: false,
		mention_keys: '',
		push: 'mention',
		push_status: 'away',
		user_id: ''
	},
	last_password_update: 1469797186847,
	last_picture_update: 1505710764430,
	locale: 'ko'
};

user.id = '';
// $ExpectError
user.unkown = null;
user.create_at = 0;
// $ExpectError
user.auth_service = 'unknown';
// $ExpectError
user.notify_props.push = 'unknown';
// $ExpectError
user.locale = 'unknown';

const post: mattermost$Post = {
	id: '',
	create_at: 1505327331373,
	update_at: 1505349862185,
	edit_at: 0,
	delete_at: 0,
	is_pinned: false,
	user_id: '',
	channel_id: '',
	root_id: '',
	parent_id: '',
	original_id: '',
	message: '',
	type: 'slack_attachment',
	props: {
		attachments: [{
			id: 0,
			fallback: '',
			color: '',
			pretext: '',
			author_name: '',
			author_link: '',
			author_icon: '',
			title: '',
			title_link: '',
			text: '',
			fields: [{
				title: '',
				value: '',
				short: true
			}],
			image_url: '',
			thumb_url: '',
			footer: '',
			footer_icon: '',
			ts: null
		}],
		from_webhook: true
	},
	hashtags: '',
	pending_post_id: ''
};