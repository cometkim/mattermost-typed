// @flow

declare type mattermost$Channel = {
    id?: string;
    create_at?: number;
    update_at?: number;
    delete_at?: number;
    team_id?: string;
    type?: 'O' | 'P' | 'D' | 'G';
    display_name?: string;
    name?: string;
    header?: string;
    purpose?: string;
    last_post_at?: number;
    total_msg_count?: number;
    extra_update_at?: number;
    creator_id?: string;
}
  
declare type mattermost$ChannelPatch = {
    display_name?: string;
    name?: string;
    header?: string;
    purpose?: string;
}

declare type mattermost$ChannelStats = {
    channel_id: string;
    member_count: number;
}
