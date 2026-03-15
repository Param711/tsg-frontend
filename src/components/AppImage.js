import Image from "next/image";

const FALLBACK_IMAGE_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23333'/%3E%3Ctext x='50%25' y='50%25' dy='.35em' text-anchor='middle' font-family='Arial' font-size='18' fill='%23fbbf24'%3ENo Image%3C/text%3E%3C/svg%3E";

export default function AppImage({ alt = "", src, ...props }) {
  const safeSrc =
    src == null || (typeof src === "string" && src.trim() === "")
      ? FALLBACK_IMAGE_SRC
      : src;

  return <Image alt={alt} src={safeSrc} {...props} />;
}
