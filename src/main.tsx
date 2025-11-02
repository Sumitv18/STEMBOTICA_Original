import { Toaster } from "@/components/ui/sonner";
import { VlyToolbar } from "../vly-toolbar-readonly.tsx";
import { InstrumentationProvider } from "@/instrumentation.tsx";
import AuthPage from "@/pages/Auth.tsx";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import "./index.css";
import Home from "./pages/Home.tsx";
import Workshops from "./pages/Workshops.tsx";
import OnlineCourses from "./pages/OnlineCourses.tsx";
import NotFound from "./pages/NotFound.tsx";
import ATLLabSetup from "@/pages/ATLLabSetup";
import DIYSTEMKits from "@/pages/DIYSTEMKits";
import YearLongCurriculum from "@/pages/YearLongCurriculum";
import TeacherTraining from "@/pages/TeacherTraining";
import Profile from "@/pages/Profile";
import "./types/global.d.ts";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);



function RouteSyncer() {
  const location = useLocation();
  useEffect(() => {
    window.parent.postMessage(
      { type: "iframe-route-change", path: location.pathname },
      "*",
    );
  }, [location.pathname]);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data?.type === "navigate") {
        if (event.data.direction === "back") window.history.back();
        if (event.data.direction === "forward") window.history.forward();
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <VlyToolbar />
    <InstrumentationProvider>
      <ConvexAuthProvider client={convex}>
        <BrowserRouter>
          <RouteSyncer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/online-courses" element={<OnlineCourses />} />
            <Route path="/atl-lab-setup" element={<ATLLabSetup />} />
            <Route path="/diy-stem-kits" element={<DIYSTEMKits />} />
            <Route path="/year-long-curriculum" element={<YearLongCurriculum />} />
            <Route path="/teacher-training" element={<TeacherTraining />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/auth" element={<AuthPage redirectAfterAuth="/" />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </ConvexAuthProvider>
    </InstrumentationProvider>
  </StrictMode>,
);