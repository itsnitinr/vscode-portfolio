import styles from '../styles/ButtonCV.module.css'
const ButtonCV = () => {
  return(
      <button className={styles.container}>
      <a href="https://docs.google.com/uc?export=download&id=1TaKBf3J88BnNLmug-OIQ_TF9FCWgp0hD" download>
          Baixar Currículo
          <img src="/download.png" alt="Botão para baixar curriculo" />
        </a>
    </button>
  )
}

export default ButtonCV;