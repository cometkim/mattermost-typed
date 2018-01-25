// @flow

declare type mattermost$AuthService =
    | ''
    | 'email'
    | 'gitlab'
    | 'google'
    | 'office365'
    | 'ldap'
    | 'saml';

declare type mattermost$Locale = 
    | 'de'
    | 'en'
    | 'es'
    | 'fr'
    | 'it'
    | 'ja'
    | 'ko'
    | 'nl'
    | 'pl'
    | 'pt-BR'
    | 'ru'
    | 'tr'
    | 'zh-CN'
    | 'zh-TW';

declare type mattermost$LogLevel = 'DEBUG' | 'INFO' | 'ERROR';

declare type mattermost$DatabaseDriver = 'mysql' | 'postgres';

declare type mattermost$StorageDriver = 'local' | 'amazons3';

declare type mattermost$ConnectionSecurityOption = '' | 'TLS' | 'STARTLS';

// Permission Levels
declare type mattermost$Permission$TeamManagement = 'all' | 'team_admin' | 'system_admin';
declare type mattermost$Permission$ChannelManagement = 'all' | 'channel_admin' | 'team_admin' | 'system_admin';
