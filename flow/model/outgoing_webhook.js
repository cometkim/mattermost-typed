// @flow

declare module 'mattermost-typed/model/outgoing_webhook' {
    declare export type $TriggerOption = mattermost$OutgoingWebhook$TriggerOption
}

declare type mattermost$OutgoingWebhook = {
    id?: string,
    create_at?: number,
    update_at?: number,
    delete_at?: number,
    token?: string,
    creator_id?: string,
    channel_id?: string,
    team_id?: string,
    trigger_words?: Array<string>,
    trigger_when?: mattermost$OutgoingWebhook$TriggerOption,
    callback_urls?: Array<string>,
    display_name?: string,
    description?: string,
    content_type?: 'application/x-www-form-urlencoded' | 'application/json'
}

declare type mattermost$OutgoingWebhookPayload = {
    token: string,
    team_id: string,
    team_domain: string,
    channel_id: string,
    channel_name: string,
    timestamp: number,
    user_id: string,
    user_name: string,
    post_id: string,
    text: string,
    trigger_word: string,
}

declare type mattermost$OutgoingWebhook$TriggerOption = TriggerWordsExactMatch | TriggerWordsStartWith
type TriggerWordsExactMatch = 0
type TriggerWordsStartWith = 1
