import Me from '../images/me.png'
import '../styles/components/img-area.css'

const ImgArea = () => {
    return (
        <article className='img-area'>
            <img src={Me} alt='Fotografia de Nicolas Coiado' className='img-me'/>
        </article> 
     )
}
 
export default ImgArea;
