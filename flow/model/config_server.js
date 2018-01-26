// @flow

declare type mattermost$ServerConfig = {
    ServiceSettings: mattermost$ServerConfig$ServiceSettings,
    TeamSettings: mattermost$ServerConfig$TeamSettings,
    ClientRequirements: mattermost$ServerConfig$ClientRequirements,
    SqlSettings: mattermost$ServerConfig$SqlSettings,
    LogSettings: mattermost$ServerConfig$LogSettings,
    PasswordSettings: mattermost$ServerConfig$PasswordSettings,
    FileSettings: mattermost$ServerConfig$FileSettings,
    EmailSettings: mattermost$ServerConfig$EmailSettings,
    RateLimitSettings: mattermost$ServerConfig$RateLimitSettings,
    PrivacySettings: mattermost$ServerConfig$PrivacySettings,
    SupportSettings: mattermost$ServerConfig$SupportSettings,
    AnnouncementSettings: mattermost$ServerConfig$AnnouncementSettings,
    ThemeSettings: mattermost$ServerConfig$ThemeSettings,
    GitLabSettings: mattermost$ServerConfig$GitLabSettings,
    GoogleSettings: mattermost$ServerConfig$GoogleSettings,
    Office365Settings: mattermost$ServerConfig$Office365Settings,
    LdapSettings: mattermost$ServerConfig$LdapSettings,
    ComplianceSettings: mattermost$ServerConfig$ComplianceSettings,
    LocalizationSettings: mattermost$ServerConfig$LocalizationSettings,
    SamlSettings: mattermost$ServerConfig$SamlSettings,
    NativeAppSettings: mattermost$ServerConfig$NativeAppSettings,
    ClusterSettings: mattermost$ServerConfig$ClusterSettings,
    MetricsSettings: mattermost$ServerConfig$MetricsSettings,
    AnalyticsSettings: mattermost$ServerConfig$AnalyticsSettings,
    WebrtcSettings: mattermost$ServerConfig$WebrtcSettings,
    ElasticsearchSettings: mattermost$ServerConfig$ElasticsearchSettings,
    DataRetentionSettings: mattermost$ServerConfig$DataRetentionSettings,
    MessageExportSettings: mattermost$ServerConfig$MessageExportSettings,
    JobSettings: mattermost$ServerConfig$JobSettings,
    PluginSettings: mattermost$ServerConfig$PluginSettings,
};

declare type mattermost$ServerConfig$ServiceSettings = {
    SiteURL: string,
    LicenseFileLocation: string,
    ListenAddress: string,
    ConnectionSecurity: string,
    TLSCertFile: string,
    TLSKeyFile: string,
    UseLetsEncrypt: boolean,
    LetsEncryptCertificateCacheFile: string,
    Forward80To443: boolean,
    ReadTimeout: number,
    WriteTimeout: number,
    MaximumLoginAttempts: number,
    GoroutineHealthThreshold: number,
    GoogleDeveloperKey: string,
    EnableOAuthServiceProvider: boolean,
    EnableIncomingWebhooks: boolean,
    EnableOutgoingWebhooks: boolean,
    EnableCommands: boolean,
    EnableOnlyAdminIntegrations: boolean,
    EnablePostUsernameOverride: boolean,
    EnablePostIconOverride: boolean,
    EnableAPIv3: boolean,
    EnableLinkPreviews: boolean,
    EnableTesting: boolean,
    EnableDeveloper: boolean,
    EnableSecurityFixAlert: boolean,
    EnableInsecureOutgoingConnections: boolean,
    AllowedUntrustedInternalConnections: boolean,
    EnableMultifactorAuthentication: boolean,
    EnforceMultifactorAuthentication: boolean,
    EnableUserAccessTokens: boolean,
    AllowCorsFrom: string,
    SessionLengthWebInDays: number,
    SessionLengthMobileInDays: number,
    SessionLengthSSOInDays: number,
    SessionCacheInMinutes: number,
    SessionIdleTimeoutInMinutes: number,
    WebsocketSecurePort: number,
    WebsocketPort: number,
    WebserverMode: 'gzip' | 'uncompressed' | 'disabled',
    EnableCustomEmoji: boolean,
    EnableEmojiPicker: boolean,
    RestrictCustomEmojiCreation: mattermost$Permission$SystemLevel,
    RestrictPostDelete: mattermost$Permission$TeamLevel,
    AllowEditPost: 'always' | 'never' | 'time_limit',
    PostEditTimeLimit: number,
    TimeBetweenUserTypingUpdatesMilliseconds: number,
    EnablePostSearch: boolean,
    EnableUserTypingMessages: boolean,
    EnableChannelViewedMessages: boolean,
    EnableUserStatuses: boolean,
    ExperimentalEnableAuthenticationTransfer: boolean,
    ClusterLogTimeoutMilliseconds: number,
    CloseUnusedDirectMessages: boolean,
    EnablePreviewFeatures: boolean,
    EnableTutorial: boolean
};

