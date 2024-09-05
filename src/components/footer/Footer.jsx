import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}><p>Delilah's</p></div>
      <div className={styles.text}>
        Delilah's creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
