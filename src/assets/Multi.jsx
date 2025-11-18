import React from 'react';

const Multi = () => {
  const tableElements = [];

  for (let i = 1; i <= 10; i++) {
    tableElements.push(
      <p key={i}>
        2 x {i} = {2 * i}
      </p>
    );
  }

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial', color:"white",textAlign:"center" }}>
      <h2>Multiplication Table of 2</h2>
      {tableElements}
    </div>
  );
};

export default Multi;