declare type mattermost$ServerConfig$TeamSettings = {
    SiteName: string,
    MaxUsersPerTeam: number,
    EnableTeamCreation: boolean,
    EnableUserCreation: boolean,
    EnableOpenServer: boolean,
    RestrictCreationToDomains: string,
    EnableCustomBrand: boolean,
    CustomBrandText: string,
    CustomDescriptionText: string,
    RestrictDirectMessage: 'any' | 'team',
    RestrictTeamInvite: mattermost$Permission$TeamLevel,
    RestrictPublicChannelManagement: mattermost$Permission$ChannelLevel,
    RestrictPrivateChannelManagement: mattermost$Permission$ChannelLevel,
    RestrictPublicChannelCreation: mattermost$Permission$TeamLevel,
    RestrictPrivateChannelCreation: mattermost$Permission$TeamLevel,
    RestrictPublicChannelDeletion: mattermost$Permission$ChannelLevel,
    RestrictPrivateChannelDeletion: mattermost$Permission$ChannelLevel,
    RestrictPrivateChannelManageMembers: mattermost$Permission$ChannelLevel,
    EnableXToLeaveChannelsFromLHS: boolean,
    UserStatusAwayTimeout: number,
    MaxChannelsPerTeam: number,
    MaxNotificationsPerChannel: number,
    EnableConfirmNotificationsToChannel: boolean,
    TeammateNameDisplay: 'username' | 'nickname_full_name' | 'full_name',
    ExperimentalTownSquareIsReadOnly: boolean,
    ExperimentalPrimaryTeam: string
};

declare type mattermost$ServerConfig$ClientRequirements = {
    AndroidLatestVersion: string,
    AndroidMinVersion: string,
    DesktopLatestVersion: string,
    DesktopMinVersion: string,
    IosLatestVersion: string,
    IosMinVersion: string
};

declare type mattermost$ServerConfig$SqlSettings = {
    DriverName: mattermost$DatabaseDriver,
    DataSource: string,
    DataSourceReplicas: Array<string>,
    DataSourceSearchReplicas: ?Array<string>,
    MaxIdleConns: number,
    MaxOpenConns: number,
    Trace: boolean,
    AtRestEncryptKey: string,
    QueryTimeout: number
};


declare type mattermost$ServerConfig$LogSettings = {
    EnableConsole: boolean,
    ConsoleLevel: mattermost$LogLevel,
    EnableFile: boolean,
    FileLevel: mattermost$LogLevel,
    FileFormat: string,
    FileLocation: string,
    EnableWebhookDebugging: boolean,
    EnableDiagnostics: boolean
};

declare type mattermost$ServerConfig$PasswordSettings = {
    MinimumLength: number,
    Lowercase: boolean,
    Number: boolean,
    Uppercase: boolean,
    Symbol: boolean
};

