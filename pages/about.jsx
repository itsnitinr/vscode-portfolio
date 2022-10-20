import ButtonCV from '../components/ButtonCV';
import styles from '../styles/About.module.css';


const AboutPage = () => {
  return (
    <article className={ styles.cointainer }>
      <h1>Sobre mim</h1>
      <b>Formado em Análise e Desenvolvimento de Sistemas e formado na Trybe.</b>
      <p>A minha principal ferramenta de trabalho é o React, apesar de ter conhecimentos sobre desenvolvimento back-end, escolhi me aprofundar no front-end, especialmente no ecossistema do React.</p>
      <p>No momento estou consolidando conhecimento sobre Next.js e desenvolvimento com Typescript.</p>
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
    props: { title: 'About' },
  };
}

export default AboutPage;
