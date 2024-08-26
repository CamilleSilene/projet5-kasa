import React, {useState} from 'react';

const Collapse = (props) => {
    //useState retourne un tableau de 2 éléments isCollapsed et setIsCollapsed
    //initialement c'est à false car il faut pouvoir faire apparaître le texte

    const [isCollapsed, setIsCollapsed] = useState(false);
    //si l'élément est étendu alors on lui ajoute la classe 'collapsed'    
    //création de toutes les classes qui vont aller dans l'élément
    // 'collapse' et 'collapsed' 

    const contentClasses = " collapse-content background-secondary " + ( isCollapsed ? ' collapse-content-padding' : '' );
    const classes = props.cssClasses + " collapse" + ( isCollapsed ? ' collapsed' : '' );
    return (
        <div className={classes}>
            <div className='collapse-header background-primary'>
                <span className='collapse-title text-tertiary'>{props.titre}</span>
                <button className='background-primary text-tertiary' onClick={() => { 
                    setIsCollapsed(!isCollapsed);
                    } }>
                    <div className="fa-solid fa-chevron-up"></div>
                </button>
            </div>
            <div className={contentClasses}>{props.children}</div>
        </div>
      );
    }

    export default Collapse