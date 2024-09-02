"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRef, useState } from "react";
import styles from "../productStyle.module.css";

const images = [
  "https://m.media-amazon.com/images/I/71hDhuRKjqL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/613y-nNxiwL._AC_SL1080_.jpg",
  "https://m.media-amazon.com/images/I/5123opPZhgL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/81bhWT9lUnL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/71vPp895rGL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/41iP1+gdguL._AC_SL1000_.jpg",
  "https://m.media-amazon.com/images/I/519dqKS1EhL._AC_SL1000_.jpg",
  "https://m.media-amazon.com/images/I/71jX5n3nuCL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/71XMpoSj+-L._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/61qQCRAQ3sL._AC_SL1500_.jpg",
];

export default function ProductGallery() {
  const [currentImg, setCurrentImg] = useState(images[0]);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const imageZoomRef = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [isZoomVisible, setIsZoomVisible] = useState(false);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const { offsetWidth, offsetHeight } = event.currentTarget;
    const x = (event.nativeEvent.offsetX * 100) / offsetWidth;
    const y = (event.nativeEvent.offsetY * 100) / offsetHeight;

    setPointer({ x, y });
    setIsZoomVisible(true);
  };

  const handleMouseLeave = () => {
    setIsZoomVisible(false);
  };

  function onClickDown() {
    if (currentImgIndex < images.length - 1) {
      setCurrentImgIndex((prevIndex) => prevIndex + 1);
      setCurrentImg(images[currentImgIndex + 1]);
    }
  }

  function onClickUp() {
    if (currentImgIndex > 0) {
      setCurrentImgIndex((prevIndex) => prevIndex - 1);
      setCurrentImg(images[currentImgIndex - 1]);
    }
  }

  return (
    <div className="flex flex-row-reverse justify-center gap-7">
      {/* Main Image Display */}
      <div
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        ref={imageZoomRef}
        className={`${styles.imageZoom} relative flex w-[60%] items-center justify-center rounded-lg border-2 border-primary-foreground/10 p-4`}
        style={
          {
            "--url": `url(${currentImg})`,
            "--zoom-x": `${pointer.x}%`,
            "--zoom-y": `${pointer.y}%`,
            "--display": isZoomVisible ? "block" : "none",
            "--opacity": 0,
          } as React.CSSProperties
        }
      >
        <img
          src={currentImg}
          className="relative z-50 h-[500px] w-full object-contain transition-all duration-500 ease-in-out"
          alt="Current Product"
        />
      </div>

      {/* Thumbnail and Controls Section */}
      <div className="flex flex-col items-center gap-y-1">
        <button
          className="rounded-lg border-2 border-primary-foreground/10 transition hover:scale-105 hover:border-primary"
          onClick={onClickUp}
          disabled={currentImgIndex === 0}
        >
          <ChevronUp size={20} className="text-primary-foreground/40" />
        </button>
        <div className={cn("overflow-hidden")}>
          <div
            className={cn(
              "flex max-h-[488px] flex-col gap-y-2 px-4 py-2 transition-transform duration-500 ease-in-out",
            )}
            style={{
              transform: `translateY(-${Math.min(
                currentImgIndex * 70, // Adjust this value based on thumbnail size and spacing
                (images.length - 6) * 80, // Ensure it doesn't translate too far if near the end
              )}px)`,
            }}
          >
            {images.map((img, index) => (
              <button
                className={`rounded-lg border-2 p-1 transition duration-300 ${
                  currentImg === img
                    ? "scale-105 border-primary"
                    : "border-primary-foreground/10 hover:scale-105 hover:border-primary"
                }`}
                key={img}
                onClick={() => {
                  setCurrentImg(img);
                  setCurrentImgIndex(index);
                }}
              >
                <img
                  src={img}
                  className="relative z-50 h-[60px] w-[60px] object-contain transition duration-300"
                  alt={`Thumbnail ${index + 1}`}
                />
              </button>
            ))}
          </div>
        </div>
        <button
          className="rounded-lg border-2 border-primary-foreground/10 transition hover:scale-105 hover:border-primary"
          onClick={onClickDown}
          disabled={currentImgIndex === images.length - 1}
        >
          <ChevronDown
            size={20}
            className="cursor-pointer text-primary-foreground/40"
          />
        </button>
      </div>
    </div>
  );
}
