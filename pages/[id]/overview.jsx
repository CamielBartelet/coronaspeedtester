import { useRouter } from "next/router";
import { signIn, signOut } from "next-auth/client";
import useSWR from "swr";
import HeadMenu from "../../appBuild/Components/appComp/menu/menu";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const Overview = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: account, error } = useSWR(
    id ? `/api/accounts/${id}` : null,
    fetcher
  );

  if (error) return <p>Failed to load</p>;
  if (!account) return <p>Loading...</p>;

  return (
    <>
      {!account && (
        <>
          Niet ingelogd <br />
          <button onClick={signIn}>Log in</button>
        </>
      )}
      {account && (
        <>
          <main className="container">
            <div className="mainApp">
              <div className="headerWrap">
                <HeadMenu loggedIn={true} account={account} />
              </div>
              <div className="mainContent">
                <div className="orderTable">Bestellingen</div>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default Overview;
