var React = require('react');
// import App from './App';
var data = require('./data')
var TreeView = require('react-treeview')
// var Inspector = require('react-json-inspector')

var mountNode = document.getElementById('root');

var TreeNode = require('./treeNode2')

console.log('data is' + JSON.stringify(data))
// var UserGist = React.createClass({
//   getInitialState: function() {
//     return {
//       paths: data
// 	  }
// 	},

//   render: function() {
//     return (
//       <div>
//         {this.state.paths}
//       </div>
//     );
//   }
// });



var data = {
  title: "Root",
  childNodes: [
    {title: "bobby"},
    {title: "suzie", childNodes: [
      {title: "puppy", childNodes: [
        {title: "dog house"}
      ]},
      {title: "cherry tree"}
    ]}
  ]
};

// var Paths = React.createClass({
//     getInitialState: function() {
//       return {
//         paths: data
//      }
//    },

//    renderTree(nodes)
//    {
//     var self = this;
//     if(nodes)
//     {
//       return (
//         <div>
//           {nodes.map(function(node, i) {
//             var key = node.text + "|" + i;
//             var label = <span className="node">{node.key}</span>;
//             var isNoChildren = !node.children

//             return (
//                 <TreeView key={key} nodeLabel = {label} defaultCollapsed = {isNoChildren}>
//                   {self.renderTree(node.children)}
//                 </TreeView>
//               )
//           })}
//         </div>
//       );
//     }
    
//    },

//   render() {
//     return this.renderTree(this.state.paths)
//   },
// });
React.render(
  <TreeNode node={data} />,
  mountNode
);

