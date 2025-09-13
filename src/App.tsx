
import { useState } from 'react';
import Sidebar from './components/SideBar';
import MainContent from './components/MainContent';
import { ThemeProvider } from "./context/ThemeContext";

import '../src/styles/Chatbot.css'
import './index.css'

  function App() {
            const [isSidebarOpen, setSidebarOpen] = useState(false);
            const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

            return (
        <ThemeProvider>
                <div className="app-container">
                    <Sidebar isSidebarOpen={isSidebarOpen} />
                    <div className="content-wrapper">
                        {isSidebarOpen && <div onClick={toggleSidebar} className="mobile-overlay"></div>}
                        <MainContent toggleSidebar={toggleSidebar} />
                    </div>
                </div>
                </ThemeProvider>
            );
        }

export default App;