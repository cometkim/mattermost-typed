// @flow

declare type mattermost$Job = {
    id?: string,
    type?: $Type,
    priority?: number,
    create_at?: number,
    start_at?: number,
    last_activity_at?: number,
    status?: $Status,
    progress?: number,
    data?: Object 
}

export type $Type = mattermost$Job$Type
declare type mattermost$Job$Type =
    | 'data_retention'
    | 'elasticsearch_post_indexing'
    | 'elasticsearch_post_aggregation'
    | 'ldap_sync'

export type $Status = mattermost$Job$Status
declare type mattermost$Job$Status =
    | 'pending'
    | 'in_progress'
    | 'success'
    | 'error'
    | 'cancel_requested'
    | 'canceled'
