import React from 'react'

export default function List(props) {
  const wrapped = props.children.map((child, i) => <li key={i} className="list-item">{child}</li>);
  return <ul className="list-wrapper">{wrapped}</ul>
};
