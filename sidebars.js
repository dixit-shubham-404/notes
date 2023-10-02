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
// const sidebars = {
//   // By default, Docusaurus generates a sidebar from the docs folder structure
//   tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

//   // But you can create a sidebar manually
//   /*
//   tutorialSidebar: [
//     'intro',
//     'hello',
//     {
//       type: 'category',
//       label: 'Tutorial',
//       items: ['tutorial-basics/create-a-document'],
//     },
//   ],
//    */
// };

// module.exports = sidebars;


const algorithm_sidebar = {
  algorithm_sidebar: [
    // Normal syntax:
    {
      type: 'doc',
      id: 'docs', // document ID
      label: 'Algorithm', // sidebar label
    },
    {
      type: 'doc',
      id: 'docs1/tutorial-basics/congratulations', // document ID
      label: 'Algorithm',
    }

    // Shorthand syntax:
    // 'doc2', // document ID
  ],
};

const cs_subject_sidebar = {
  cs_subject_sidebar: [
    // Normal syntax:
    {
      type: 'doc',
      id: 'CsSubject/CsSubject', // document ID
      label: 'Algorithm', // sidebar label
    },
    {
      label:'OS',
      type:'category',
      items:[
        {
          type:'doc',
          id:'CsSubject/OS/MultiTaksing'
        },
      ],
    }

    // Shorthand syntax:
    // 'doc2', // document ID
  ],
};
// const cs_subject_sidebar = {
//   cs_subject_sidebar: [
//     [{type: 'autogenerated', dirName: 'docs/CsSubject'}]
//   ],
// };

// const language_sidebar = {
//   language_sidebar : [
//     {
//       label:'RUST',
//       type: 'category',
//       items:[
//         {
//           label:'Loops',
//           type:'doc',
//           id:'Languages/RUST/Loops'
//         }
//       ],
//     },
//   ],
// };
const language_sidebar = [
      {
      label:'RUST',
      type: 'category',
      items:[
        {
          label:'Loops',
          type:'doc',
          id:'Languages/RUST/Loops'
        },
        {
          label:'Ownership',
          type:'doc',
          id:'Languages/RUST/Ownership'
        }
      ],
    }
];

module.exports = {algorithm_sidebar, cs_subject_sidebar, language_sidebar};