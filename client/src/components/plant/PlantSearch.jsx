import { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/userProvider';
import { Link } from 'react-router-dom';

const PlantSearch = () => {
  const [query, setQuery] = useState('');
  const [plants, setPlants] = useState([]);

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const { user } = useContext(UserContext);
  const { theme } = user;
  const className = `${theme}-theme`;

  const handleSearch = async () => {
    try {
      let url = `${baseUrl}/plant/find/search`;
      
      if (query.trim()) {
        url += `?query=${query}`;
      }

      const response = await axios.get(url);
      const plantsData = response.data.plants; 

      setPlants(plantsData);
    } catch (error) {
      console.error('Error searching plants:', error);
    }
  };

  console.log("Plants State:", plants);

  return (
    <div className={`${className} bg-gray-500 pt-2 pb-2 rounded-l-none rounded-t-none rounded-tr-lg rounded-br-lg secondary relative z-40`}>
      <p className="pb-2">Explore fellow plants</p>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Plants..."
        className="p-2 focus:outline-none outline-none" 
      />
      <button onClick={handleSearch} className="m-2 pt-2">Search</button>
      
      <div>
        <ul className="flex flex-col text-left max-h-80 overflow-y-auto">
          {plants.map((plant) => (
            <>
            <li key={plant._id} className="ml-4">
                <Link to={`/plant/${plant._id}`}>
                    <h3 className="text-lg font-bold mt-2">{plant.name}</h3>
                    <p>Latin Name: {plant.latinName}</p>
                    {plant.userId && <p>Created by: {plant.userId.name}</p>}
                </Link>
            </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlantSearch;



