import React, { useEffect, useState } from 'react';
import {
  Card,
} from 'react-bootstrap';

export default function CommodityView() {
  const [commodities, setCommodities] = useState([]);

  const getCommodities = async () => {
    const response = await fetch('/api/commodities');
    return response.json();
  };

  useEffect(() => {
    async function init() {
      const comList = await getCommodities();
      setCommodities(comList);
    }

    init();
  }, []);

  return (
    <div className="info" id="commodities">
      {
        commodities.map((commodity) => (
          <Card bg="primary" text="white" key={commodity.name} variant="primary">
            <Card.Header>{commodity.name}</Card.Header>
          </Card>
        ))
      }
    </div>
  );
}
