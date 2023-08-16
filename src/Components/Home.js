import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apitostore } from '../Redux/Action/Actioincreators';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.store); // Assuming you have a reducer that stores the data in the 'data' state
console.log(data)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/demo'); // Replace with your API endpoint
        const jsonData = await response.json();
       const g= dispatch(apitostore(jsonData)); // Dispatch the action with the fetched data
       console.log(g)

      } catch (error) {
console.log(error)
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className='container-fliud'>
      <h2 className='text-center'>Welcome to the Home page</h2>
    <div className='container d-flex'>
    <div className='row d-flex justify-content-between bg-info m-3 '>
    {data.map((item, index) => (
        <div key={index} className='p-3 col border'>
          <h2>{item._id}</h2>
          <h2>{item.name}</h2>
          <h2>{item.email}</h2>
          <h2>{item.price}</h2>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default Home;
