import './collapse.scss';
import React, {useState} from 'react';

const Collapse = (props) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <div>
            <div className='collapse-header'>
                <span>{props.titre}</span>
                <button onClick={() => setIsCollapsed(!isCollapsed)}>
                    {isCollapsed ? 'Réduire' : 'Développer'}
                </button>
            </div>
            {isCollapsed && <div className='collapse-content'>{props.children}</div>}
        </div>
      );
    }

    export default Collapse