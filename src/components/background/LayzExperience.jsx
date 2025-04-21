import dynamic from "next/dynamic";

export const LayzExperience = dynamic(()=>import("./Sphere.jsx"),{ssr:false})