import { PropTypes } from "prop-types";
import '../../styles/components/subcomponent/icon-link.css'

const IconLink = ({link, source}) => {
    return ( 
        <a href={link} className="icone" target="_blank" rel="noreferrer">
            <img src={source}/>
        </a>
    );
}

IconLink.propTypes = {
    link: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired
}

export default IconLink;