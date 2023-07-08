import React from 'react';
import HelloWorld from '../HelloWorld';

const PowerConsumptionCard: React.FC = () => {
  return (
    <div className="power-card">
      <h2>Power Consumption</h2>
      <HelloWorld />
      {/* Add power consumption content */}
    </div>
  );
};

export default PowerConsumptionCard;
