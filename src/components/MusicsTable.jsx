import { usePlayerStore } from "@/store/playerStore";

export const PlayTable = ({ className }) => (
  <svg
    data-encore-id="icon"
    role="img"
    aria-hidden="true"
    fill="currentColor"
    className={className}
    viewBox="0 0 24 24"
  >
    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
  </svg>
);

export const PauseTable = ({ className }) => (
  <svg
    data-encore-id="icon"
    role="img"
    aria-hidden="true"
    fill="currentColor"
    className={className}
    viewBox="0 0 24 24"
  >
    <path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
);

export const Time = () => (
  <svg
    role="img"
    height="16"
    width="16"
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="currentColor"
  >
    <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
    <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path>
  </svg>
);

export function MusicsTable({ songs, playlist }) {
  const { isPlaying,setIsPlaying,currentMusic,setCurrentMusic } = usePlayerStore((state) => state);

  const isThisSongPlaying = (song) => {
    return currentMusic.song?.id === song.id && currentMusic.playlist?.id === playlist.id;
  };

  const handlePlay = (song) => {
    if (isThisSongPlaying(song)) {
      setIsPlaying(!isPlaying);
      return;
    }
    setCurrentMusic({ ...currentMusic, song, playlist });
    setIsPlaying(true);
  };

  return (
    <table className="table-auto text-left min-w-full divide-y divide-gray-500/20">
      <thead className="">
        <tr className="text-gray-400 text-sm">
          <th className="px-4 py-2 font-light">#</th>
          <th className="px-4 py-2 font-light">Title</th>
          <th className="px-4 py-2 font-light">Album</th>
          <th className="px-4 py-2 font-light">
            <Time />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="h-[16px]"></tr>
        {songs.map((song, index) => (
          <tr
            key={song?.id}
            className="text-zinc-300 text-sm font-light hover:bg-white/10 rounded-lg
         overflow-hidden transition duration-300 group"
            onClick={() => handlePlay(song)}
          >
            <td className="px-4 py-2 rounded-tl-lg rounded-bl-lg w-5 group">
              <span className="group-hover:hidden">{index + 1}</span>
              <span className="hidden group-hover:inline transition duration-300 delay-500">
                {currentMusic.song?.id === song.id
                && currentMusic.playlist?.id === playlist?.id
                && isPlaying ? 
                <PauseTable className="w-4 h-4 text-white" />
              : <PlayTable className="w-4 h-4 text-white" />}
              </span>
            </td>
            <td className="px-4 py-2 flex gap-3">
              <picture className="">
                <img className="w-11 h-11" src={song.image} alt={song.title} />
              </picture>
              <div className="flex flex-col">
                <h3 className={`${currentMusic?.song?.id === song.id ? 'text-green-600':'text-white'} text-base font-normal`}>
                  {song.title}
                </h3>
                <span>{song.artists.join(", ")}</span>
              </div>
            </td>
            <td className="px-4 py-2">{song.album}</td>
            <td className="px-4 py-2 rounded-tr-lg rounded-br-lg">
              <Time duration={song.duration} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
