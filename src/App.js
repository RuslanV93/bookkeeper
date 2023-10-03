import React from 'react';
import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';

const App = () => {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: 'Холодильник',
      amount: 999.99,
    },
    {
      date: new Date(2021, 6, 25),
      description: 'Macbook',
      amount: 1799.99,
    },
    {
      date: new Date(2021, 8, 1),
      description: 'Джинсы',
      amount: 47.99,
    },
  ];
  return (
    <div>
      <NewCost></NewCost>
      <Costs costs={costs} />
    </div>
  );
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h1', {}, 'React Bookkeeper'),
  //   React.createElement(Costs, { costs: costs })
  // );
};

export default App;
