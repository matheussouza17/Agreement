import { useState, CSSProperties } from 'react';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const [noButtonStyle, setNoButtonStyle] = useState<CSSProperties>({});

  const handleYesClick = () => {
    const phoneNumber = '64999199972'; // Substitua pelo seu número de telefone com o código do país, por exemplo, '5511999999999'
    const message = 'Oi, aceitooo :)';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappURL;
  };

  const moveButton = () => {
    const generatePosition = (min: number, max: number) => {
      return `${Math.random() * (max - min) + min}%`;
    };
    setNoButtonStyle({
      position: 'absolute',
      top: generatePosition(10, 500),
      left: generatePosition(10, 110),
    });
    console.log('opa, desviei...');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.question}>Aceita sair comigo?</h2>
      <div className={styles.buttonContainer}>
        <button className={styles.btn} onClick={handleYesClick}>SIM</button>
        <button
          className={styles.btn}
          style={noButtonStyle}
          onMouseEnter={moveButton}
          onClick={moveButton}
        >
          NÃO
        </button>
      </div>
    </div>
  );
}