import React from 'react'
import Icon1 from '../assest/icon2.jpeg'
import Icon2 from '../assest/icon3.jpg'
import Icon3 from '../assest/icon4.jpg'
import Icon4 from '../assest/icon5.jpg'
import Icon5 from '../assest/icon6.jpg'

import DataTable from 'react-data-table-component';


const stylePick = {
  "Low": 'bg-[#03C9D7]',
  "Medium": 'bg-[#FB9678]',
  "High": 'bg-[#FEC90F]',
  "Critical": 'bg-[#E46A76]',
  "Moderate":'bg-[#00C292]'
}

const customStyles = {
  headCells: {
      style: {
          paddingLeft: '35px',
          fontWeight: 'bold',
          color: 'gray',
          fontSize: '16px'
      },
  }
};

const columns = [
    {
        name: 'Assigned',
        selector: row => (
                <div className='flex items-center p-4'>
                    <img className='w-10 h-10 rounded-full ' src={row.img} />
                    <div className='font-semibold ml-4 text-[120%] font-semibold '>{row.Assigned}</div>
                </div>),
    },
    {
        name: 'Name',
        selector: row => <div className='text-center text-gray-500 text-sm '>{row.Name}</div>,
    },
    {
        name: 'Priority',
        selector: row => <div className={`${stylePick[row.Priority]} text-center px-2 py-1 rounded-md font-semibold text-white`}>{row.Priority}</div>,
    },
    {
        name: 'Budget',
        selector: row => (<div className='font-semibold ml-2 text-[120%] text-center'>${row.Budget}k</div>),
    }
];

const data = [
    {
        id: 1,
        img:Icon1,
        Assigned: 'Sunil Joshi',
        Name: 'Elite Admin',
        Priority: 'Low',
        Budget: '3.9',
    },
    {
        id: 2,
        img:Icon2,
        Assigned: 'Andrew McDownland',
        Name: 'Real Homes WP Theme',
        Priority: 'Medium',
        Budget: '24.5',
    },
    {
        id: 3,
        img:Icon3,
        Assigned: 'Christopher Jamil',
        Name: 'MedicalPro WP Theme',
        Priority: 'High',
        Budget: '12.8',
    },
    {
        id: 4,
        img:Icon4,
        Assigned: 'Nirav Joshi',
        Name: 'Hosting Press HTML',
        Priority: 'Critical',
        Budget: '2.4',
    },
    {
        id: 5,
        img:Icon5,
        Assigned: 'Micheal Doe',
        Name: 'Helping Hands Theme',
        Priority: 'Moderate',
        Budget: '9.3',
    }
]

const MyComponent = ()=> {
    return (
        <div className=' bg-white rounded-3xl shadow-md mx-5 my-5 p-8'>
          <div className='w-full text-2xl flex justify-between'>
            <div className='px-4 py-4 font-semibold'>Product Performance</div>
            <div class="border border-gray-200 px-3 py-2 mb-6 rounded-md text-sm text-center">
            <select>
                <option value="March 2021">March 2021</option>
                <option value="April 2021">April 2021</option>
                <option value="May 2021">May 2021</option>
            </select>
            </div>
          </div>
          <DataTable
              columns={columns}
              data={data}
              customStyles={customStyles}
          />
        </div>
    );
};

export default MyComponent