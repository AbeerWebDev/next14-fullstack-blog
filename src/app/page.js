import styles from './home.module.css'
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Creative Thoughts Agency.</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit..</p>
        <div className={styles.buttons}>
          <button className={styles.buttons}>Learn More</button>
          <button className={styles.buttons}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="https://images.pexels.com/photos/13417078/pexels-photo-13417078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.png" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default HomePage;
