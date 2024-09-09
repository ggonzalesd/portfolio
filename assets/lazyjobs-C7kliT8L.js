import{u as c,j as e,c as s}from"./index-BrquNFvY.js";import{r as i,a as o,n as l,t as m,m as x,b as p,c as y,p as b,d as h}from"./typeorm-Dz8OvTjY.js";const d="border-b-2 border-l-2 border-r-2 border-t-2 border-b-zinc-100 border-l-zinc-700 border-r-zinc-100 border-t-zinc-700";function k(a){const n=c();return e.jsxs("div",{className:s("flex flex-col border-[1px] p-2","border-black/25","dark:rounded-md dark:border-cyan/40 dark:bg-primarydark/30"),children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("picture",{className:"hidden sm:flex",children:e.jsx("img",{src:a.src,alt:a.name,className:s("aspect-square h-24 w-24 border-t-2 object-contain",d,"dark:rounded-md dark:border-cyan/70")})}),e.jsxs("div",{className:"flex flex-col justify-between py-1",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:a.positions.map(r=>e.jsx("span",{className:s("bg-gradient-to-r from-secondary to-primary px-1 text-sm text-black/75",d,"dark:rounded-md dark:border-cyan/40 dark:from-secondarydark dark:to-secondarydark dark:text-cyan"),children:r},r))}),e.jsx("span",{className:"text-lg underline",children:a.name}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("span",{children:[n.text(a.start.month)," ",a.start.year]}),e.jsx("div",{className:"my-1 w-[2px] bg-zinc-600 dark:bg-cyan"}),e.jsx("span",{children:a.end!==void 0?`${n.text(a.end.month)} ${a.end.year}`:"Current"}),e.jsx("div",{className:"my-1 hidden w-[2px] bg-zinc-600 sm:visible dark:bg-cyan"}),e.jsxs("span",{className:s(d,"px-1 text-sm italic text-black/75","dark:rounded-md dark:border-cyan/40 dark:from-secondarydark dark:to-secondarydark dark:text-cyan"),children:[a.time," ",n.text("app.month.name")]})]})]})]}),e.jsxs("div",{className:s("my-2 flex flex-wrap items-center gap-2 p-2",d,"dark:rounded-md dark:border-cyan/40 dark:from-secondarydark dark:to-secondarydark dark:text-cyan"),children:[e.jsx("span",{children:"Technologies"}),a.technologies.map((r,t)=>e.jsx("picture",{children:e.jsx("img",{src:r,className:"h-8 w-8"})},t))]}),e.jsx("div",{children:e.jsx("ul",{className:"flex flex-col",children:a.descriptions.map((r,t)=>e.jsx("li",{children:e.jsxs("span",{children:["• ",r]})},t))})})]})}const j="/portfolio/assets/agiletech-CeQ7pTC3.jpg";function f(){return e.jsx(e.Fragment,{children:e.jsx(k,{src:j,positions:["Fullstack practicante","React","NestJs","PostgreSQL"],name:"Grupo Agiletech Peru Enterprise Solutions S.A.C",technologies:[i,o,l,m,x,p,y,b,h],start:{month:"app.month.04-april",year:2024},end:{month:"app.month.08-august",year:2024},time:5,descriptions:["Implementación de landing pages con React, Vite, y Tailwind.","Desarrollo de API REST con NestJS, TypeScript, y PostgreSQL para un proyecto de gestión de agrícola y un videojuego.","Mantenimiento de proyectos web basados en React y Material UI."]})})}export{f as default};
