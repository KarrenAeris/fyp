import Head from 'next/head'
import { TheModels } from '../components/models/TheModels'
import { TheBanner } from '../components/TheBanner'
import { TheQuotes } from '../components/TheQuotes';

export default function Home() {
  const models = [
    {
      name: 'Tower',
      price: 59,
    },
    {
      name: 'Tower',
      price: 59,
    },
    {
      name: 'Tower',
      price: 59,
    },
  ];

  return (
    <>
      <Head>
        <title>3D Model</title>
        <meta name="description" content="3D Model" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-20">
        {/* <TheBanner />
        <TheModels models={models} /> */}
        <TheQuotes />
      </main>
    </>
  )
}
