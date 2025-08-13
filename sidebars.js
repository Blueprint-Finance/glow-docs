/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    // ✅ 1. Top-level "Overview"
    {
      type: 'category',
      label: 'Overview',
      items: [
        'Overview/welcome',
        'Overview/the-problem',
        'Overview/our-solution',
        'Overview/how-it-works',
        'Overview/user-journey',
      ],
    },

    // ✅ 2. LRT section
    {
      type: 'category',
      label: 'LRT',
      items: [
        'LRT/overview',
        'LRT/$glowSol',
        'LRT/using-glowSol',
      ],
    },

    // ✅ 3. Margin Accounts section
    {
      type: 'category',
      label: 'Margin Accounts',
      items: [
        'margin-accounts/overview',
        'margin-accounts/how-to-create-a-margin-account',
        'margin-accounts/how-to-deposit',
        'margin-accounts/positions',
        'margin-accounts/portfolio-management',
        'margin-accounts/settings-modal-and-custom-rpc-setup',
        'margin-accounts/health-level',
        'margin-accounts/liquidation',
        'margin-accounts/formulas',
      ],
    },

    // 4. Margin Pools
{
  type: 'category',
  label: 'Margin Pools',
  items: [
    'margin-pools/overview',
    'margin-pools/optimized-lending-pool-mechanics',
  ],
},

    // 5. Fees
    'fees',

    // 6. Rewards
    'rewards',

    // 7. Restricted Jurisdictions
    'restrictions',
    'risks',

    // 8. Audits
    'audits',

    // 9. FAQ
    'faq',

    // 10. Support
    'support',

    // 11. Tooltips
    'tooltips',

    // 12. Glossary
    'glossary',
  ],
};

export default sidebars;
