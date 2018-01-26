// @flow

type BooleanString = 'true' | 'false'
type Infinity = 0

type User = mattermost$User
declare type mattermost$User = {
    id?: string,
    create_at?: number,
    update_at?: number,
    delete_at?: number,
    username?: string,
    password?: string,
    auth_data?: string,
    auth_service?: mattermost$AuthService,
    email?: string,
    email_verified?: boolean,
    nickname?: string,
    first_name?: string,
    last_name?: string,
    position?: string,
    roles?: string,
    allow_marketing?: boolean,
    props?: $Props,
    notify_props?: $NotifyProps,
    last_password_update?: number,
    last_picture_update?: number,
    locale?: mattermost$Locale
}

declare type mattermost$UserPatch = {
    username?: string,
    nickname?: string,
    first_name?: string,
    last_name?: string,
    position?: string,
    email?: string,
    props?: $Props,
    notify_props?: $NotifyProps,
    locale?: mattermost$Locale
}

declare type mattermost$UserAutocomplete = {
    users: Array<User>,
    out_of_channel: Array<User>
}

declare type mattermost$UserSearch = { term: string } & mattermost$UserSearch$Option
declare type mattermost$UserSearch$Option = {
    team_id?: string,
    not_in_team_id?: string,
    in_channel_id?: string,
    not_in_channel_id?: string,
    allow_inactive?: boolean,
    without_team?: boolean
}

declare type mattermost$UserStatus = {
    user_id: string,
    status: 'online' | 'away' | 'dnd' | 'offline',
    manual?: boolean,
    last_activity_at?: number
}

export type $Props = mattermost$User$Props
declare type mattermost$User$Props = {}

export type $NotifyProps = mattermost$User$NotifyProps;
declare type mattermost$User$NotifyProps = {
    channel?: BooleanString,
    comments?: 'any' | 'root' | 'never',
    desktop?: 'all' | 'mention' | 'none',
    desktop_duration?: 3 | 5 | 10 | Infinity, 
    desktop_sound?: BooleanString,
    email?: BooleanString,
    first_name?: BooleanString,
    mention_keys?: string,
    push?: BooleanString,
    push_status?: 'online' | 'away' | 'offline',
    user_id?: string
}

declare type mattermost$UserAccessToken = {
    id?: string,
    token?: string,
    user_id?: string,
    description?: string
};

declare type mattermost$MfaSecret = {
    secret: string,
    qr_code: string
};
 