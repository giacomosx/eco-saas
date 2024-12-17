import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RdoPage from "./pages/RdoPage";
import SettingsPage from "./pages/SettingsPage";
import QuotesPage from "./pages/QuotesPage";
import NewRdoPage from "./pages/NewRdoPage";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/rdo" element={<RdoPage />} />
                <Route path="/new-rdo" element={<NewRdoPage />} />
                <Route path={"/impostazioni"} element={<SettingsPage />} />
                <Route path="/preventivi" element={<QuotesPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
