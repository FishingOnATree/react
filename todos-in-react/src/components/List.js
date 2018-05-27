import React from 'react'

class List extends React.Component {
  render () {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>
            <span
              onClick={() => this.props.toggle && this.props.toggle(item.id)}
              style={{textDecoration: item.complete ? 'line-through' : 'none'}}>
              {item.name}
            </span>
            <button onClick={() => this.props.remove(item)}> X </button>
          </li>
        ))}
      </ul>
    )
  }
}

export default List;
