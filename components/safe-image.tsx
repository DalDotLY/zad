import Image from "next/image";

export function SafeImage({src,alt,className="",priority=false,position="50% 50%"}: {src:string;alt:string;className?:string;priority?:boolean;position?:string}) {
  return <div className={`safe-image ${className}`}>
    <Image src={src} alt={alt} fill priority={priority} loading={priority ? "eager" : "lazy"} sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1000px) calc(100vw - 64px), 50vw" style={{objectPosition:position}} unoptimized/>
  </div>;
}
