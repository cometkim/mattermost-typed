// @flow

declare module 'mattermost-typed/model' {
    declare export type User = mattermost$User
    declare export type UserPatch = mattermost$UserPatch
    declare export type UserSearch = mattermost$UserSearch
    declare export type UserAutoComplete = mattermost$UserAutocomplete

    declare export type Team = mattermost$Team
    declare export type TeamPatch = mattermost$TeamPatch
    declare export type TeamStats = mattermost$TeamStats
    declare export type TeamInviteInfo = mattermost$TeamInviteInfo
    
    declare export type TeamMember = mattermost$TeamMember
    declare export type TeamUnread = mattermost$TeamUnread

    declare export type Channel = mattermost$Channel
    declare export type ChannelPatch = mattermost$ChannelPatch
    declare export type ChannelStats = mattermost$ChannelStats

    declare export type ChannelMember = mattermost$ChannelMember
    declare export type ChannelUnread = mattermost$ChannelUnread

    declare export type ServerConfig = mattermost$ServerConfig;
    declare export type ClientConfig = mattermost$ClientConfig;
    declare export type LicenseInfo = mattermost$LicenseInfo;
}
