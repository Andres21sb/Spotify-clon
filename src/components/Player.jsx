import { usePlayerStore } from "@/store/playerStore";
import { useState, useRef, useEffect } from "react";
import { Slider } from "./Slider";
export const Pause = ({ className }) => (
  <svg
    className={className}
    role="img"
    height="16"
    width="16"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
);

export const Play = ({ className }) => (
  <svg
    className={className}
    role="img"
    height="16"
    width="16"
    aria-hidden="true"
    viewBox="0 0 16 16"
  >
    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
  </svg>
);

export const Next = ({ className }) => (
  <svg
    data-encore-id="icon"
    role="img"
    aria-hidden="true"
    viewBox="0 0 16 16"

    className={className}
  >
    <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path>
  </svg>
);

export const Previous = ({ className }) => (
  <svg
    data-encore-id="icon"
    role="img"
    aria-hidden="true"
    viewBox="0 0 16 16"
    className={className}
  >
    <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path>
  </svg>
);

// Volumes svgs
export const VolumeMute = ({ className }) => (
  <svg
    fill="currentColor"
    height={16}
    width={16}
    role="presentation"
    aria-label="Volume off"
    aria-hidden="true"
    viewBox="0 0 16 16"
    className="Svg-sc-ytk21e-0 kcUFwU"
  >
    <path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"></path>
    <path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path>
  </svg>
);

export const VolumeLow = ({ className }) => (
  <svg
    fill="currentColor"
    height={16}
    width={16}
    role="presentation"
    aria-label="Volume low"
    aria-hidden="true"
    viewBox="0 0 16 16"
    className="Svg-sc-ytk21e-0 kcUFwU"
  >
    <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path>
  </svg>
);

export const VolumeMedium = ({ className }) => (
  <svg
    fill="currentColor"
    height={16}
    width={16}
    role="presentation"
    aria-label="Volume medium"
    aria-hidden="true"
    viewBox="0 0 16 16"
    className="Svg-sc-ytk21e-0 kcUFwU"
  >
    <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z"></path>
  </svg>
);

export const VolumeHigh = ({ className }) => (
  <svg
    fill="currentColor"
    height={16}
    width={16}
    role="presentation"
    aria-label="Volume high"
    aria-hidden="true"
    viewBox="0 0 16 16"
    className="Svg-sc-ytk21e-0 kcUFwU"
  >
    <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path>
    <path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path>
  </svg>
);

const CurrentSong = ({ image, title, artists }) => {
  return (
    <div className={`flex items-center gap-5 relative overflow-hidden`}>
      <picture
        className={"w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden"}
      >
        <img src={image} alt={title} />
      </picture>
      <div className="flex flex-col">
        <h3 className={`font-semibold text-sm block `}>{title}</h3>
        <span className={`text-xs opacity-80`}>{artists?.join(", ")}</span>
      </div>
    </div>
  );
};

const VolumeControl = () => {
  const volume = usePlayerStore((state) => state.volume);
  const setVolume = usePlayerStore((state) => state.setVolume);
  const previousVolumeRef = useRef(volume);

  const isVolumeMuted = volume < 0.1;

  const handleClickVolume = () => {
    previousVolumeRef.current = volume;
    setVolume(0);
  };

  const handleClickSilence = () => {
    setVolume(previousVolumeRef.current);
  };

  const handleVolume = () => {
    if (isVolumeMuted) {
      handleClickSilence();
    } else {
      handleClickVolume();
    }
  };

  return (
    <div className="flex justify-center gap-x-2">
      <button
        className="opacity-70 hover:opacity-100 transition"
        onClick={handleVolume}
      >
        {volume >= 0.1 && volume < 0.4 ? (
          <VolumeLow />
        ) : volume >= 0.4 && volume < 0.7 ? (
          <VolumeMedium />
        ) : volume >= 0.7 ? (
          <VolumeHigh />
        ) : (
          <VolumeMute />
        )}
      </button>
      <Slider
        defaultValue={[100]}
        max={100}
        min={0}
        value={[volume * 100]}
        className="hidden w-[95px] sm:flex"
        onValueChange={(value) => {
          const [newVolume] = value;
          const volumeValue = newVolume / 100;
          setVolume(volumeValue);
        }}
      />
    </div>
  );
};

