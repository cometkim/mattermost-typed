// @flow

type BooleanString = 'true' | 'false'

type Post = mattermost$Post
declare type mattermost$Post = {
    id?: string,
    create_at?: number,
    update_at?: number,
    delete_at?: number,
    is_pinned?: boolean,
    user_id?: string,
    channel_id?: string,
    root_id?: string,
    parent_id?: string,
    original_id?: string,
    message?: string,
    type?: $Type,
    props?: $Props,
    hashtags?: string,
    file_ids?: string[],
    pending_post_id?: string,
    has_reactions?: boolean
};

declare type mattermost$PostPatch = {
    is_pinned?: boolean,
    message?: string,
    props?: $Props,
    file_ids?: Array<string>,
    has_reactions?: boolean
};

declare type mattermost$PostList = {
    order: Array<string>,
    posts: {
        [postId: string]: Post
    }
};

export type $Type = mattermost$Post$Type
declare type mattermost$Post$Type = 
    | ''
    | 'slack_attachment'
    | 'system_generic'
    | 'system_join_channel'
    | 'system_leave_channel'
    | 'system_add_to_channel'
    | 'system_remove_from_channel'
    | 'system_header_change'
    | 'system_displayname_change'
    | 'system_purpose_change'
    | 'system_channel_deleted'
    | 'system_ephemeral'

export type $Props = mattermost$Post$Props
declare type mattermost$Post$Props = {
    attachments?: Array<mattermost$SlackAttachment>,
    from_webhook?: BooleanString,
    override_icon_url?: string
}
