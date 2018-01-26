// @flow

declare type mattermost$IncomingWebhook = {
    id?: string,
    create_at?: string,
    update_at?: string,
    delete_at?: string,
    user_id?: string,
    channel_id?: string,
    team_id?: string,
    display_name?: string,
    description?: string,
}
  
declare type mattermost$IncomingWebhookPayload = {
    text?: string,
    username?: string,
    icon_url?: string,
    channel?: string,
    props?: {},
    attachments?: Array<mattermost$SlackAttachment>,
    type?: string
}
