import { Icon } from '@iconify/react';

const SelectOptn = ({fieldName, name, value, onChange, error, icon, optns}) => {
    return (
        <div className='m-1 p-1'>
            <label className='text-lg'>
          {fieldName} :
          <div className='flex justify-evenly space-x-2'>
            
          <Icon icon={icon} width={36} className='rounded-full'/>
          <select
            className='border-2 border-gray-300 rounded-md size-9 w-full'
   
            name={name}
            value={value}
            onChange={onChange}
         
          >
            <option value="">Select a position</option>
            {
                optns.map((optn) => (
                  <option key={optn} value={optn}>
                    {optn}
                  </option>
                ))
            }

         </select>

          </div>  
          {error && <span className='text-red-500 text-sm font-bold'>{error}*</span>}
        </label>
        </div>
    );
}

export default SelectOptn;