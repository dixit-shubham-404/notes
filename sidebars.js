/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
const rust = require("./sidebar/Languages/rust");
const sll = require("./sidebar/DataStructure/singlyLinkedList");
const stack = require("./sidebar/DataStructure/stacks");
const docker = require("./sidebar/Infra/Docker");

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
        rust.loops,
        rust.ownership,
        rust.struct,
        rust.enum_and_pattern,
        rust.system
      ],
    }
];

const infra_sidebar = [
  {
  label:'Infra',
  type: 'category',
  items:[
    docker.docker
  ],
}
];

const dsa_sidebar = [
  {
  label:'Singly Linked List',
  type: 'category',
  items:[
    sll.introduction,
    sll.insertion,
    sll.deletion,
    sll.count,
    sll.swap,
    sll.reverse,
    sll.merge,
    sll.mergeSort,
    sll.reverseInGroups,
    sll.detectLoop,
    sll.detectandRemoveLoop,
    sll.addTwoNumber,
    sll.rotate,

  ],
  },
  {
    label:'Stacks',
    type: 'category',
    items:[
      stack.introduction
    ],
  }
];

module.exports = {algorithm_sidebar, cs_subject_sidebar, language_sidebar, infra_sidebar, dsa_sidebar};