import Title from '../components/Title';
import styles from './page.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <Title apiRouteName='hello' />
    </main>
  );
};

export default Home;
