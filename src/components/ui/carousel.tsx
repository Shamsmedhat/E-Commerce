"use client";

import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import AutoHeight from "embla-carousel-auto-height";

import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";
import { useTranslations } from "next-intl";

// types
type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

// context
const CarouselContext = React.createContext<CarouselContextProps | null>(null);

// hook
function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
        watchResize: (api) => {
          return true;
        },
      },
      [AutoHeight(), ...(plugins || [])],
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    console.log(api?.selectedScrollSnap());
    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          // onKeyDownCapture={handleKeyDown}
          className={cn("embla__viewport embla relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex flex-row-reverse",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className,
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "embla__slide min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className,
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const t = useTranslations();
  const { orientation, scrollPrev, canScrollPrev, api } = useCarousel();

  if (api?.selectedScrollSnap() === 2) {
    return null;
  }

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "w-fit",
        // orientation === "horizontal"
        //   ? "-left-12 top-1/2 -translate-y-1/2"
        //   : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <span className="">{t("2u4eUsf3q1Edy9Y_OQPIo")}</span>
    </Button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

interface CarouselNextProps extends ButtonProps {
  placeOrder: (data: PlaceOrder) => void; // Define the type of placeOrder as needed
  orderData: PlaceOrder; // Define the type of orderData as needed
}

const CarouselNext = React.forwardRef<HTMLButtonElement, CarouselNextProps>(
  (
    {
      className,
      variant = "outline",
      size = "icon",
      placeOrder,
      orderData,
      ...props
    },
    ref,
  ) => {
    const t = useTranslations();
    const { orientation, scrollNext, canScrollNext, api } = useCarousel();

    if (!canScrollNext) {
      return null;
    }

    function handleSubmit() {
      if (orderData.paymentType && api?.selectedScrollSnap() === 1) {
        placeOrder(orderData);
      }
      scrollNext();
    }
    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "w-fit bg-primary",
          // orientation === "horizontal"
          //   ? "-right-12 top-1/2 -translate-y-1/2"
          //   : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        // disabled={!canScrollNext}
        onClick={handleSubmit}
        {...props}
      >
        <span className="uppercase">{t("loUw4i8Jb9RuNCI9wl1zD")}</span>
      </Button>
    );
  },
);
CarouselNext.displayName = "CarouselNext";

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
