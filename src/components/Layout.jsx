import { Outlet } from "react-router-dom";
import SkipLink from "./SkipLink";
import IconSprite from "./IconSprite";
import UtilityBar from "./UtilityBar";
import Header from "./Header";
import Footer from "./Footer";
import CallBar from "./CallBar";
import Chatbot from "./Chatbot";
import Analytics from "./Analytics";

export default function Layout() {
  return (
    <>
      <SkipLink />
      <IconSprite />
      <Analytics />
      <UtilityBar />
      <Header />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <CallBar />
      <Chatbot />
    </>
  );
}
