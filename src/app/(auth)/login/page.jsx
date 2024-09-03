import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <h3>OR</h3>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