const SongControl = ({ audio }) => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    audio.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime);
  };

  const duration = audio?.current?.duration ?? 0;

  const formatTime = (time) => {
    if (isNaN(time)) {
      return "00:00";
    }
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  return (
    <div className="flex gap-x-3 text-xs pt-2">
      <span className="opacity-50 w-12 text-right">
        {formatTime(currentTime)}
      </span>
      <Slider
        defaultValue={[0]}
        value={[currentTime]} //122s -> 2:02
        max={duration}
        min={0}
        className="w-[125px] md:w-[400px]"
        onValueChange={(value) => {
          const [newTime] = value;
          audio.current.currentTime = newTime;
        }}
      />
      <span className="opacity-50 w-12">{formatTime(duration)}</span>
    </div>
  );
};

export function Player() {
  const { currentMusic, setCurrentMusic, isPlaying, setIsPlaying, volume } = usePlayerStore(
    (state) => state
  );
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef();

  const { playlist } = currentMusic;

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    const { song, playlist, songs } = currentMusic;
    if (song) {
      const src = `/music/${playlist?.id}/0${song?.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.volume = volume;
      audioRef.current.play();
    }
  }, [currentMusic]);

  //useEffect for the queue of songs in currentMusic dictionary everytime playlist changes
  useEffect(() => {
    //if no playlist, return
    if (!playlist) return;
    const {song} = currentMusic;
    fetch(`/api/get-songs-by-playlist-id.json?id=${playlist?.id}`)
    .then((res) => res.json())
    .then((data) => {
      const { songs } = data;
      //filter songs with index greater than current song
      const filteredSongs = songs.filter((s) => s.id >= song.id);
      setCurrentMusic({ ...currentMusic, songs: filteredSongs });
    });
  }, [playlist]);

  //play/pause handle
  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  //next song handle
  const handleNext = () => {
    const { song, playlist, songs } = currentMusic;
    // if no song, return
    if (!song) return;
    //find index of current song
    const currentIndex = songs.findIndex((s) => s.id === song.id);
    //last index exception
    if (currentIndex === songs.length - 1) {
      setCurrentMusic({ ...currentMusic, song: songs[0] });
      return;
    }
    //next index
    const nextIndex = (currentIndex + 1) ;
    setCurrentMusic({ ...currentMusic, song: songs[nextIndex] });
  };

  //previous
  const handlePrevious = () => {
    const { song, playlist, songs } = currentMusic;
    // if no song, return
    if (!song) return;
    //find index of current song
    const currentIndex = songs.findIndex((s) => s.id === song.id);
    //first index exception
    if (currentIndex === 0) {
      setCurrentMusic({ ...currentMusic, song: songs[songs.length - 1] });
      return;
    }
    //previous index
    const previousIndex = (currentIndex - 1) ;
    setCurrentMusic({ ...currentMusic, song: songs[previousIndex] });
  };

  return (
    <div className="flex flex-row justify-between w-full px-1 z-50">
      <div className="w-[160px] md:w-[350px]">
        <CurrentSong {...currentMusic.song} />
      </div>
      <div className="grid place-content-center gap-4 flex-1 ">
        <div className="flex justify-center flex-col items-center">
          <div className='flex flex-row gap-2'>
          <button title="Previous song" onClick={handlePrevious}>
            <Previous className='w-4 h-4 fill-zinc-400 hover:fill-white transition duration-300
            hover:scale-105'/>
          </button>
          <button className="bg-white rounded-full p-2" onClick={handleClick}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <button title="Next song" onClick={handleNext}>
            <Next className='w-4 h-4 fill-zinc-400 hover:fill-white transition duration-300
            hover:scale-105'/>
          </button>
          </div>
          <SongControl audio={audioRef} />
          <audio ref={audioRef} />
        </div>
      </div>
      <div className="grid place-content-center">
        <VolumeControl />
      </div>
    </div>
  );
}
