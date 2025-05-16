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
        'margin-accounts/integration-with-margin-pools',
        'margin-accounts/optimized-lending-pool-mechanics',
        'margin-accounts/formulas',
      ],
    },

    // 4. Fees
    'fees',

    // 5. Rewards
    'rewards',

    // 6. Restricted Jurisdictions
    'restrictions',

    // 7. Audits
    'audits',

    // 8. FAQ
    'faq',

    // 9. Support
    'support',

    // 10. Tooltips
    'tooltips',

    // 11. Glossary
    'glossary',
  ],
};

export default sidebars;
