// @flow

declare type mattermost$Team = {
    id?: string,
    create_at?: number,
    update_at?: number,
    delete_at?: number,
    display_name?: string,
    name?: string,
    description?: string,
    email?: string,
    type?: 'O' | 'I',
    company_name?: string,
    allowed_domains?: string,
    invite_id?: string,
    allow_open_invite?: boolean
}
  
declare type mattermost$TeamPatch = {
    display_name?: string,
    description?: string,
    company_name?: string,
    invite_id?: string,
    allow_open_invite?: boolean
}

declare type mattermost$TeamInviteInfo = {
    id: string,
    name: string,
    display_name: string,
    description: string,
}

declare type mattermost$TeamStats = {
    team_id: string,
    total_member_count: number,
    active_member_count: number
}
