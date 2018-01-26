// @flow

declare type mattermost$Emoji = {
    id?: string,
    create_at?: number,
    update_at?: number,
    delete_at?: number,
    creator_id?: string,
    name?: string
}

declare type mattermost$EmojiReaction = {
    user_id?: string,
    post_id?: string,
    emoji_name?: string,
    create_at?: number
}
