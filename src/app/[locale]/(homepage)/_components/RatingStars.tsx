import { Star } from "lucide-react";

type Rating = {
    starsNumber?: number;
    rate: number;
    size?: number;
    weight?: number;
    color?: string;
};

export default function RatingStars({ starsNumber = 5, rate = 5, size = 18, weight = 0.5, color = "#FEBF31" }: Rating) {
    return (
        <span className="flex">
            {Array.from({ length: starsNumber || 5 }, (_, i) => (
                <Star
                    key={i}
                    fill={rate > i ? "#FEBF31" : "rgb(60 64 59 / 0.3)"}
                    size={size}
                    strokeWidth={weight}
                    color={color}
                />
            ))}
        </span>
    );
}
