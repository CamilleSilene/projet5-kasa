import './collapse.scss';
import React, {useState} from 'react';

const Collapse = (props) => {
    //useState retourne un tableau de 2 éléments isCollapsed et setIsCollapsed
    //initialement c'est à false car il faut pouvoir faire apparaître le texte

    const [isCollapsed, setIsCollapsed] = useState(false);
    //si l'élément est étendu alors on lui ajoute la classe 'collapsed'    
    //création de toutes les classes qui vont aller dans l'élément
    // 'collapse' et 'collapsed' 

    const classes = "collapse" + ( isCollapsed ? ' collapsed' : '' );

    return (
        <div className={classes}>
            <div className='collapse-header'>
                <span className='collapse-title'>{props.titre}</span>
                <button onClick={() => { 
                    setIsCollapsed(!isCollapsed);
                    } }>
                    <div className="fa-solid fa-chevron-up"></div>
                </button>
            </div>
            <div className='collapse-content'>{props.children}</div>
        </div>
      );
    }

    export default Collapse