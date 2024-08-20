import { Navigate, useParams } from "react-router-dom";
import logementsJson from "../../data/logements";

import "./logement.scss";
import Collapse from "../../components/Collapse/collapse";
import SlideShow from "../../components/Slideshow/Slideshow";

//hook useParams prend les paramètres de l'URL définis dans les routes : ici 'id'
//on filtre les logements par id dans le fichier json
//le filtre renvoie le tableau logements contenant 0 ou 1 logement (défini dans les paramètres)
//dans le cas de 0 logement, aucun logement avec l'id n'a été trouvé
//redirection page Error

const Location = () => {
  const { id } = useParams();
  const logements = logementsJson.filter((logement) => logement.id === id);
  if (logements.length === 0) {
    return <Navigate to="/Error" />;
  }

  const logement = logements[0];
  return (
    <div className="logementBody">
      <div className="slideShow-container">
        {" "}
        <SlideShow slides={logement.pictures} />{" "}
      </div>
      <div>
      <div className="first-block col-mobile-1 col-desktop-2">
        <h1 className="text-primary">{logement.title}</h1>
        <div className="locationLogement">
          <span>{logement.location}</span>
        </div>
        <div className="tagLogement">
          {logement.tags.map((tag, index) => {
            return (
              <span className="badge background-primary text-white" key={index}>
                {tag}
              </span>
            );
          })}
        </div>
      </div>
      
        <div class="second-block  col-mobile-1 col-desktop-2">
          <div className="starLogement">
            {Array.from(Array(5), (e, index) => {
              const starClass = index < logement.rating ? "fa-star-active text-primary" : "fa-star-inactive";
              const starClasses = `fa-solid fa-star ${starClass}`;
              return <i key={index} className={starClasses}></i>;
            })}
          </div>
          <div className="hostLogement">
            <div className="hostLogementName text-primary">
              {logement.host.name}
            </div>
            <img className="hostLogementImg" src={logement.host.picture} alt="host" />
          </div>

        </div>
      </div>
      
      <div className="collapseWrapperLogement">
        <Collapse titre="Description" css="col-mobile-1 col-desktop-2">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse titre="Equipements" css="col-mobile-1 col-desktop-2">
          <ul className="collapse-list-style-none">
            {logement.equipments.map((equipment, index) => {
              return <li key={index}> {equipment}</li>;
            })}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default Location;
