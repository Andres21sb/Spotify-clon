import { usePlayerStore } from "@/store/playerStore";



export function SideMenuCard({ playlist }) {
  const { id, cover, title, artists, color } = playlist;    
  const { currentMusic } = usePlayerStore((state) => state);
  const currentPlaylist = currentMusic?.playlist;
  const artistsString = artists.join(", ");
  return (
    <a
      href={`/playlist/${id}`}
      className="playlist-item flex relative p-2 overflow-hidden items-center gap-5 rounded-md hover:bg-zinc-500"
    >
      <picture className="h-12 w-12 flex-none">
        <img
          src={cover}
          alt={`Cover of ${title} by ${artistsString}`}
          className="object-cover w-full h-full rounded-md"
        />
      </picture>
      <div className="flex flex-auto flex-col truncate">
        <h4 className={`font-semibold text-sm ${playlist.id === currentPlaylist?.id ? 'text-green-600' : 'text-white'}`} >{title}</h4>
        <span className="text-xs text-gray-400">{artistsString}</span>
      </div>
    </a>
  );
}
