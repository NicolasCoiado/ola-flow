import IconLink from './subcomponent/IconLink.jsx'
import Nv99 from '../images/icons/nv99.svg'
import Linkedin from '../images/icons/linkedin.svg'
import Github from '../images/icons/github.svg'
import Email from '../images/icons/email.svg'
import Behance from '../images/icons/behance.svg'
import Eu from '../images/me.png'
import '../styles/components/text-area.css'

const TextArea = () => {

    return(
        <main className="text-background">
            <h1>Olá, pessoal dos <span className='yellow'>Estúdios Flow!</span></h1>
            <div className='img-area-mobile'>
                <img src={Eu} alt='Fotografia de Nicolas Coiado' className='img-me-mobile'/>
            </div>
            <p>Vou começar me apresentando: me chamo <strong className='bold'>Nicolas Coiado</strong>, tenho 19 anos e fiz esta página somente para pedir uma oportunidade para vocês.</p>
            <p>Sou técnico em Desenvolvimento de Sistemas, estudante de <strong className='bold'>Ciência da Computação</strong> e um admirador do projeto que vocês construíram. Acompanho quase todos os podcasts e, durante o <strong className='bold'>Extra Flow do dia 15/06/2023</strong>, percebi que vocês estão investindo muito em <strong className='bold'>desenvolvimento web</strong>, que coincidentemente é a área na qual venho me especializando nos últimos tempos.</p>
            <p>Atualmente eu trabalho como editorador em uma empresa de tradução, e essa não é uma função que eu amo ter, pois está completamente fora da minha área de estudos e de interesse. Dito isso, fazem alguns meses que venho procurando um estágio para finalmente me profissionalizar como um desenvolvedor, porém até agora não consegui nada.</p>
            <p>Diante da minha situação atual, eu pensei: “Qual seria a empresa na qual eu sonho em trabalhar?”. Gastei um tempo com esse questionamento e então concluí: Os Estúdios Flow <strong className='bold'>possuem o projeto que mais me interessa</strong>. Acho que vocês de fato constroem algo <strong className='bold'>útil para a sociedade</strong>, e que eu adoraria fazer parte dessa construção.</p>
            <p>Como já mencionei, gostaria de trabalhar com a <strong className='bold'>equipe de desenvolvimento</strong>, porém, aceito qualquer vaga disponível. Eu gostaria de ajudar vocês a desenvolverem esse projeto maravilhoso e, por esse motivo, até limpo os banheiros se necessário.</p>
            <p>Possuo habilidades que vão além de programação, mas não vou me aprofundar muito nisso. Caso queiram saber mais sobre mim, acessem os links abaixo:</p>
            <div className='lista'>
                <IconLink link='https://nv99.com.br/user/nicolas.coiado' source={Nv99} />
                <IconLink link='https://www.linkedin.com/in/nicolascoiado/' source={Linkedin} />
                <IconLink link='https://github.com/NicolasCoiado' source={Github} />
                <IconLink link='mailto:nicolasmcoiado@gmail.com' source={Email} />
                <IconLink link='https://www.behance.net/nicolascoiado' source={Behance} />
            </div>
            
        </main>
    )
}
  
export default TextArea
  