declare type mattermost$ServerConfig$FileSettings = {
    EnableFileAttachments: boolean,
    EnableMobileUpload: boolean,
    EnableMobileDownload: boolean,
    MaxFileSize: number,
    DriverName: mattermost$StorageDriver, 
    Directory: string,
    EnablePublicLink: boolean,
    PublicLinkSalt: string,
    InitialFont: string,
    AmazonS3AccessKeyId: string,
    AmazonS3SecretAccessKey: string,
    AmazonS3Bucket: string,
    AmazonS3Region: string,
    AmazonS3Endpoint: string,
    AmazonS3SSL: boolean,
    AmazonS3SignV2: boolean,
    AmazonS3SSE: boolean,
    AmazonS3Trace: boolean
};

declare type mattermost$ServerConfig$EmailSettings = {
    EnableSignUpWithEmail: boolean,
    EnableSignInWithEmail: boolean,
    EnableSignInWithUsername: boolean,
    SendEmailNotifications: boolean,
    UseChannelInEmailNotifications: boolean,
    RequireEmailVerification: boolean,
    FeedbackName: string,
    FeedbackEmail: string,
    FeedbackOrganization: string,
    EnableSMTPAuth: boolean,
    SMTPUsername: string,
    SMTPPassword: string,
    SMTPServer: string,
    SMTPPort: number,
    ConnectionSecurity: mattermost$ConnectionSecurityOption, 
    InviteSalt: string,
    SendPushNotifications: boolean,
    PushNotificationServer: string,
    PushNotificationContents: 'full' | 'generic' | 'generic_no_channel',
    EnableEmailBatching: boolean,
    EmailBatchingBufferSize: number,
    EmailBatchingInterval: number,
    SkipServerCertificateVerification: boolean,
    EmailNotificationContentsType: 'full' | 'generic',
    LoginButtonColor: string,
    LoginButtonBorderColor: string,
    LoginButtonTextColor: string
};

declare type mattermost$ServerConfig$RateLimitSettings = {
    Enable: boolean,
    PerSec: number,
    MaxBurst: number,
    MemoryStoreSize: number,
    VaryByRemoteAddr: boolean,
    VaryByHeader: string
};

declare type mattermost$ServerConfig$PrivacySettings = {
    ShowEmailAddress: boolean,
    ShowFullName: boolean
};

declare type mattermost$ServerConfig$SupportSettings = {
    TermsOfServiceLink: string,
    PrivacyPolicyLink: string,
    AboutLink: string,
    HelpLink: string,
    ReportAProblemLink: string,
    SupportEmail: string,
};

declare type mattermost$ServerConfig$AnnouncementSettings = {
    EnableBanner: boolean,
    BannerText: string,
    BannerColor: string,
    BannerTextColor: string,
    AllowBannerDismissal: boolean
};

declare type mattermost$ServerConfig$ThemeSettings = {
    EnableThemeSelection: boolean,
    DefaultTheme: string,
    AllowCustomThemes: boolean,
    AllowedThemes: Array<string>
};

declare type mattermost$ServerConfig$GitLabSettings = {
    Enable: boolean,
    Secret: string,
    Id: string,
    Scope: string,
    AuthEndpoint: string,
    TokenEndpoint: string,
    UserApiEndpoint: string
};

declare type mattermost$ServerConfig$GoogleSettings = {
    Enable: boolean,
    Secret: string,
    Id: string,
    Scope: string,
    AuthEndpoint: string,
    TokenEndpoint: string,
    UserApiEndpoint: string
};

declare type mattermost$ServerConfig$Office365Settings = {
    Enable: boolean,
    Secret: string,
    Id: string,
    Scope: string,
    AuthEndpoint: string,
    TokenEndpoint: string,
    UserApiEndpoint: string
};

declare type mattermost$ServerConfig$LdapSettings = {
    Enable: boolean,
    EnableSync: boolean,
    LdapServer: string,
    LdapPort: number,
    ConnectionSecurity: mattermost$ConnectionSecurityOption,
    BaseDN: string,
    BindUsername: string,
    BindPassword: string,
    UserFilter: string,
    FirstNameAttribute: string,
    LastNameAttribute: string,
    EmailAttribute: string,
    UsernameAttribute: string,
    NicknameAttribute: string,
    IdAttribute: string,
    PositionAttribute: string,
    SyncIntervalMinutes: number,
    SkipCertificateVerification: boolean,
    QueryTimeout: number,
    MaxPageSize: number,
    LoginFieldName: string,
    LoginButtonColor: string,
    LoginButtonBorderColor: string,
    LoginButtonTextColor: string
};

