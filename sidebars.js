/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
const searching = require("./sidebar/Algorithms/searching");
const set = require("./sidebar/Algorithms/sets");
const sorting = require("./sidebar/Algorithms/sorting");
const leetcode = require("./sidebar/Algorithms/Practise/leetcode");
const os = require("./sidebar/CSSubject/os");
const systemDesign = require("./sidebar/CSSubject/systemDesign");
const rust = require("./sidebar/Languages/rust");
const array = require("./sidebar/DataStructure/array");
const sll = require("./sidebar/DataStructure/singlyLinkedList");
const stack = require("./sidebar/DataStructure/stacks");
const queue = require("./sidebar/DataStructure/queue");
const binaryTree = require("./sidebar/DataStructure/binaryTree");
const bst = require("./sidebar/DataStructure/bst");
const binaryHeap = require("./sidebar/DataStructure/binaryHeap");
const hashing = require("./sidebar/DataStructure/hashing");
const graph = require("./sidebar/DataStructure/graph");
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


const algorithm_sidebar = [

  {
    label : 'Searching',
    type : 'category',
    items : [
      searching.binarySearch,
    ]
  },
  {
    label : 'Sorting',
    type : 'category',
    items : [
      sorting.selectionSort,
      sorting.insertionSort,
      sorting.quickSort,
      sorting.mergeSort,
      sorting.cyclicSort,
      sorting.heapSort,
    ]
  },
  {
    label : 'Sets',
    type : 'category',
    items : [
      set.unionFind,
    ]
  },
  {
    label:'Leet Code',
    type:'category',
    items : [
      leetcode.subset,
      leetcode.subStrWithConCat,
      leetcode.search2DMatrix,
      leetcode.maximumSubarray,
      leetcode.letterCombo,
      leetcode.reverseNode,
      leetcode.removeDupArr,
      leetcode.trapRainWater,
      leetcode.multiplyString,
      leetcode.editDistance,
      leetcode.mergeKSortedLinkedList,
      leetcode.combinationSum,
      leetcode.decodeWays,
      leetcode.nQueen,
      leetcode.firstMissingPositive,
      leetcode.countAndSay,
      leetcode.groupAnagram,
      leetcode.threeSum,
      leetcode.rotateImage,
      leetcode.uniqueBST,
      leetcode.lenLongstSubstringwithoutRepeat,
      leetcode.medianSortedArray,
      leetcode.longestPalindromSubStr,
      leetcode.stringToInteger,
      leetcode.zigZagString,
      leetcode.regularExpression,
      leetcode.containerWithMostWater,
      leetcode.threeSumClosest,
      leetcode.mergeTwoSortedList,
      leetcode.generateParentheses,
      leetcode.findIndexOfFirst,
      leetcode.divideTwoIntegers,
      leetcode.searchRotatedSortedArray,
      leetcode.findTargetRangeInArray,
      leetcode.missingNumber,
      leetcode.disappearedElementInAnArray,
    ]
  },

];

const cs_subject_sidebar = [
  
    {
      label:'OS',
      type:'category',
      items:[
        os.introduction,
        os.multithreading,
        os.process,
        os.schedular,
      ],
    },
    {
      label:'System Design',
      type:'category',
      items:[
        systemDesign.solid,
        systemDesign.strategyDesign,
      ],
    },

    // Shorthand syntax:
    // 'doc2', // document ID
  ];
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
    label: "Array",
    type:'category',
    items:[
      array.distinctThreeLargestElement,
      array.findSecondLargestElement,
      array.moveAllZeroesToEnd,
      array.rearrangeEvenOdd,
      array.arrayLeader,
      array.printAllDistinctElement,
    ]
  },
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
      stack.introduction,
      stack.infixToPostfix,
      stack.evaluatePostfix,
      stack.reverseString,
      stack.paranthesis,
      stack.nextGreater,
    ],
  },
  {
    label:'Queues',
    type: 'category',
    items:[
      queue.introduction,
      queue.LinkedListImplentation,
      queue.priorityQueue,
      
    ],
  },
  {
    label:'Binary Tree',
    type: 'category',
    items:[
      binaryTree.introduction,
      binaryTree.types,
      binaryTree.handshaking,
    ],
  },
  {
    label:'Binary Search Tree',
    type: 'category',
    items:[
      bst.introduction,
      bst.search,
      bst.insert,
    ],
  },
  {
    label:'Binary Heap',
    type: 'category',
    items:[
     binaryHeap.introduction,
    ],
  },
  {
    label:'Graph',
    type: 'category',
    items:[
     graph.introduction,
     graph.bfs,
     graph.dfs,
     graph.detectCycle,
     graph.detectCycleDFS,
     graph.topologicalSorting,
    ],
  },
  {
    label:'Hashing',
    type: 'category',
    items:[
      hashing.verticalOrder,
    ],
  },
];

module.exports = {algorithm_sidebar, cs_subject_sidebar, language_sidebar, infra_sidebar, dsa_sidebar};