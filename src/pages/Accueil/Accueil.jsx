import Banner from "../../components/Agencement/Banner"
import imgBannerHome from "../../assets/BannerHome.png"
import logements from "../../data/logements.json"
import Card from "../../components/CardsList/Card/Card"
import './accueil.scss'

const Accueil = () => {
    return (
        <>
        <div className="container-bannerhome">
            <Banner css="hidden-mobile" bgImage={imgBannerHome} alt="falaise et océan" >Chez vous, partout et ailleurs</Banner>
            <Banner css="hidden-desktop align-left" bgImage={imgBannerHome} alt="falaise et océan" >Chez vous, <br/>partout et ailleurs</Banner>      
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