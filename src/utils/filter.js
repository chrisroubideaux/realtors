export const filterData = [
  {
    items: [
      { name: 'Buy', value: 'for-sale' },
      { name: 'Rent', value: 'for-rent' },
    ],
    placeholder: 'Rent, Buy',
    queryName: 'rentBuy',
  },
  {
    items: [{ name: 'Properties', value: 'properties' }],
    placeholder: 'Rent',
    queryName: 'rent',
  },
  {
    items: [
      { name: 'Apartments', value: 'apartments' },
      { name: 'Condos', value: 'condos' },
    ],
    placeholder: 'Rent',
    queryName: 'rent',
  },
  {
    items: [
      { name: 'Homes', value: 'homes' },
      { name: 'Town', value: 'homes' },
    ],
    placeholder: 'Buy',
    queryName: 'buy',
  },
  {
    items: [
      { name: 'Lowest Price', value: 'price-asc' },
      { name: 'Highest Price', value: 'price-des' },
      { name: 'Newest', value: 'date-asc' },
      { name: 'Oldest', value: 'date-desc' },
      { name: 'Verified', value: 'verified-score' },
      { name: 'City, State, zip', value: 'location' },
    ],
    placeholder: 'Search',
    queryName: 'search',
  },

  {
    items: [
      { name: 'Apartments', value: 'apartments' },
      { name: '1,100', value: '1100' },
      { name: '1,500', value: '1500' },
      { name: '1,600', value: '1600' },
      { name: '1,700', value: '1700' },
      { name: '1,800', value: '1800' },
    ],
    placeholder: 'Min Price',
    queryName: 'minPrice',
  },
  {
    items: [
      { name: 'Apartments', value: 'apartments' },
      { name: '1,900', value: '1900' },
      { name: '2,000', value: '2000' },
      { name: '2,100', value: '2100' },
      { name: '3,300', value: '3300' },
      { name: '5,000', value: '5000' },
      { name: '5,100', value: '5100' },
    ],
    placeholder: 'Max Price',
    queryName: 'maxPrice',
  },
  {
    items: [
      { name: 'Condos', value: 'condos' },
      { name: '1,300', value: '1300' },
      { name: '1,500', value: '1500' },
      { name: '1,800', value: '1800' },
      { name: '1,900', value: '1900' },
      { name: '2,900', value: '2900' },
      { name: '3,700', value: '3700' },
    ],
    placeholder: 'Min Price',
    queryName: 'minPrice',
  },
  {
    items: [
      { name: 'Condos', value: 'condos' },
      { name: '3,800', value: '3800' },
      { name: '4,200', value: '4200' },
      { name: '4,300', value: '4300' },
      { name: '4,500', value: '4500' },
      { name: '4,600', value: '4600' },
    ],
    placeholder: 'Max Price',
    queryName: 'maxPrice',
  },
  {
    items: [
      { name: 'Homes', value: 'homes' },
      { name: '80,000', value: '80000' },
      { name: '85,000', value: '85000' },
      { name: '100,000', value: '100000' },
      { name: '120,000', value: '120000' },
      { name: '130,000', value: '130,000' },
      { name: '135,000', value: '135000' },
      { name: '160,000', value: '160000' },
      { name: '210,000', value: '210000' },
    ],
    placeholder: 'Min Price',
    queryName: 'minPrice',
  },
  {
    items: [
      { name: 'Homes', value: 'homes' },
      { name: '215,000', value: '215000' },
      { name: '220,000', value: '222000' },
      { name: '240,000', value: '240000' },
      { name: '260,000', value: '260000' },
      { name: '270,000', value: '270000' },
      { name: '275,000', value: '275000' },
    ],
    placeholder: 'Max Price',
    queryName: 'maxPrice',
  },
  {
    items: [
      { name: 'TownHomes', value: 'townhomes' },

      { name: '120,000', value: '120000' },
      { name: '130,000', value: '130,000' },
    ],
    placeholder: 'Min Price',
    queryName: 'minPrice',
  },
  {
    items: [
      { name: 'TownHomes', value: 'townhomes' },
      { name: '130,000', value: '130' },
    ],
    placeholder: 'Max Price',
    queryName: 'maxPrice',
  },
  {
    items: [
      { name: '1', value: '1' },
      { name: '2', value: '2' },
      { name: '3', value: '3' },
      { name: '4', value: '4' },
      { name: '5', value: '5' },
      { name: '6', value: '6' },
    ],
    placeholder: 'Rooms',
    queryName: 'rooms',
  },
  {
    items: [
      { name: '1', value: '1' },
      { name: '2', value: '2' },
      { name: '3', value: '3' },
      { name: '4', value: '4' },
      { name: '5', value: '5' },
      { name: '6', value: '6' },
    ],
    placeholder: 'Baths',
    queryName: 'baths',
  },

  {
    items: [
      { name: 'Properties', value: '12' },
      { name: 'Apartment', value: '12' },
      { name: 'Condos', value: '12' },
      { name: 'Homes', value: '12' },
      { name: 'Town Homes', value: '8' },
    ],
    placeholder: 'Property Type',
    queryName: 'properties',
  },
];

export const getFilterValues = (filterValues) => {
  const {
    rentBuy,
    properties,
    apartments,
    homes,
    condos,
    townHomes,
    minPrice,
    maxPrice,
    areaMax,
    roomsMin,
    bathsMin,
    sort,
    location,
  } = filterValues;

  const values = [
    {
      name: 'rent, buy',
      value: rentBuy,
    },
    {
      name: 'properties',
      value: properties,
    },
    {
      name: 'apartments',
      value: apartments,
    },
    {
      name: 'condos',
      value: condos,
    },

    {
      name: 'minPrice',
      value: minPrice,
    },
    {
      name: 'maxPrice',
      value: maxPrice,
    },
    {
      name: 'areaMax',
      value: areaMax,
    },
    {
      name: 'roomsMin',
      value: roomsMin,
    },
    {
      name: 'bathsMin',
      value: bathsMin,
    },
    {
      name: 'sort',
      value: sort,
    },
    {
      name: 'location',
      value: location,
    },
    {
      name: 'properties',
      value: properties,
    },
    {
      name: 'apartments',
      value: apartments,
    },
    {
      name: 'condos',
      value: condos,
    },
    {
      name: 'homes',
      value: homes,
    },
    {
      name: 'townhomes',
      value: townHomes,
    },
  ];

  return values;
};
