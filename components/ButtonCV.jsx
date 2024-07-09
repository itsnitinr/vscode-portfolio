import styles from '../styles/ButtonCV.module.css'
const ButtonCV = () => {
  return(
      <button className={styles.container}>
      <a href="https://docs.google.com/uc?export=download&id=13Q96f1UOQfAskwA9C0Ykba_sWeqdOc4Q" download>
          Baixar Currículo
          <img src="/download.png" alt="Botão para baixar curriculo" />
        </a>  
    </button>
  )
}

export default ButtonCV;  