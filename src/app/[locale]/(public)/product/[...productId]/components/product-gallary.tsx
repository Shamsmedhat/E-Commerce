"use client";

import { cn } from "@/lib/utils";
import { LuChevronDown, LuChevronUp, LuZoomIn } from "react-icons/lu";

import { useRef, useState } from "react";
import styles from "../product-style.module.css";
import Image from "next/image";

export default function ProductGallery({
  gallery,
}: {
  gallery: GalleryImage[];
}) {
  const images = gallery.map((product) => product.image.replaceAll(" ", "%20"));

  const [currentImg, setCurrentImg] = useState(images[0]);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

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
    <div className="flex w-full flex-shrink flex-row-reverse justify-between px-8 md:pe-8">
      {/* Main Image Display */}
      <div
        className={`${styles.imageZoom} relative flex w-full items-center justify-center rounded-lg border-2 border-primary-foreground/10 p-4`}
      >
        <Image
          src={currentImg}
          width={250}
          height={400}
          className="z-50 h-[400px] w-full object-contain transition-all duration-500 ease-in-out"
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
          <LuChevronUp size={20} className="text-primary-foreground/40" />
        </button>
        <div className={cn("overflow-hidden")}>
          <div
            className={cn(
              "flex max-h-[488px] flex-col gap-y-2 px-4 py-2 transition-transform duration-500 ease-in-out",
            )}
            style={{
              transform: `translateY(-${Math.min(
                currentImgIndex * 70, // Adjust this value based on thumbnail size and spacing
                // [5] for the number of thumbnail images want to show in page
                (images.length - 5) * 80, // Ensure it doesn't translate too far if near the end
              )}px)`,
            }}
          >
            {images.map((img, index) => (
              <button
                className={cn(
                  currentImg === img
                    ? "scale-105 border-primary shadow-md shadow-primary/60 backdrop-blur-3xl"
                    : "border-primary-foreground/10 shadow-sm hover:scale-105 hover:border-primary hover:shadow-primary/60 hover:backdrop-blur-3xl",
                  "rounded-lg border-2 p-1 transition duration-300",
                )}
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
          <LuChevronDown
            size={20}
            className="cursor-pointer text-primary-foreground/40"
          />
        </button>
      </div>
    </div>
  );
}
