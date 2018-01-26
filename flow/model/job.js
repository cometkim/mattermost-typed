// @flow

declare module 'mattermost-typed/model/job' {
    declare export type $Type = mattermost$Job$Type
    declare export type $Status = mattermost$Job$Status
}

declare type mattermost$Job = {
    id?: string,
    type?: mattermost$Job$Type,
    priority?: number,
    create_at?: number,
    start_at?: number,
    last_activity_at?: number,
    status?: mattermost$Job$Status,
    progress?: number,
    data?: Object 
}

declare type mattermost$Job$Type =
    | 'data_retention'
    | 'elasticsearch_post_indexing'
    | 'elasticsearch_post_aggregation'
    | 'ldap_sync'

declare type mattermost$Job$Status =
    | 'pending'
    | 'in_progress'
    | 'success'
    | 'error'
    | 'cancel_requested'
    | 'canceled'
