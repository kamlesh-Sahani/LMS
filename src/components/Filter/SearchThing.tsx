// "use client"

// import React, { useEffect, useState, ChangeEvent } from 'react';
// import SearchResult from './SearchResult';
// BASE_URL="http://localhost:3000/api/FilterData"
// interface DataItem {
//   name: string;
//   type: string;
//   text: string;
// }

// const SearchThing: React.FC = () => {
//   const [data, setData] = useState<DataItem[] | null>(null);
//   const [filterData, setFilterData] = useState<DataItem[] | null>(null);
//   const [selectButton, setSelectButton] = useState<string>("all");
//   const [loading, setLoading] = useState<null>(null);
//   const [error, setError] = useState<boolean>(false);
//   useEffect(() => {
//     const fetchData = async () => {
//         setLoading(true);
//         try {
//             const response = await fetch(BASE_URL);
//             const json = await response.json();
//             setData(json);
//             setFilterData(json);
//             setLoading(false);
//         } catch (error) {
//             setError("Unable to fetch data");
//             setLoading(false);
//         }
//     };
//     fetchData();
// }, []);
//   const FilterThings = (type: string) => {
//     if (type === "all") {
//       setFilterData(data);
//       setSelectButton("all");
//       return;
//     }
//     const filter = data?.filter(item =>
//       item.type.toLowerCase().includes(type.toLowerCase())
//     );
//     setFilterData(filter || null);
//     setSelectButton(type);
//   }

//   const searchThings = (e: ChangeEvent<HTMLInputElement>) => {
//     const searchResult = e.target.value;
//     console.log(searchResult);
//     if (searchResult === "") {
//       setFilterData(data);
//       return;
//     }
//     const filter = data?.filter(item =>
//       item.type.toLowerCase().includes(searchResult.toLowerCase())
//     );
//     setFilterData(filter || null);
//   }

//   const filterBtn = [
//     {
//       name: "All",
//       type: "all"
//     },
//     {
//       name: "Approved",
//       type: "approved"
//     },
//     {
//       name: "Rejected",
//       type: "rejected"
//     },
//     {
//       name: "Pending",
//       type: "pending"
//     }
//   ];

//   if (error) return <div>{error}</div>;
//   if (loading) return <div>loading...</div>;
//   return (
//     <div>
//       <div>
//         <div>
//           <input onChange={searchThings} placeholder='Search' />
//         </div>
//         <div>
//           {filterBtn.map(value => (
//             <button
//               key={value.name}
//               onClick={() => FilterThings(value.type)}
//               className={selectButton === value.type ? 'selected' : ''}
//             >
//               {value.name}
//             </button>
//           ))}
//         </div>
//       </div>
//       <SearchResult data={filterData} />
//     </div>
//   );
// }

// export default SearchThing;
// "use client";

// import React, { useEffect, useState, ChangeEvent } from 'react';
// import SearchResult from './SearchResult';

// const BASE_URL = "http://localhost:3000/api/FilterData";

// interface DataItem {
//   name: string;
//   type: string;
//   text: string;
// }

// const SearchThing: React.FC = () => {
//   const [data, setData] = useState<DataItem[] | null>(null);
//   const [filterData, setFilterData] = useState<DataItem[] | null>(null);
//   const [selectButton, setSelectButton] = useState<string>("all");
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     setLoading(true);
//   //     try {
//   //       const response = await fetch(BASE_URL);
//   //       const json: DataItem[] = await response.json();
//   //       setData(json);
//   //       setFilterData(json);
//   //       setLoading(false);
//   //     } catch (error) {
//   //       setError("Unable to fetch data");
//   //       setLoading(false);
//   //     }
//   //   };
//   //   fetchData();
//   // }, []);

//   const FilterThings = (type: string) => {
//     if (type === "all") {
//       setFilterData(data);
//       setSelectButton("all");
//       return;
//     }
//     const filter = data?.filter(item =>
//       item.type.toLowerCase().includes(type.toLowerCase())
//     );
//     setFilterData(filter || null);
//     setSelectButton(type);
//   };

