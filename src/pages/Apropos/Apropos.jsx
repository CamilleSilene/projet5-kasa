import Banner from "../../components/Agencement/Banner";
import imgBannerAbout from "../../assets/BannerAbout.png";
import Collapse from "../../components/Collapse/collapse";
import aproposJson from "../../data/apropos";


const Apropos = () => {
    return (
        <div>
            <div className="container-banner-apropos">
                <Banner bgImage={imgBannerAbout} alt="montagne et forêt"/>
            </div>
            <div className="container-CollapseApropos">
            
                {aproposJson.map((item, index) => {
                return <Collapse key={index} titre={item.title}>{item.description}</Collapse> }
                )}
            
            </div>
            
        </div>
    )
}

export default Apropos