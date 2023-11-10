import React from 'react';
import { useParams } from 'react-router-dom';

export default function Videos() {
    const { keyword } = useParams();
    return (
        <div>
            Videos {keyword ? `${keyword}` : '🔥🔥🔥🔥🔥'}
            {/* keyword가 존재 한다면 keyword에 관한 리스트를, 없다면 🔥🔥🔥🔥🔥을 보여준다 */}
        </div>
    );
}