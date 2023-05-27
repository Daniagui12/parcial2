import React from 'react';

function CafeElement({ props, onClick }) {
  const handleClick = () => {
    onClick(props.id);
  };

  return (
    <tr onClick={handleClick}>
      <td>{props.id}</td>
      <td>{props.nombre}</td>
      <td>{props.tipo}</td>
      <td>{props.region}</td>
    </tr>
  );
}

export default CafeElement;