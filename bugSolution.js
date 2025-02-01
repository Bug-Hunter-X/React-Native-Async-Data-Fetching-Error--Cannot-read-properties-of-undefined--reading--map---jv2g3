```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);
  const isMounted = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const jsonData = await response.json();
      if (isMounted.current) {
        setData(jsonData);
      }
    };

    fetchData();

    return () => {
      isMounted.current = false;
    };
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default MyComponent;
```