import { signIn, signOut, useSession } from "next-auth/client";
import styles from "../../../styles/SignInButton.module.css";
import Spinner from "react-spinner-material";

export function SignInButton() {
  const [session, loading] = useSession();

  return (
    <>
      {!session && (
        <>
          <button
            className={styles.buttonLogin}
            onClick={() => signIn("github")}
          >
            Login with Github
          </button>
        </>
      )}
      {session && (
        <>
          <button className={styles.buttonLogin} onClick={() => signOut()}>
            Sign out
          </button>
        </>
      )}
    </>
  );
}
