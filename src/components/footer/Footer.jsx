import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <p>Blogger</p>
      </div>
      <div className={styles.text}>
        Blogger creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
