// CoffeeListWithDetail.js
import React, { useState } from 'react';
import CoffeeList from './coffeeList';
import CoffeeDetail from './coffeeDetail';

const CoffeeListWithDetail = () => {
    const [selectedCoffeeId, setSelectedCoffeeId] = useState(null);

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <CoffeeList onSelectCoffee={setSelectedCoffeeId} />
            {selectedCoffeeId && <CoffeeDetail id={selectedCoffeeId} />}
        </div>
    );
};

export default CoffeeListWithDetail;
