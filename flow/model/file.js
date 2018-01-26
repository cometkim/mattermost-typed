// @flow

declare type mattermost$FileInfo = {
    id: string;
    create_at: number;
    update_at: number;
    delete_at: number;
    user_id: string;
    post_id: string;
    name: string;
    extension: string;
    size: number;
    mime_type: string;
    width: number;
    height: number;
    has_preview_image: boolean;
}
