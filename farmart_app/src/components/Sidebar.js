import React, { useState } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import './sidebar.css';

function Sidebar({
  selectedCategory, setSelectedCategory,
  selectedType, setSelectedType,
  selectedBreed, setSelectedBreed,
  selectedPriceRange, setSelectedPriceRange,
  selectedAvailability, setSelectedAvailability
  }) {
  const [showCategory, setShowCategory] = useState(false);
  const [showType, setShowType] = useState(false);
  const [showBreed, setShowBreed] = useState(false);
  const [showPriceRange, setShowPriceRange] = useState(false);
  const [showAvailability, setShowAvailability] = useState(false);

  const categories = [
    { id: 1, name: 'Poultry' },
    { id: 2, name: 'Livestock' },
    { id: 3, name: 'Equines' },
    { id: 4, name: 'Camelids'},
    { id: 5, name: 'Apiary'},
    { id: 6, name: 'Aquaculture'},
    { id: 7, name: 'Exotic_animals' },
    { id: 8, name: 'Small_mammals' },
    { id: 9, name: 'Other' }
  ];

  const types = {
    1: ['Chicken', 'Duck', 'Turkey', 'Goose', 'Quail', 'Guinea_fowl'],
    2: ['Cattle', 'Goat', 'Sheep', 'Pig'],
    3: ['Horse', 'Donkey'],
    6: ['Fish', 'Crustacean', 'Mollusc'],
    4: ['Camel', 'Llama'],
    5: ['Bees'],
    7: ['Peacock', 'Parrot', 'Ostrich'],
    8: ['Rabbit', 'Guinea_pig'],
    9: ['']
  };
  const breeds = {
    Chicken: ['Original Kienyenji','Kenbro', 'Kari Improved', 'Rainbow Rooster', 'Naked Neck', 'Kuroiler', 'Sasso', 'ISA Brown', 'Hy-line', 'Lohmann', 'Shavers', 'Cobb-500', 'Arbor-Acre', 'Ross 308', 'Hubbard', 'Rhode Island Red'],
    Turkey: ['Bourbon Red', 'Royal Palm', 'Narragansett', 'Standard Bronze', 'Black Turkey', 'Auburn', 'Midget White', 'White Turkey', 'Slate'],
    Duck: ['Peking', 'Ayleshbari','Mascovi', 'Ruel Kagua', 'Swiden Duck', 'White / Gray Indian Runner', 'Khaki Campbell Duck'],
    Goose: ['Pilgrim', 'Egyptian', 'Steinbacher', 'Brecon Buff', 'Embden'],
    Quail: ['Bob white', 'White-breasted','Coturnix', 'British Range', 'English White','Manchurian Golden', 'Pharaoh', 'Tuxedo'],
    Guinea_fowl: ['Red Wattle Helmet', 'Blue Wattle Helmet', 'Vulturine / Bald-headed'],
    Cattle: ['Maasai Zebu', 'Kamasia/Samburu zebu', 'Winam / Kavirondo Zebu', 'Nandi Zebu', 'Watende Zebu', 'Low land / Coastal Zebu', 'Teso Zebu', 'Turkana / Karapokot Zebu', 'Kikuyu Zebu', 'Jiddu Zebu', 'Orma Boran', 'Somali Boran', 'Kenyan Boran', 'Kenyan Sahiwal', 'Friesian / Holstein-Friesian', 'Ayrshire', 'Guernsey', 'Jersey'],
    Goat: ['Small East African Goat', 'Galla', 'Kenyan Alpine', 'Toggenburg', 'Anglo Nubian', 'Boer', 'Kalahari Red'],
    Sheep: ['Small East Africa Sheep', 'Black Head Persian', 'Red Maasai', 'Dorper', 'Corriedale', 'Hampshire Down', 'Romney Mash', 'Merino'],
    Pig: ['Duroc', 'Large White', 'Landrace'],
    Donkey: ['Somali', 'Maasai', 'East African'],
    Horse: ['Thoroughbred', 'Arabian', 'Kenya Pony', 'Warmbloods', 'Quarter Horse', 'Crossbreds', 'Friesian'],
    Fish: ['Tilapia', 'African Catfish', 'Rainbow Trout', 'Mudfish', 'Koi Fish', 'Salmon', 'Tuna', 'Eel', 'Trouts', 'Common Carp'],
    Crustacean: ['Crabs', 'Lobsters', 'Shrimps / Crayfish / Crawfish', 'Prawns'],
    Mollusc: ['Oysters'],
    Camel: ['Somali', 'Gabbra', 'Rendile', 'Turkana'],
    Llama: ['Fine Fibre', 'Coarse Fibre'],
    Bees: ['Honey Bees', 'Solitary Bees', 'Mortal Bees', 'Carpenter Bees', 'Mountain Bees'],
    Ostrich: ['Blue-neck', 'Somali', 'Maasai'],
    Rabbit: ['Kenya White', 'New Zealand White', 'California White', 'Dutch', 'Flemish Giant', 'Checkered Giant', 'Chinchilla'],
    Guinea_pig: ['American', 'Teddy', 'Abyssinian']
  };
  const priceRanges = ['0-4000', '4000-10000', '10000-30000', '31000-80000', '80000-150000'];
  const status = ['Available', 'Sold-out'];

  const handleButtonClick = (setter, value, selectedValue) => {
    setter(selectedValue === value ? '' : value);
  };

  const handleCategoryClick = (category_id) => {
    setSelectedCategory(category_id);
    setSelectedType('');
    setSelectedBreed('');
    handleButtonClick(setSelectedCategory, category_id, selectedCategory);
    setShowType(true);
    setShowBreed(false);
  };
  
  const handleTypeClick = (type) => {
    if (selectedType === type) {
      setSelectedType('');
      setSelectedBreed('');
      setShowBreed(false);
    } else {
      setSelectedType(type);
      setSelectedBreed('');
      setShowBreed(true);
    }
  };

  return (
    <div className='sidebar'>
      <ul>
        <li>
          <FilterListIcon /> Filter and Sort
        </li>
        <li onClick={() => setShowCategory(!showCategory)}>
          <CategoryOutlinedIcon /> Categories
        </li>
        {showCategory && (
          <div className='filter-options'>
            {categories.map(category => (
              <button
                key={category.id}
                className={selectedCategory === category.id ? 'selected' : ''}
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}
        {showType && selectedCategory && types[selectedCategory] && (
          <li className='typeanimal'>
            <PetsOutlinedIcon /> Animal Type
            <div className='filter-options'>
              {types[selectedCategory].map(type => (
                <button
                  key={type}
                  className={selectedType === type ? 'selected' : ''}
                  onClick={() => handleTypeClick(type)} 
                >
                {type}
               </button>
              ))}
            </div>
          </li>
        )}
        {showBreed && selectedType && breeds[selectedType] && (
          <li>
            <PetsOutlinedIcon /> Breed
            <div className='filter-options'>
              {breeds[selectedType].map(breed => (
                <button
                  key={breed}
                  className={selectedBreed === breed ? 'selected' : ''}
                  onClick={() => handleButtonClick(setSelectedBreed, breed, selectedBreed)}
                >
                  {breed}
                </button>
              ))}
            </div>
          </li>
        )}
        <li onClick={() => setShowPriceRange(!showPriceRange)}>
          <PriceChangeOutlinedIcon /> Price Range
        </li>
        {showPriceRange && (
          <div className='filter-options'>
            {priceRanges.map(range => (
              <button
                key={range}
                className={selectedPriceRange === range ? 'selected' : ''}
                onClick={() => handleButtonClick(setSelectedPriceRange, range, selectedPriceRange)}
              >
                {range}
              </button>
            ))}
          </div>
        )}
        <li onClick={() => setShowAvailability(!showAvailability)}>
          <EventAvailableOutlinedIcon /> Product Availability
        </li>
        {showAvailability && (
          <div className='filter-options'>
            {status.map(status => (
              <button
                key={status}
                className={selectedAvailability === status ? 'selected' : ''}
                onClick={() => handleButtonClick(setSelectedAvailability, status, selectedAvailability)}
              >
                {status}
              </button>
            ))}
          </div>
        )}
      </ul>
    </div>
  );
}

export default Sidebar;