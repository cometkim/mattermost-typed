// @flow

type BooleanString = 'true' | 'false'
type NumberString = string

declare type mattermost$ClientConfig = {
    AboutLink: string;
    AllowBannerDismissal: BooleanString;
    AllowCustomThemes: BooleanString;
    AllowEditPost: 'always' | 'never' | 'time_limit';
    AllowedThemes: string;
    AndroidAppDownloadLink: string;
    AndroidLatestVersion: string;
    AndroidMinVersion: string;
    AppDownloadLink: string;
    AvailableLocales: string;
    BannerColor: string;
    BannerText: string;
    BannerTextColor: string;
    BuildDate: string;
    BuildEnterpriseReady: BooleanString;
    BuildHash: string;
    BuildHashEnterprise: string;
    BuildNumber: string;
    CustomBrandText: string;
    CustomDescriptionText: string;
    DefaultClientLocale: mattermost$Locale;
    DefaultTheme: string;
    DesktopLatestVersion: string;
    DesktopMinVersion: string;
    DiagnosticId: string;
    DiagnosticsEnabled: BooleanString;
    EmailNotificationContentsType: 'full' | 'generic' | 'generic_no_channel';
    EnableBanner: BooleanString;
    EnableChannelViewedMessages: BooleanString;
    EnableCluster: BooleanString;
    EnableCommands: BooleanString;
    EnableCompliance: BooleanString;
    EnableConfirmNotificationsToChannel: BooleanString;
    EnableCustomBrand: BooleanString;
    EnableCustomEmoji: BooleanString;
    EnableDeveloper: BooleanString;
    EnableDiagnostics: BooleanString;
    EnableEmailBatching: BooleanString;
    EnableEmojiPicker: BooleanString;
    EnableFileAttachments: BooleanString;
    EnableIncomingWebhooks: BooleanString;
    EnableLdap: BooleanString;
    EnableLinkPreviews: BooleanString;
    EnableMetrics: BooleanString;
    EnableMobileFileDownload: BooleanString;
    EnableMobileFileUpload: BooleanString;
    EnableMultifactorAuthentication: BooleanString;
    EnableOAuthServiceProvider: BooleanString;
    EnableOnlyAdminIntegrations: BooleanString;
    EnableOpenServer: BooleanString;
    EnableOutgoingWebhooks: BooleanString;
    EnablePostIconOverride: BooleanString;
    EnablePostUsernameOverride: BooleanString;
    EnablePublicLink: BooleanString;
    EnableSaml: BooleanString;
    EnableSignInWithEmail: BooleanString;
    EnableSignInWithUsername: BooleanString;
    EnableSignUpWithEmail: BooleanString;
    EnableSignUpWithGitLab: BooleanString;
    EnableSignUpWithGoogle: BooleanString;
    EnableSignUpWithOffice365: BooleanString;
    EnableTeamCreation: BooleanString;
    EnableTesting: BooleanString;
    EnableThemeSelection: BooleanString;
    EnableUserAccessTokens: BooleanString;
    EnableUserCreation: BooleanString;
    EnableUserTypingMessages: BooleanString;
    EnableWebrtc: BooleanString;
    EnableXToLeaveChannelsFromLHS: BooleanString;
    EnforceMultifactorAuthentication: BooleanString;
    ExperimentalTownSquareIsReadOnly: BooleanString;
    GoogleDeveloperKey: string;
    HelpLink: string;
    IosAppDownloadLink: string;
    IosLatestVersion: string;
    IosMinVersion: string;
    LdapFirstNameAttributeSet: BooleanString;
    LdapLastNameAttributeSet: BooleanString;
    LdapLoginFieldName: string;
    LdapNicknameAttributeSet: BooleanString;
    MaxFileSize: string;
    MaxNotificationsPerChannel: string;
    NoAccounts: BooleanString;
    PasswordMinimumLength: string;
    PasswordRequireLowercase: BooleanString;
    PasswordRequireNumber: BooleanString;
    PasswordRequireSymbol: BooleanString;
    PasswordRequireUppercase: BooleanString;
    PluginsEnabled: BooleanString;
    PostEditTimeLimit: string;
    PrivacyPolicyLink: string;
    ReportAProblemLink: string;
    RequireEmailVerification: BooleanString;
    RestrictCustomEmojiCreation: mattermost$Permission$SystemLevel;
    RestrictDirectMessage: 'any' | 'team';
    RestrictPostDelete: mattermost$Permission$TeamLevel;
    RestrictPrivateChannelCreation: mattermost$Permission$TeamLevel;
    RestrictPrivateChannelDeletion: mattermost$Permission$ChannelLevel;
    RestrictPrivateChannelManageMembers: mattermost$Permission$ChannelLevel; 
    RestrictPrivateChannelManagement: mattermost$Permission$ChannelLevel;
    RestrictPublicChannelCreation: mattermost$Permission$TeamLevel;
    RestrictPublicChannelDeletion: mattermost$Permission$ChannelLevel; 
    RestrictPublicChannelManagement: mattermost$Permission$ChannelLevel;
    RestrictTeamInvite: mattermost$Permission$TeamLevel; 
    SQLDriverName: mattermost$DatabaseDriver; 
    SamlFirstNameAttributeSet: BooleanString;
    SamlLastNameAttributeSet: BooleanString;
    SamlLoginButtonText: string;
    SamlNicknameAttributeSet: BooleanString;
    SendEmailNotifications: BooleanString;
    SendPushNotifications: BooleanString;
    ShowEmailAddress: BooleanString;
    SiteName: string;
    SiteURL: string;
    SupportEmail: string;
    TeammateNameDisplay: 'username' | 'nickname_full_name' | 'full_name';
    TermsOfServiceLink: string;
    TimeBetweenUserTypingUpdatesMilliseconds: string;
    Version: string;
    WebsocketPort: string;
    WebsocketSecurePort: string;
}
  
declare type mattermost$LicenseInfo = {
    Announcement: BooleanString;
    Cluster: BooleanString;
    Company: string;
    Compliance: BooleanString;
    CustomBrand: BooleanString;
    DataRetention: BooleanString;
    Elasticsearch: BooleanString;
    EmailNotificationContents: BooleanString;
    GoogleOAuth: BooleanString;
    IsLicensed: BooleanString;
    LDAP: BooleanString;
    MFA: BooleanString;
    MHPNS: BooleanString;
    Metrics: BooleanString;
    Office365OAuth: BooleanString;
    PasswordRequirements: BooleanString;
    SAML: BooleanString;
    Users: NumberString;
}
