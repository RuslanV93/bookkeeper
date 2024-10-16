import React, { useState } from 'react';
import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';
import Diagram from './components/Diagram/Diagram';

const initialCosts = [
  {
    id: 'c1',
    date: new Date(2021, 2, 12),
    description: 'Холодильник',
    amount: 999.99,
  },
  {
    id: 'c2',
    date: new Date(2021, 6, 25),
    description: 'Macbook',
    amount: 1799.99,
  },
  {
    id: 'c3',
    date: new Date(2021, 8, 1),
    description: 'Джинсы',
    amount: 47.99,
  },
];
const App = () => {
  const [costs, setCosts] = useState(initialCosts);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler}></NewCost>
      {/* <Diagram></Diagram> */}
      <Costs costs={costs} />
    </div>
  );
};
// return React.createElement(
//   'div',
//   {},
//   React.createElement('h1', {}, 'React Bookkeeper'),
//   React.createElement(Costs, { costs: costs })
// );
export default App;
