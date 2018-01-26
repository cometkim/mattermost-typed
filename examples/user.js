// @flow

const user: mattermost$User = {
    id: '',
    create_at: 0,
    update_at: 0,
    delete_at: 0,
    username: '',
    auth_data: '',
    auth_service: '',
    email: '',
    email_verified: true,
    nickname: '',
    first_name: '',
    last_name: '',
    position: '',
    roles: 'system_user',
    allow_marketing: true,
    notify_props: {
        channel: 'true',
        comments: 'any',
        desktop: 'mention',
        desktop_duration: 5,
        desktop_sound: 'true',
        email: 'true',
        first_name: 'false',
        mention_keys: '',
        push: 'true',
        push_status: 'away',
        user_id: ''
    },
    last_password_update: 1469797186847,
    last_picture_update: 1505710764430,
    locale: 'ko'
};

// $ExpectError
user.id = '';

// $ExpectError
user.unkown = null;

// $ExpectError
user.auth_service = 'unknown';

// $ExpectError
user.notify_props.push = 'unknown';

// $ExpectError
user.locale = 'unknown';