import React from 'react';

export default function Hello({ color, name, isSpecial }) {
    return (
        <div style={{ color }}>
            {isSpecial && <b>*</b>}
            안녕? {name}
        </div>
    );
}
