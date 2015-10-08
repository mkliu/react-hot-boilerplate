var React = require('react');

var dataSource = [
  {
    type: 'Employees',
    collapsed: false,
    people: [
      {name: 'Paul Gordon', age: 25, sex: 'male', role: 'coder', collapsed: false},
      {name: 'Sarah Lee', age: 23, sex: 'female', role: 'jqueryer', collapsed: false},
    ],
  },
  {
    type: 'CEO',
    collapsed: false,
    people: [
      {name: 'Drew Anderson', age: 35, sex: 'male', role: 'boss', collapsed: false},
    ],
  },
];

var TreeView = require('react-treeview');


var CompanyPeople = React.createClass({
  render() {
    return (
      <div>
        {dataSource.map((node, i) => {
          const type = node.type;
          const label = <span className="node">{type}</span>;
          return (
            <TreeView key={type + '|' + i} nodeLabel={label} defaultCollapsed={false}>
              {node.people.map(person => {
                const label2 = <span className="node">{person.name}</span>;
                return (
                  <TreeView nodeLabel={label2} key={person.name} defaultCollapsed={false}>
                    <div className="info">age: {person.age}</div>
                    <div className="info">sex: {person.sex}</div>
                    <div className="info">role: {person.role}</div>
                  </TreeView>
                );
              })}
            </TreeView>
          );
        })}
      </div>
    );
  },
});

module.exports = CompanyPeople
//
// React.render(<CompanyPeople />, document.getElementById('root'));
