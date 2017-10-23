// @flow

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
        from_webhook: 'true'
    },
    hashtags: '',
    pending_post_id: ''
};

// $ExpectError
post.id = '';