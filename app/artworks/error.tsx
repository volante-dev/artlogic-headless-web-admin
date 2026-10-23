"use client";
export default function Error({retry}:{retry:()=>void}){return <section><h1>Les œuvres ne peuvent pas être chargées</h1><p role="alert">Le service est momentanément indisponible.</p><button onClick={retry}>Réessayer</button></section>;}
