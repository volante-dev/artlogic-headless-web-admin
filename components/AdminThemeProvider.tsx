"use client";
import {ThemeProvider} from "@mui/material/styles";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v16-appRouter";
import {PublicationFeedbackProvider} from "./PublicationFeedback";
import theme from "@/app/theme/theme";
export function AdminThemeProvider({children}:{children:React.ReactNode}){
  return <AppRouterCacheProvider options={{key:"admin",enableCssLayer:true}}><ThemeProvider theme={theme}><PublicationFeedbackProvider>{children}</PublicationFeedbackProvider></ThemeProvider></AppRouterCacheProvider>;
}
