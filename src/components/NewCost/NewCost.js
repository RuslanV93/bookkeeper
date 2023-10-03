import './NewCost.css';
import CostForm from './CostForm';
const NewCost = () => {
  const saveCostDataHandler = (inputCostData) => {
    console.log(inputCostData);
  };

  return (
    <div className="new-cost">
      <CostForm onSaveCostData={saveCostDataHandler}></CostForm>
    </div>
  );
};

export default NewCost;
