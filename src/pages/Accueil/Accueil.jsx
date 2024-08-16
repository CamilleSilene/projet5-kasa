import Banner from "../../components/Agencement/Banner"
import imgBannerHome from "../../assets/BannerHome.png"
import logements from "../../data/logements.json"
import Card from "../../components/CardsList/Card/Card"
import './accueil.scss'

const Accueil = () => {
    return (
        <>
        <div className="container-bannerhome">
            <Banner title="Chez vous, partout et ailleurs" bgImage={imgBannerHome} alt="falaise et océan" />            
        </div>
        <div className="container-cardsList">
        <div className="CardsListWrapper">
            {
                logements.map( (logement)=> <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
                )
            }
       </div>
       </div>
             
      </>
    )
    
}

export default Accueil