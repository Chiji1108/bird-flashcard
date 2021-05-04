import Button from "./Button";
import Icon from "./Icon";
import { useState } from "react";
import Modal from "./Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar, A11y, Lazy, Virtual } from "swiper";
import ReactPlayer from "react-player/lazy";

SwiperCore.use([Scrollbar, A11y, Lazy, Virtual]);

export interface GridItemProps {
  name: string;
  url: string;
  images: string[];
  audioIds: string[];
}

export default function GridItem({
  name,
  url,
  images,
  audioIds,
}: GridItemProps) {
  const [isFlipped, setFlipped] = useState(false);
  const [isDone, setDone] = useState(false);
  const [open, setOpen] = useState(false);
  if (isDone) return null;
  return (
    <li className="aspect-w-1 aspect-h-1 relative bg-white rounded-lg overflow-hidden shadow">
      <div className="flex items-center justify-center rounded-lg overflow-hidden">
        {isFlipped ? (
          <a
            href={url}
            className="flex justify-center items-center space-x-2 group"
          >
            <p className="text-xl font-bold group-hover:underline">{name}</p>
            <Icon className="text-gray-500 group-hover:text-gray-700">
              open_in_new
            </Icon>
          </a>
        ) : (
          <Swiper
            className="w-full h-full"
            // navigation
            scrollbar={{ draggable: true }}
            preloadImages={false}
            lazy
            virtual
          >
            {images.map((image) => (
              <SwiperSlide key={image}>
                <img
                  loading="lazy"
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {audioIds.length === 0 || (
          <>
            <Modal open={open} onClose={() => setOpen(false)}>
              <div className="flex flex-col space-y-4">
                {audioIds.map((audioId) => (
                  <ReactPlayer
                    key={audioId}
                    url={`https://www.youtube.com/watch?v=${audioId}`}
                  />
                ))}
              </div>
            </Modal>
            <div className="absolute left-2 bottom-2 z-10">
              <Button onClick={() => setOpen(true)}>
                <Icon className="text-white">volume_up</Icon>
              </Button>
            </div>
          </>
        )}

        <div className="absolute right-2 bottom-2 z-10">
          <Button onClick={() => setFlipped((prev) => !prev)}>
            <Icon className="text-white">flip</Icon>
          </Button>
        </div>
        <div className="absolute right-2 top-2 z-10">
          <Button onClick={() => setDone(true)}>
            <Icon className="text-white">done</Icon>
          </Button>
        </div>
      </div>
    </li>
  );
}
