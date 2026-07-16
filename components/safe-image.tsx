import Image from "next/image";
import { existsSync } from "node:fs";
import { join } from "node:path";

export function SafeImage({src,alt,className="",priority=false}: {src:string;alt:string;className?:string;priority?:boolean}) {
  const exists = existsSync(join(process.cwd(), "public", src.replace(/^\//, "")));
  return <div className={`safe-image ${className} ${exists ? "has-image" : "image-fallback"}`}>
    {exists ? <Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 900px) 100vw, 50vw"/> : <><span className="fallback-line"/><img src="/icon.svg" alt="" aria-hidden="true"/></>}
  </div>;
}
