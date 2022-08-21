import styles from '/styles/Landing.module.css';
import Boilerplate from '../components/Boilerplate';

export default function Landing() {
  return (
    <>
      <Boilerplate />
      <div className={styles.mainBody}></div>
    </>
  );
}
