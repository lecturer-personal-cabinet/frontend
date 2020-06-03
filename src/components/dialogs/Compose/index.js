import React from 'react';
import './Compose.css';

export default function Compose(props) {
  const [value, setValue] = React.useState('');

    return (
      <div className="compose">
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          className="compose-input"
          placeholder="Сообщение ..."
          onKeyDown={e => {
            if (e.key === 'Enter') {
              if(value.length > 1) {
                setValue('');
                props.onSubmit(value);
              }
            }
          }}
        />
      </div>
    );
}