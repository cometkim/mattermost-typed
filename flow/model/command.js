// @flow

declare type mattermost$Command = {
    id?: string;
    create_at?: string;
    update_at?: string;
    delete_at?: string;
    token?: string;
    creator_id?: string;
    team_id?: string;
    trigger?: string;
    method?: 'P' | 'G'; 
    username?: string;
    icon_url?: string;
    auto_complete?: boolean;
    auto_complete_desc?: string;
    auto_complete_hint?: string;
    display_name?: string;
    description?: string;
    url?: string;
}

declare type mattermost$CommandPayload = {
    response_type?: 'in_channel' | 'ephemeral';
    text?: string;
    username?: string;
    icon_url?: string;
    goto_location?: string;
    attachments?: Array<mattermost$SlackAttachment>;
} 

declare type mattermost$CommandArgs = {
    command: string;
    channel_id: string;
    user_id?: string;
    team_id?: string;
    root_id?: string;
    parent_id?: string;
}
  