import React from 'react';

function Textarea({label, name, value, onChange}){
    return(
        <div>
            <label>
                {label}
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    );
}

export default Textarea;