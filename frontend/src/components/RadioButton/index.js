import React from 'react';
import Radio from '@mui/material/Radio';
import './style.css';

function RadioButton({ selectedValue, handleChange }) {
  return (
    <div className='radioOptions'>
      <div>
        <Radio
          sx={{
            color: '#FFD3CA',
            '&.Mui-checked': {
              color: '#EB8F7A',
            },
          }}
          checked={selectedValue === 'all'}
          onChange={(e) => handleChange(e.target)}
          value='all'
        />
        <span>All</span>
      </div>
      <div>
        <Radio
          sx={{
            color: '#FFD3CA',
            '&.Mui-checked': {
              color: '#EB8F7A',
            },
          }}
          checked={selectedValue === 'true'}
          onChange={(e) => handleChange(e.target)}
          value='true'
        />
        <span>priority</span>
      </div>
      <div>
        <Radio
          sx={{
            color: '#FFD3CA',
            '&.Mui-checked': {
              color: '#EB8F7A',
            },
          }}
          checked={selectedValue === 'false'}
          onChange={(e) => handleChange(e.target)}
          value='false'
        />
        <span>Normal</span>
      </div>
    </div>
  );
}

export default RadioButton;
