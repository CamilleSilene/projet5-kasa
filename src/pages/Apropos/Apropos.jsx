import Banner from "../../components/Agencement/Banner";
import imgBannerAbout from "../../assets/BannerAbout.png";
import Collapse from "../../components/Collapse/collapse";
import aproposJson from "../../data/apropos";
import './apropos.scss';

const Apropos = () => {
    return (
        <div>
            <Banner bgImage={imgBannerAbout} alt="montagne et forêt"/>
            <div className="containerCollapseApropos">            
            
            {aproposJson.map((item, index) => {
                
            
              return <Collapse key={index} titre={item.title}>{item.description}</Collapse> }
              
            )}
            
            </div>
            
        </div>
    )
}

export default Apropos