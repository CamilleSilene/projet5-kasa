import { useParams } from "react-router-dom";

import logements from '../../data/logements';

const Location = () => {
    const { id } = useParams();
    const logement = logements.filter((l) => l.id === id )[0];

    return (
        <div>
            <h1>{logement.titre}</h1>
        </div>
    )
}

export default Location