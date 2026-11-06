import "./globals.css";
import {AdminThemeProvider} from "@/components/AdminThemeProvider";
export const metadata={referrer:"strict-origin" as const,...(process.env.DEPLOYMENT_ENV==="test"?{robots:{index:false,follow:false}}:{})};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr"><head><link rel="stylesheet" href="https://use.typekit.net/mah7tat.css"/></head><body><AdminThemeProvider>{process.env.DEPLOYMENT_ENV==="test"&&process.env.DATA_MODE==="mock"&&<div className="demo-notice" role="note">Démonstration · données fictives</div>}<a className="skip" href="#contenu">Aller au contenu</a>{children}</AdminThemeProvider></body></html>;
}
