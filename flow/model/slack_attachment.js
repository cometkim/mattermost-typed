// @flow

declare type mattermost$SlackAttachment = {
    id?: number,
    fallback?: string,
    color?: string,
    pretext?: string,
    author_name?: string,
    author_icon?: string,
    title?: string,
    title_link?: string,
    text?: string,
    fields?: Array<$Filed>,
    image_url?: string,
    thumb_url?: string,
    footer?: string,
    footer_icon?: string,
    ts?: ?number
};

export type $Filed = mattermost$SlackAttachment$Field
declare type mattermost$SlackAttachment$Field = {
    title: string,
    value: string,
    short: boolean
};
