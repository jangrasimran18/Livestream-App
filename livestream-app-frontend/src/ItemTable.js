// Frontend JavaScript code (inside a React component or script)
const newItem = {
    name: 'New Item Name',
    description: 'New Item Description',
  };
  
  fetch('/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newItem),
  })
    .then((response) => response.json())
    .then((data)) => {
      console.log('Item created:', data);}
  