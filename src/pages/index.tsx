import Head from "next/head";
import GridItem from "../components/GridItem";
import Grid from "../components/Grid";
import birds from "../data/birds.json";
import { useState } from "react";
import shuffle from "../utils/shuffle";
import Link from "../components/Link";

export default function Home() {
  const [list, setList] = useState([...birds]);

  return (
    //TODO : bg-gray-100
    <div>
      <Head>
        {/* TODO: */}
        <title>鳥33</title>
        <meta name="description" content="野鳥33種を覚えれるWebアプリです" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <main className="container mx-auto text-center p-6">
        <h1 className="mt-12 mb-6 text-6xl font-black">鳥33</h1>
        <p className="m-6">
          データ元:{" "}
          <Link href="https://www.birdfan.net/" className="hover:underline">
            BIRD FAN
          </Link>
        </p>
        <button
          onClick={() => setList((prev) => shuffle(prev))}
          className="mb-6 py-2 px-4 rounded-full bg-blue-500 hover:bg-blue-700 text-white font-bold"
        >
          シャッフル
        </button>

        <Grid>
          {list.map((bird) => (
            <GridItem key={bird.name} {...bird} />
          ))}
        </Grid>
      </main>
      <footer className="flex flex-col items-center justify-center p-4 mt-4">
        <p>created by 千々岩</p>
        <p>
          Twitter: <Link href="https://twitter.com/Chijidosu">@Chijidosu</Link>
        </p>
      </footer>
    </div>
  );
}
