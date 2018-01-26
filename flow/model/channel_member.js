// @flow

declare module 'mattermost-typed/model/channel_member' {
    declare export type $NotifyProps = mattermost$ChannelMember$NotifyProps
}

declare type mattermost$ChannelMember = {
    channel_id: string,
    user_id: string,
    roles: string,
    last_viewed_at: number,
    msg_count: number,
    mention_count: number,
    notify_props: mattermost$ChannelMember$NotifyProps,
    last_update_at: number
}
 
declare type mattermost$ChannelMember$NotifyProps = {
    desktop?: 'default' | 'all' | 'mention' | 'none',
    email?: 'default' | 'all' | 'mention' | 'none',
    mark_unread?: 'all' | 'mention',
    push?: 'default' | 'all' | 'mention' | 'none'
}

declare type mattermost$ChannelUnread = {
    team_id: string,
    channel_id: string,
    msg_count: number,
    mention_count: number
}
