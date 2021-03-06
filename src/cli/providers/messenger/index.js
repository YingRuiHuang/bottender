export default {
  title: 'Bottender',
  subcommands: new Set([
    'attachment',
    'help',
    'get-started',
    'greeting',
    'persistent-menu',
    'profile',
    'webhook',
    'whitelisted-domains',
  ]),
  get attachment() {
    return require('./attachment').default;
  },
  get getStarted() {
    return require('./get-started').default;
  },
  get greeting() {
    return require('./greeting').default;
  },
  get persistentMenu() {
    return require('./persistent-menu').default;
  },
  get profile() {
    return require('./profile').default;
  },
  get webhook() {
    return require('./webhook').default;
  },
  get whitelistedDomains() {
    return require('./whitelisted-domains').default;
  },
  get help() {
    return require('./help').default;
  },

  // alias
  get menu() {
    return this.persistentMenu;
  },
  get domains() {
    return this.whitelistedDomains;
  },
};
