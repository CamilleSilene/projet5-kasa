import Banner from "../../components/Agencement/Banner"
import imgBannerHome from "../../assets/BannerHome.png"
import CardsList from "../../components/CardsList/CardsList"


const Accueil = () => {
    return (
        <div>
            <Banner title="Chez vous, partout et ailleurs" bgImage={imgBannerHome} alt="falaise et océan" />
            <CardsList />
        </div>
    )
}

export default Accueil