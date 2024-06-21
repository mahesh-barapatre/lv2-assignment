import React from 'react';
import { Icon } from '@iconify/react';

const FormFields = ({fieldName, type, name, value, onChange, error, icon, placeholder}) => {
    return (
        <div className='m-1 p-1'>
            <label className='text-lg'>
          {fieldName} :
          <div className='flex justify-evenly space-x-2'>
            
          <Icon icon={icon} width={36} className='rounded-full'/>
          <input
            className='border-2 border-gray-300 rounded-md size-9 p-2 w-full'
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />

          </div>  
          {error && <span className='text-red-500 text-sm font-bold'>{error}*</span>}
        </label>
        </div>
    );
}

export default FormFields;
