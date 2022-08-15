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
  ]
};

module.exports = sidebars;
