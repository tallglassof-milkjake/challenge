import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import LandingView from "./pages/LandingView";
import LoginView from "./pages/LoginView";
import SignupView from "./pages/SignupView";
import HomeView from "./pages/HomeView";

import TopSpacer from "./components/TopSpacer";
import BottomSpacer from "./components/BottomSpacer";
import MobileNav from "./components/MobileNav";

import { useToken } from "./utilities/useToken";

function App() {
    const { token, setToken } = useToken();
    
    return (
        <div className="wrapper relative">
            <TopSpacer />
            <div
                className="h-fit"
            >
                <BrowserRouter>
                    <Routes>
                        {/* Public routes accessible without a token */}
                        <Route path="/landing" element={<LandingView />} />
                        {!token && <Route path="/signup" element={<SignupView />} />}
                        
                        {/* Redirect to home page if not logged in */}
                        {!token && <Route path="*" element={<Navigate to="/landing" />} />}
                        {token && <Route path="/challenge" element={<HomeView />} />}
                        
                        {/* Login route accessible only when not logged in */}
                        {!token && <Route path="/login" element={<LoginView setToken={setToken} />} />}
                    </Routes>
                </BrowserRouter>
            </div>
            {token && <MobileNav />}
            <BottomSpacer />
        </div>
    );
}

export default App;
