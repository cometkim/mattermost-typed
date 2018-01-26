// @flow

type BooleanString = 'true' | 'false'
type NumberString = string

type Category$Notification = 'notifications'
type Category$Display = 'display_settings'
type Category$Advanced = 'advanced_settings'

type Never = '0'
type Immediately = '30'

declare type mattermost$Preference =
    { user_id: string } &
    (
    | DirectChannelShow
    | GroupChannelShow
    | FavoriteChannel
    | FlaggedPost
    | LastTeam
    | LastChannel
    | Theme
    | EmailInterval
    | CollapsePreview
    | UseMilitaryTime
    | ChannelDisplayMode
    | MessageDisplayMode
    | NameFormat
    | SelectedFont
    | EnableEmbedPreview
    | EnableEmojiPicker
    | EnableMarkdownFormatting
    | EnableMarkdownPreview
    | EnableWebRTCPreview
    )

type DirectChannelShow = {
    category: 'direct_channel_show';
    name: string; // Channel ID
    value: BooleanString;
}

type GroupChannelShow = {
    category: 'group_channel_show';
    name: string; // Channel ID
    value: BooleanString;
}

type FavoriteChannel = {
    category: 'favorite_channel';
    name: string; // Channel ID
    value: BooleanString;
}

type FlaggedPost = {
    category: 'flagged_post';
    name: string; // Post ID
    value: BooleanString;
}

type LastTeam = {
    category: 'last';
    name: 'team';
    value: string; // Team ID
}

type LastChannel = {
    category: 'last';
    name: 'channel';
    value: string; // Channel ID
}

type Theme = {
    category: 'theme';
    name: '';
    value: string;
}

type EmailInterval = {
    category: Category$Notification;
    name: 'email_interval';
    value: Never | Immediately | '900' | '3600';
}

type CollapsePreview = {
    category: Category$Display;
    name: 'collapse_previews';
    value: BooleanString;
}

type UseMilitaryTime = {
    category: Category$Display;
    name: 'use_military_time';
    value: BooleanString;
}

type ChannelDisplayMode = {
    category: Category$Display;
    name: 'channel_display_mode';
    value: 'full' | 'centered';
}

type MessageDisplayMode = {
    category: Category$Display;
    name: 'message_display';
    value: 'clean' | 'compact';
}

type NameFormat = {
    category: Category$Display;
    name: 'name_format';
    value: 'username' | 'full_name' | 'nickname_full_name';
}

type SelectedFont = {
    category: Category$Display;
    name: 'selected_font';
    value: string;
}

type EnableEmbedPreview = {
    categroy: Category$Advanced;
    name: 'feature_enabled_embed_preview';
    value: BooleanString;
}

type EnableEmojiPicker = {
    category: Category$Advanced;
    name: 'feature_enabled_emojipicker';
    value: BooleanString;
}

type EnableMarkdownPreview = {
    category: Category$Advanced;
    name: 'feature_enabled_markdown_preview';
    value: BooleanString;
}

type EnableMarkdownFormatting = {
    category: Category$Advanced;
    name: 'formatting';
    value: BooleanString;
}

type EnableWebRTCPreview = {
    category: Category$Advanced;
    name: 'feature_enabled_webrtc_preview';
    value: BooleanString;
}
