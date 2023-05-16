// import ErrorBoundary from '@/components/ErrorBoundary';
// import FetchError from '@/components/FetchError';
// import Loading from '@/components/Loading';
import { apiUrl } from "@/constants/api";
import Link from 'next/link';
import { Suspense } from 'react';
import "server-only";
import PlayerList from './players/PlayerList';
import { zPlayers } from "./type";
import YoutubePlayer from '../components/YoutubePlayer';

// 1. 静的/動的レンダリングや再生成の間隔を指定
export const revalidate = 0;

export const metadata = {
  title: "List Players",
}

export default async function Page() {
  // 2. APIを用いたデータ取得
  // const players = await getPlayers();
  return (
    <main className="mx-2 sm:mx-4 relative">
        <YoutubePlayer />
      <h2 className='mb-6 text-gray-400 text-xs'>List Players</h2>
      { /* 3. Client ComponentsのSuspenseの使用 */ }
      {/* <ErrorBoundary fallback={<FetchError />}> */}
        {/* <Suspense fallback={<Loading />}> */}
          {/* <PlayerList initialState={players} /> */}
        {/* </Suspense> */}
      {/* </ErrorBoundary> */}

    </main>
  )
}

// export const getPlayers = async () => {
//   const res = await fetch(`${apiUrl}/players`, { cache: 'no-store' });
//   const data = await res.json();
//   const players = zPlayers.parse(data);
//   return players;
// };
