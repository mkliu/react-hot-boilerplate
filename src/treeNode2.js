/**
 * Using React 0.13.2
 * Updated 2015-04-28
 */
var React = require('react')
var TreeNode = React.createClass({
  getInitialState: function() {
    return {
      visible: true
    };
  },
  render: function() {
    var childNodes;
    var classObj;
    var labelClass; 
    var arrowNode;


    var style;
    if (!this.state.visible) {
      style = 
      {
        display: "none",
      };
    }

    var arrowClassName = 'tree-view_arrow';
    var containerClassName = 'tree-view_children';

    if (!this.state.visible) {
      arrowClassName += ' tree-view_arrow-collapsed';
      containerClassName += ' tree-view_children-collapsed';
    }

    if (this.props.node.childNodes != null) {
      childNodes = this.props.node.childNodes.map(function(node, index) {
        return <div key={index}><TreeNode node={node} /></div>
      });

      arrowNode = (<div className={arrowClassName}>▾</div>);
      labelClass = this.state.visible ? "togglable-down" : "togglable-up"
    }
    else
    {
      arrowNode = (<div className={arrowClassName}> &nbsp;</div>);
    }

    return (
      <div className="tree-view">
        <div className="tree-view_item"  onClick={this.toggle} >
          {arrowNode}
          <label className="node">
            {this.props.node.title}
          </label>
        </div>
        
        <div style={style} className={containerClassName}>
          {childNodes}
        </div>
      </div>
    );
  },
  toggle: function() {
    this.setState({visible: !this.state.visible});
  }
});

module.exports = TreeNode