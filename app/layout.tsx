import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr"><body><a className="skip" href="#contenu">Aller au contenu</a>{children}</body></html>;
}
