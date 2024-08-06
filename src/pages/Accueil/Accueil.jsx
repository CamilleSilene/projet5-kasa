import Banner from "../../components/Agencement/Banner"
import imgBannerHome from "../../assets/BannerHome.png"

const Accueil = () => {
    return (
        <div>
            <Banner title="Chez vous, partout et ailleurs" bgImage={imgBannerHome} alt="falaise et océan" />

        </div>
    )
}

export default Accueil