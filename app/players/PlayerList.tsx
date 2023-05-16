// 1. フックを用いているためClient Componentsとして定義
'use client'
import Link from "next/link";
import useSWR from "swr";
import { Player, zPlayers } from "../type";

type Props = {
  initialState: Player[];
}

const fetcher = (url: string) => fetch(url).then(async (res) => {
  const data = await res.json();
  const players = zPlayers.parse(data);
  return players;
});

const PlayerList: React.FC<Props> = ({ initialState }) => {
  // 2. クライアントサイドでのデータ取得
  const { data } = useSWR('/api/players', fetcher, { suspense: true, fallbackData: initialState })
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-y-10">
      {data.map(player => <PlayerItem key={player.id} item={player} />)}
    </div>
  )
}

type PlayerProps = {
  item: Player;
}

const PlayerItem: React.FC<PlayerProps> = ({ item }) => {
  return (
    <div className="bg-gray-100 rounded-lg relative p-5 pt-8">
      <h3 className="text-pink-500 hover:text-pink-700 text-lg md:text-xl font-semibold mb-3 break-all underline underline-offset-2">{item.name}</h3>
      <p className="text-gray-500 break-all">{item.explanation}</p>
    </div>
  );
};

export default PlayerList;
