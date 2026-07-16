"use client";
import { useEffect } from "react";
export function MotionSystem(){
  useEffect(()=>{
    const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if(reduced)return;
    document.documentElement.classList.add("motion-ready");
    const nodes=document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:"0px 0px -6% 0px"});
    nodes.forEach(node=>observer.observe(node));
    return()=>observer.disconnect();
  },[]);
  return null;
}
