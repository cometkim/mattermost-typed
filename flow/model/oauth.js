// @flow

declare type mattermost$OAuthApp = {
    id?: string;
    create_at?: number;
    update_at?: number;
    delete_at?: number;
    creator_id?: string;
    client_secret?: string;
    name?: string;
    description?: string;
    icon_url?: string;
    callback_urls?: Array<string>;
    homepage?: string;
    is_trusted?: boolean;
}
