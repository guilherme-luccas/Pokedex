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
            {loading ? (
              <Spinner
                radius={20}
                color={"#000000"}
                stroke={2}
                visible={true}
              />
            ) : (
              <img
                src="https://marcas-logos.net/wp-content/uploads/2020/03/GITHUB-LOGO.png"
                alt=""
              />
            )}
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
