import Me from '../images/me.png'
import '../styles/components/img-area.css'

const ImgArea = () => {
    return (
        <aside className='img-area'>
            <img src={Me} alt='Fotografia de Nicolas Coiado' className='img-me'/>
        </aside> 
     )
}
 
export default ImgArea;
