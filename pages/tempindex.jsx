import Head from 'next/head'
import Login from '../appBuild/Components/login/login'
import { useSession } from 'next-auth/client'

export default function Home() {

  const [session, loading] = useSession();

  return (
    <div>
      <Login />
      <main>
        <h1>Authentication in Next.js app using Next-Auth</h1>
        <div>
          {loading && <div>Loading...</div>}
          {session && <> <p style={{ marginBottom: '10px' }}> Welcome, {session.user.name ?? session.user.email}</p> <br />
          </>}
          {!session &&
            <>
              <p> Please Sign in</p>
            </>
          }
        </div>
      </main>
    </div>
  )
}