//   const searchThings = (e: ChangeEvent<HTMLInputElement>) => {
//     const searchResult = e.target.value;
//     console.log(searchResult);
//     if (searchResult === "") {
//       setFilterData(data);
//       return;
//     }
//     const filter = data?.filter(item =>
//       item.type.toLowerCase().includes(searchResult.toLowerCase())
//     );
//     setFilterData(filter || null);
//   };

//   const filterBtn = [
//     {
//       name: "All",
//       type: "all"
//     },
//     {
//       name: "Approved",
//       type: "approved"
//     },
//     {
//       name: "Rejected",
//       type: "rejected"
//     },
//     {
//       name: "Pending",
//       type: "pending"
//     }
//   ];

//   // if (error) return <div>{error}</div>;
//   // if (loading) return <div>Loading...</div>;

//   return (
//     <div className='w-full h-full flex justify-center items-center'>
//       <div className='relative w-[90%] h-[90%] flex justify-center items-center border flex-col mt-10'>
//         <div className='absolute top-10'>
//           <input onChange={searchThings} placeholder='Search' className='border-2 border-gray-500 rounded-lg px-10 py-3' />
//         </div>
//         <div className='absolute top-32 flex justify-center items-center flex-col'>
          
//           {filterBtn.map(value => (
//             <button
//               key={value.name}
//               onClick={() => FilterThings(value.type)}
//               className={selectButton === value.type ? 'selected' : ''}
//             >
//               {value.name}
//             </button>
//           ))}
//         </div>
//       </div>
//       <SearchResult data={filterData} />
//     </div>
//   );
// };

// export default SearchThing;


"use client";

import React, { useEffect, useState, ChangeEvent } from 'react';
import SearchResult from './Filter/SearchResult';
import { FiFilter } from "react-icons/fi";
const BASE_URL = "http://localhost:3000/api/FilterData";
interface DataItem {
  name: string;
  status: string;
  ApplyDate:string
}

const SearchThing: React.FC = () => {
  const [data, setData] = useState<DataItem[] | null>(null);
  const [filterData, setFilterData] = useState<DataItem[] | null>(null);
  const [selectButton, setSelectButton] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const result: DataItem[] = await response.json();
        setData(result);
        setFilterData(result);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const FilterThings = (type: string) => {
    if (type === "all") {
      setFilterData(data);
      setSelectButton("all");
      return;
    }
    const filter = data?.filter(item =>
      item.status.toLowerCase().includes(type.toLowerCase())
    );
    setFilterData(filter || null);
    setSelectButton(type);
  };

  const searchThings = (e: ChangeEvent<HTMLInputElement>) => {
    const searchResult = e.target.value;
    console.log(searchResult);
    if (searchResult === "") {
      setFilterData(data);
      return;
    }
    const filter = data?.filter(item =>
      item.status.toLowerCase().includes(searchResult.toLowerCase())
    );
    setFilterData(filter || null);
  };

  const filterBtn = [
    {
      name: "All",
      type: "all"
    },
    {
      name: "Approved",
      type: "approved"
    },
    {
      name: "Rejected",
      type: "rejected"
    },
    {
      name: "Pending",
      type: "pending"
    }
  ];

  if (error) return <div className='w-full text-3xl font-bold h-full flex justify-center items-center'>{error}</div>;
  if (loading) return <div className='w-full text-3xl font-bold h-full flex justify-center items-center'>Loading...</div>;

  return (
    <>
    <div className='flex justify-center items-center'>
    <div className='w-[90%] h-[90%] flex items-center flex-col mt-10'>
      <div className='flex flex-col items-center'>
        <input onChange={searchThings} placeholder='Search' className='border-2 border-gray-500 rounded-lg px-3 mt-7 py-2' />
        <div className='flex mt-4 items-center gap-8'>
          <FiFilter className='mt-1' />
          <p className=''>Filter</p>
          <select
            onChange={(e) => FilterThings(e.target.value)}
            className='focus:outline-none'
            value={selectButton}
          >
            {filterBtn.map(value => (
              <option key={value.name} value={value.type}>
                {value.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  </div>
   <SearchResult data={filterData} />
   </>
  );
};

export default SearchThing;
