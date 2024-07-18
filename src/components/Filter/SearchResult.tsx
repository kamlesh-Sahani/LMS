// import React from 'react';

// interface DataItem {
//     name: string;
//     status: string;
//     ApplyDate: string
// }

// interface SearchResultProps {
//     data: DataItem[] | null;
// }

// const SearchResult: React.FC<SearchResultProps> = ({ data: items }) => {
//     return (
//         <div className='border flex justify-center items-center'>
//             <div>
//                 {items?.map(item => (
//                     <div key={item.name}>
//                         <div>
//                             {/* <p>{item.name}</p>
//               <p>{item.text}</p> */}
//                             <div>
//                                 <table >
//                                     <thead>
//                                         <tr>
//                                             <td>Types Of Leave</td>
//                                         </tr>
//                                         <tr>
//                                             <td>Leave Status</td>
//                                         </tr>
//                                         <tr>
//                                             <td>Apply Date</td>

//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         <tr>
//                                             <td>{item.name}</td>
//                                             <td>{item.ApplyDate}</td>
//                                             <td>{item.status}</td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </div>

//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default SearchResult;
import React from 'react';

interface DataItem {
    name: string;
    status: string;
    ApplyDate: string;
}

interface SearchResultProps {
    data: DataItem[] | null;
}

const SearchResult: React.FC<SearchResultProps> = ({ data: items }) => {
    return (
        <div className='border mt-5 flex justify-center items-center'>
            <div>
                <table className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-gray-50'>
                        <tr>
                            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                Types Of Leave
                            </th>
                            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                Leave Status
                            </th>
                            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                Apply Date
                            </th>
                        </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200'>
                        {items?.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{item.name}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{item.status}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{item.ApplyDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SearchResult;
