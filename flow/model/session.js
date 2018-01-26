// @flow

declare module 'mattermost-typed/model/session' {
    declare export type $Props = mattermost$Session$Props
}

declare type mattermost$Session = {
    id: string;
    token: string;
    create_at: number;
    expires_at: number;
    last_activity_at: number;
    user_id: string;
    device_id: string;
    roles: string;
    is_oauth: boolean;
    props: mattermost$Session$Props;
    team_members: Array<mattermost$TeamMember>;
}

declare type mattermost$Session$Props = {
    browser: string;
    os: string;
    platform: string;
}