declare type mattermost$ServerConfig$ComplianceSettings = {
    Enable: boolean,
    Directory: string,
    EnableDaily: boolean
};

declare type mattermost$ServerConfig$LocalizationSettings = {
    DefaultServerLocale: mattermost$Locale,
    DefaultClientLocale: mattermost$Locale,
    AvailableLocales: string
};

declare type mattermost$ServerConfig$SamlSettings = {
    Enable: boolean,
    EnableSyncWithLdap: boolean,
    Verify: boolean,
    Encrypt: boolean,
    IdpUrl: string,
    IdpDescriptorUrl: string,
    AssertionConsumerServiceURL: string,
    IdpCertificateFile: string,
    PublicCertificateFile: string,
    PrivateKeyFile: string,
    FirstNameAttribute: string,
    LastNameAttribute: string,
    EmailAttribute: string,
    UsernameAttribute: string,
    NicknameAttribute: string,
    LocaleAttribute: string,
    PositionAttribute: string,
    LoginButtonText: string,
    LoginButtonColor: string,
    LoginButtonBorderColor: string,
    LoginButtonTextColor: string
};

declare type mattermost$ServerConfig$NativeAppSettings = {
    AppDownloadLink: string,
    AndroidAppDownloadLink: string,
    IosAppDownloadLink: string
};

declare type mattermost$ServerConfig$ClusterSettings = {
    Enable: boolean,
    ClusterName: string,
    OverrideHostname: string,
    UseIpAddress: boolean,
    UseExperimentalGossip: boolean,
    ReadOnlyConfig: boolean,
    GossipPort: number,
    StreamingPort: number
};

declare type mattermost$ServerConfig$MetricsSettings = {
    Enable: boolean,
    BlockProfileRate: number,
    ListenAddress: string
};

declare type mattermost$ServerConfig$AnalyticsSettings = {
    MaxUsersForStatistics: number
};

declare type mattermost$ServerConfig$WebrtcSettings = {
    Enable: boolean,
    GatewayWebsocketUrl: string,
    GatewayAdminUrl: string,
    GatewayAdminSecret: string,
    StunURI: string,
    TurnURI: string,
    TurnUsername: string,
    TurnSharedKey: string
};

declare type mattermost$ServerConfig$ElasticsearchSettings = {
    ConnectionUrl: string,
    Username: string,
    Password: string,
    EnableIndexing: boolean,
    EnableSearching: boolean,
    Sniff: boolean,
    PostIndexReplicas: number,
    PostIndexShards: number,
    AggregatePostsAfterDays: number,
    PostsAggregatorJobStartTime: string,
    IndexPrefix: string,
    LiveIndexingBatchSize: number,
    BulkIndexingTimeWindowSeconds: number,
    RequestTimeoutSeconds: number
};

declare type mattermost$ServerConfig$DataRetentionSettings = {
    EnableMessageDeletion: boolean,
    EnableFileDeletion: boolean,
    MessageRetentionDays: number,
    FileRetentionDays: number,
    DeletionJobStartTime: string
};

declare type mattermost$ServerConfig$MessageExportSettings = {
    EnableExport: boolean,
    DailyRunTime: string,
    ExportFromTimestamp: number,
    BatchSize: number
};

declare type mattermost$ServerConfig$JobSettings = {
    RunJobs: boolean,
    RunScheduler: boolean
};

declare type mattermost$ServerConfig$PluginSettings = {
    Enable: boolean,
    EnableUploads: boolean,
    Directory: string,
    ClientDirectory: string,
    Plugins: {
        [pluginKey: string]: Object
    },
    PluginStates: {
        [pluginKey: string]: Object
    }
};
