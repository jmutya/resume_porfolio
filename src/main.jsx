import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './pages/home/home.jsx'
import Contacts from "./pages/contacts/contacts.jsx";
import Experience from "./pages/experience/experience.jsx";
import AccadHistory from './pages/accademicHistory/accadHistory.jsx';
import Certification from './pages/certification/certification.jsx';
import ProLanguage from './pages/laguage/proLaguage.jsx';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
    <Experience />
    <AccadHistory />
    <Certification />
    <ProLanguage />
    <Contacts />
    
  </StrictMode>
);
