// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

module.exports = {
  mainSidebar: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg#dark-mode-only"  alt="WalletConnect Logo"><img src="/img/walletconnect-logo-black.svg#light-mode-only"  alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'Introduction',
      className: 'menu_outer_list',
      collapsible: false,
      items: ['readme']
    },
    {
      type: 'category',
      label: 'SDKs',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        {
          type: 'link',
          label: 'Web3Modal',
          href: '/2.0/web3modal/about'
        },
        'web3wallet/about'
      ]
    },
    {
      type: 'category',
      label: 'Cloud',
      collapsible: false,
      className: 'menu_outer_list',
      items: ['cloud/explorer', 'cloud/relay']
    },
    {
      type: 'category',
      label: 'Advanced',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        {
          type: 'category',
          label: 'APIs',
          collapsed: true,
          collapsible: true,
          items: ['api/sign', 'api/auth', 'api/chat', 'api/push']
        },
        {
          type: 'category',
          label: 'Multi-Chain',
          items: ['advanced/multichain/overview', 'advanced/multichain/chain-list']
        },
        'advanced/echo-server'
      ]
    },
    {
      type: 'category',
      label: 'Technical Reference',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        'advanced/faq',
        'advanced/glossary',
        'advanced/migrating-from-v1.0',
        'advanced/what-changed-from-v1.0',
        {
          type: 'category',
          label: 'RPC Reference',
          items: [
            'advanced/rpc-reference/everscale-rpc',
            'advanced/rpc-reference/ethereum-rpc',
            'advanced/rpc-reference/cosmos-rpc',
            'advanced/rpc-reference/solana-rpc',
            'advanced/rpc-reference/stellar-rpc',
            'advanced/rpc-reference/tezos-rpc',
            'advanced/rpc-reference/near-rpc'
          ]
        },
        {
          type: 'category',
          label: 'Specs',
          collapsed: true,
          collapsible: true,
          items: [
            'specs/readme',
            {
              type: 'category',
              label: 'Client APIs',
              items: [
                {
                  type: 'category',
                  label: 'Sign API',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/clients/sign'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Auth API',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/clients/auth'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Chat API',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/clients/chat'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Push API',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/clients/push'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Core API',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/clients/core'
                    }
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'Meta-Clients API',
              items: [
                {
                  type: 'category',
                  label: 'Web3Inbox',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/meta-clients/web3inbox'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Web3Wallet',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/meta-clients/web3wallet'
                    }
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'Server APIs',
              items: [
                {
                  type: 'category',
                  label: 'Relay Server',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/servers/relay'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Keys Server',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/servers/keys'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Echo Server',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/servers/echo'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Cast Server',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/servers/cast'
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'History Server',
                  items: [
                    {
                      type: 'autogenerated',
                      dirName: 'specs/servers/history'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  web: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg#dark-mode-only"  alt="WalletConnect Logo"><img src="/img/walletconnect-logo-black.svg#light-mode-only"  alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'SDKs',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Web3Modal',
          collapsible: true,
          collapsed: true,
          items: [
            'web3modal/about',
            {
              type: 'category',
              label: 'Getting Started',
              collapsed: true,
              collapsible: true,
              items: [
                {
                  type: 'category',
                  label: 'React',
                  collapsed: true,
                  collapsible: true,
                  items: [
                    'web3modal/react/installation',
                    'web3modal/react/hooks',
                    'web3modal/react/components'
                  ]
                },
                {
                  type: 'category',
                  label: 'HTML',
                  collapsed: true,
                  collapsible: true,
                  items: [
                    'web3modal/html-js/installation',
                    'web3modal/html-js/actions',
                    'web3modal/html-js/components'
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'Customization',
              collapsed: true,
              collapsible: true,
              items: ['web3modal/options', 'web3modal/theming']
            },
            {
              type: 'category',
              label: 'Advanced',
              collapsed: true,
              collapsible: true,
              items: [
                'web3modal/advanced/wallets',
                'web3modal/advanced/chains',
                'web3modal/advanced/providers',
                'web3modal/advanced/mobile-linking',
                {
                  type: 'category',
                  label: 'Standalone Sign',
                  collapsed: true,
                  collapsible: true,
                  items: [
                    'web3modal/advanced/standalone/sign/about',
                    'web3modal/advanced/standalone/sign/installation',
                    'web3modal/advanced/standalone/sign/actions'
                  ]
                },
                {
                  type: 'category',
                  label: 'Standalone Auth',
                  collapsed: true,
                  collapsible: true,
                  items: [
                    'web3modal/advanced/standalone/auth/about',
                    'web3modal/advanced/standalone/auth/installation',
                    'web3modal/advanced/standalone/sign/actions'
                  ]
                }
              ]
            },
            'web3modal/faq'
          ]
        },
        {
          type: 'category',
          label: 'Web3Wallet',
          collapsible: true,
          collapsed: true,
          items: [
            'javascript/web3wallet/installation',
            'javascript/web3wallet/wallet-usage',
            'javascript/web3wallet/upgrade-guide'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Advanced',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'APIs',
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'category',
              label: 'Sign',
              collapsible: true,
              collapsed: true,
              items: [
                'javascript/sign/installation',
                'javascript/sign/dapp-usage',
                'javascript/sign/wallet-usage',
                'javascript/sign/smart-wallets'
              ]
            },
            {
              type: 'category',
              label: 'Auth',
              collapsible: true,
              collapsed: true,
              items: [
                'javascript/auth/installation',
                'javascript/auth/dapp-usage',
                'javascript/auth/wallet-usage'
              ]
            },
            {
              type: 'category',
              label: 'Push',
              collapsible: true,
              collapsed: true,
              items: [
                'javascript/push/installation',
                'javascript/push/dapp-usage',
                'javascript/push/wallet-usage'
              ]
            },
            {
              type: 'category',
              label: 'Chat',
              collapsible: true,
              collapsed: true,
              items: ['javascript/chat/installation', 'javascript/chat/usage']
            },
            {
              type: 'category',
              label: 'Core',
              collapsible: true,
              collapsed: true,
              items: ['javascript/core/pairing-api']
            }
          ]
        },
        {
          type: 'category',
          label: 'Providers',
          collapsible: true,
          collapsed: true,
          items: ['javascript/providers/ethereum', 'javascript/providers/universal']
        }
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        'javascript/guides/examples-and-resources',
        'javascript/guides/nodejs',
        'javascript/guides/shared-core',
        'javascript/guides/typescript'
      ]
    }
  ],
  android: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg#dark-mode-only"  alt="WalletConnect Logo"><img src="/img/walletconnect-logo-black.svg#light-mode-only"  alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'SDKs',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Web3Wallet',
          collapsible: true,
          collapsed: true,
          items: [
            'kotlin/web3wallet/installation',
            'kotlin/web3wallet/wallet-usage',
            'kotlin/web3wallet/upgrade-guide'
          ]
        },
        {
          type: 'category',
          label: 'Web3Inbox',
          collapsible: true,
          collapsed: true,
          items: ['kotlin/web3inbox/installation', 'kotlin/web3inbox/usage']
        }
      ]
    },
    {
      type: 'category',
      label: 'Advanced',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Sign',
          collapsible: true,
          collapsed: true,
          items: ['kotlin/sign/installation', 'kotlin/sign/dapp-usage', 'kotlin/sign/wallet-usage']
        },
        {
          type: 'category',
          label: 'Auth',
          collapsible: true,
          collapsed: true,
          items: [
            'kotlin/auth/installation',
            'kotlin/auth/dapp-or-requester-usage',
            'kotlin/auth/wallet-or-responder-usage'
          ]
        },
        {
          type: 'category',
          label: 'Push',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Dapp Usage',
              collapsible: true,
              collapsed: true,
              items: [['kotlin/push/dapp-usage/getting-started']]
            },
            {
              type: 'category',
              label: 'Wallet Usage',
              collapsible: true,
              collapsed: true,
              items: [['kotlin/push/wallet-usage/getting-started']]
            }
          ]
        },
        {
          type: 'category',
          label: 'Echo',
          collapsible: true,
          collapsed: true,
          items: ['kotlin/echo/usage']
        },
        {
          type: 'category',
          label: 'Chat',
          collapsible: true,
          collapsed: true,
          items: ['kotlin/chat/installation', 'kotlin/chat/usage']
        },
        {
          type: 'category',
          label: 'Core',
          collapsible: true,
          collapsed: true,
          items: ['kotlin/core/installation', 'kotlin/core/pairing', 'kotlin/core/relay']
        }
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      className: 'menu_outer_list',
      collapsible: false,
      items: ['kotlin/guides/examples-and-resources', 'kotlin/guides/mobile-linking']
    }
  ],
  ios: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg#dark-mode-only"  alt="WalletConnect Logo"><img src="/img/walletconnect-logo-black.svg#light-mode-only"  alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'SDKs',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Web3Wallet',
          collapsible: true,
          collapsed: true,
          items: [
            'swift/web3wallet/installation',
            'swift/web3wallet/wallet-usage',
            'swift/web3wallet/upgrade-guide'
          ]
        },
        {
          type: 'category',
          label: 'Web3Inbox',
          collapsed: true,
          collapsible: true,
          items: ['swift/web3inbox/installation', 'swift/web3inbox/wallet-usage']
        }
      ]
    },
    {
      type: 'category',
      label: 'Advanced',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Sign',
          collapsible: true,
          collapsed: true,
          items: ['swift/sign/installation', 'swift/sign/dapp-usage', 'swift/sign/wallet-usage']
        },
        {
          type: 'category',
          label: 'Auth',
          collapsible: true,
          collapsed: true,
          items: ['swift/auth/installation', 'swift/auth/dapp-usage', 'swift/auth/wallet-usage']
        },
        {
          type: 'category',
          label: 'Push',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Dapp Usage',
              collapsible: true,
              collapsed: true,
              items: [['swift/push/dapp-usage/getting-started']]
            },
            {
              type: 'category',
              label: 'Wallet Usage',
              collapsible: true,
              collapsed: true,
              items: [['swift/push/wallet-usage/getting-started']]
            }
          ]
        },
        {
          type: 'category',
          label: 'Echo',
          collapsible: true,
          collapsed: true,
          items: ['swift/echo/installation', 'swift/echo/usage']
        },
        {
          type: 'category',
          label: 'Chat',
          collapsible: true,
          collapsed: true,
          items: ['swift/chat/installation', 'swift/chat/usage']
        },
        {
          type: 'category',
          label: 'Core',
          collapsible: true,
          collapsed: true,
          items: [
            'swift/core/installation',
            'swift/core/pairing-usage',
            'swift/core/networking-configuration'
          ]
        },
        {
          type: 'category',
          label: 'Router',
          collapsible: true,
          collapsed: true,
          items: ['swift/router/installation']
        }
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      className: 'menu_outer_list',
      collapsible: false,
      items: ['swift/guides/examples-and-resources', 'swift/guides/mobile-linking']
    }
  ],
  reactnative: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg#dark-mode-only"  alt="WalletConnect Logo"><img src="/img/walletconnect-logo-black.svg#light-mode-only"  alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'Introduction',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        'reactnative/overview',
      ]
    },
    {
      type: 'category',
      label: 'SDKs',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Web3Wallet',
          collapsible: true,
          collapsed: true,
          items: ['reactnative/web3wallet/Installation', 'reactnative/web3wallet/wallet-usage']
        },
        {
          type: 'category',
          label: 'Web3Modal',
          collapsible: true,
          collapsed: true,
          items: ['reactnative/web3modal/installation', 'reactnative/web3modal/dapp-usage']
        }
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      className: 'menu_outer_list',
      collapsible: false,
      items: ['reactnative/guides/tutorials']
    }
  ],
  flutter: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg#dark-mode-only"  alt="WalletConnect Logo"><img src="/img/walletconnect-logo-black.svg#light-mode-only"  alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'SDKs',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Web3Wallet',
          collapsible: true,
          collapsed: true,
          items: ['flutter/installation', 'flutter/wallets/wallet-usage']
        }
      ]
    },
    {
      type: 'category',
      label: 'Advanced',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Sign',
          collapsible: true,
          collapsed: true,
          items: ['flutter/dapps/dapp-sign-usage']
        },
        {
          type: 'category',
          label: 'Auth',
          collapsible: true,
          collapsed: true,
          items: ['flutter/dapps/dapp-auth-usage']
        }
      ]
    }
  ],
  unity: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand sidebar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg" alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'SDKs',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Web3Wallet',
          collapsible: true,
          collapsed: true,
          items: ['csharp/sign/installation', 'csharp/sign/dapp-usage', 'csharp/sign/wallet-usage']
        }
      ]
    },
    {
      type: 'category',
      label: 'Advanced',
      className: 'menu_outer_list',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Core',
          collapsible: true,
          collapsed: true,
          items: ['csharp/core/pairing-api']
        }
      ]
    }
  ]
}
