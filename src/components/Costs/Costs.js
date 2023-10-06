// import CostItem from './CostItem';
import './Costs.css';
import Card from '../UI/Card';
import CostsFilter from './CostsFilter';
import React, { useState } from 'react';
import CostList from './CostsList';
import CostsDiagram from './CostsDiagram';

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState('2021');
  const changeYearFunc = (year) => {
    setSelectedYear(year);
    // console.log('hi');
    // console.log(year);
  };
  const filteredCosts = props.costs.filter(
    (cost) => cost.date.getFullYear() == selectedYear
  );

  return (
    <div>
      <Card className="costs">
        <CostsFilter
          costs={props.costs}
          year={selectedYear}
          onChangeYear={changeYearFunc}
        />
        <CostsDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
};
export default Costs;
