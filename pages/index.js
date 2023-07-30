import Head from 'next/head';
import homecss from '../styles/Home.module.css'

export default function Home() {
      return (
        <div>
          <Head>
            <title>Agile Process Website</title>
          </Head>
    
          <main>
            <h1 className={homecss.h1}>
                Hello Professor!
            </h1>
          </main>
        </div>
      )
    }