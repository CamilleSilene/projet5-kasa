import { Link } from 'react-router-dom'


const Card = (props) => {
    return (
        <Link className='ficheLogement background-primary col-desktop-3 col-mobile-1' to={`/logement/${props.id}`  } >
            <div  id={`ficheLogement-${props.id}`}>
                <img src={props.cover} alt=""/>
                <h1 className='text-tertiary'>{props.title}</h1>
                <div>{props.children}</div>
            </div>
        </Link>
    )
}

export default Card