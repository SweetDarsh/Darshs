/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
  codeofEthics: [
    {
      type: 'category',
      label: 'Code of Ethics',
      collapsible: false,
      collapsed: false,
      items: [
        'coe/introduction',
        'coe/chain_of_command',
        'coe/discord_policies',
        {
          type: 'category',
          label: 'Universal Policies',
          items: [
            {
              type: 'autogenerated',
              dirName: 'coe/universal',
            },
          ]
        },
        {
          type: 'category',
          label: 'Site Policies',
          items: [
            {
              type: 'autogenerated',
              dirName: 'coe/site_policies'
            },
          ]
        },
      ]
    }
  ],
  PunitiveStandards: [
    {
      type: 'category',
      label: 'Punitive Standards',
      collapsible: false,
      collapsed: false,
      items: [
        'Punitive_Standards/introduction',
        {
          type: 'category',
          label: '2.1 Minor Infractions',
          items: [
            {
              type: 'autogenerated',
              dirName: 'Punitive_Standards/MinorInfractions',
            },
          ]
        },
        {
          type: 'category',
          label: '2.2 Medium Infractions',
          items: [
            {
              type: 'autogenerated',
              dirName: 'Punitive_Standards/MediumInfractions'
            },
          ]
        },
        {
          type: 'category',
          label: '2.3 Major Infractions',
          items: [
            {
              type: 'autogenerated',
              dirName: 'Punitive_Standards/MajorInfractions',
            },
          ]
        },
      ]
    }
  ],
  departments: [
    {
      type: 'category',
      label: 'Department Guidelines',
      collapsible: false,
      collapsed: false,
      items: [
        'departments/introduction',
        {
          type: 'category',
          label: 'Manufacturing Department',
          items: [
            {
              type: 'autogenerated',
              dirName: 'departments/manufacturing',
            },
          ]
        },{
          type: 'category',
          label: 'Security Department',
          items: [
            {
              type: 'autogenerated',
              dirName: 'departments/security',
            },
          ]
        },
      ]
    }
  ],
  paragon: [
    {
      type: 'category',
      label: 'Paragon',
      collapsible: false,
      collapsed: false,
      items: [
        'paragon/introduction',
        'paragon/rules',
      ]
    }
  ],
  
  science: [
    'science/introduction',
    'science/faq',
    'science/how_to_write_a_test_report',
    'science/team_testing',
    {
      type: 'link',
      label: 'Main Guidelines',
      href: 'https://docs.google.com/document/d/1shk6vCUvYNv-Nyitr9_GhH5GguDjc3EC8ynAQCdxmJc/edit',
    },
    {
      type: 'category',
      label: 'SCP List',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Safe',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'science/scp-list/safe'
            },
          ]
        },
        {
          type: 'category',
          label: 'Euclid',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'science/scp-list/euclid'
            },
          ]
        },
        {
          type: 'category',
          label: 'Keter',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'science/scp-list/keter'
            },
          ]
        },
      ]
    }
  ]
};

module.exports = sidebars;
