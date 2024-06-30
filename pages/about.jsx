import ButtonCV from '../components/ButtonCV';
import styles from '../styles/About.module.css';


const AboutPage = () => {
  return (
    <article className={ styles.cointainer }>
      <h1>Sobre mim</h1>
      <b>Formado em Análise e Desenvolvimento de Sistemas<br /> Pós-graduado em Desenvolvimento Web Full-Stack<br />Mestrando em Marketing Digital e Big Data <br/>Formado na Trybe.</b>
      <p>Sou programador web que se dedica ao desenvolvimento de sites, blogs e sistemas. Utilizo diferentes linguagens de programação e também a plataforma Wordpress, que é uma ferramenta muito popular para criação de websites e blogs. </p>
      <p>Como programador web, minha principal tarefa é criar e manter aplicações web, garantindo que o conteúdo esteja bem organizado e a navegação seja fácil e intuitiva para os usuários.</p>
      <p>Também trabalho em equipe, em colaboração com outros profissionais, como designers e especialistas em marketing digital, a fim de criar projetos completos e bem-sucedidos.</p>
      <h2>Algumas stacks que tenho conhecimento.</h2>
      <section className={ styles.containerSkills }>
        <div className={ styles.skill }>
          <h4><b>Front-end</b></h4>
          <ul>
            <li>HTML5 Semântico</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Context API</li>
            <li>Redux</li>
            <li>Bootstrap</li>
            <li>SASS/SCSS</li>
            <li>Styled Components</li>
            <li>Handlebras</li>
            <li>Wordpress</li>
          </ul>
        </div>
        <div className={ styles.skill }>
          <h4><b>Back-end</b></h4>
          <ul>
            <li>Node.js</li>
            <li>Typescript</li>
            <li>Python</li>
            <li>Express</li>
            <li>JWT</li>
            <li>Sequelize</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className={ styles.skill }>
          <h4><b>Testes</b></h4>
          <ul>
            <li>Mocha</li>
            <li>Chai</li>
            <li>Sinon</li>
            <li>RTL</li>
          </ul>
        </div>
      </section>
      <ButtonCV/> 
    </article>
  );
};

export async function getStaticProps () {
  return {
    props: { title: 'Sobre mim' },
  };
}

export default AboutPage;
