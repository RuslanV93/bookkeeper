import './NewCost.css';
import CostForm from './CostForm';
import React, { useState } from 'react';
const NewCost = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const saveCostDataHandler = (inputCostData) => {
    // console.log(inputCostData);
    const costData = { ...inputCostData, id: Math.random().toString() };
    props.onAddCost(costData);
    setIsFormVisible(false);
  };
  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  };
  const cancelCostHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={inputCostDataHandler}>Добавить новый расход</button>
      )}
      {isFormVisible && (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCancel={cancelCostHandler}
        ></CostForm>
      )}
    </div>
  );
};

export default NewCost;
