import { useSession, signIn, signOut } from "next-auth/client";
export default function Login() {
  const [session] = useSession();

  const handleSignin = (e) => {
    e.preventDefault();
    signIn();
  };
  const handleSignout = (e) => {
    e.preventDefault();
    signOut();
  };
  return (
    <div className="header">
      {session && (
        <a href="#" onClick={handleSignout} className="btn-signin">
          Sign out
        </a>
      )}
      {!session && (
        <a href="#" onClick={handleSignin} className="btn-signin">
          Sign in
        </a>
      )}
    </div>
  );
}
