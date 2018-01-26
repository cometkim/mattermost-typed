// @flow

declare type mattermost$TeamMember = {
    team_id: string;
    user_id: string;
    roles: string;
    delete_at?: number;
}
  
declare type mattermost$TeamUnread = {
    team_id: string;
    msg_count: number;
    mention_count: number;
}
