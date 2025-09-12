
import { useState } from 'react';
import Sidebar from './components/SideBar';
import MainContent from './components/MainContent';
import '../src/styles/Chatbot.css'

  function App() {
            const [isSidebarOpen, setSidebarOpen] = useState(false);
            const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

            return (
                <div className="app-container">
                    <Sidebar isSidebarOpen={isSidebarOpen} />
                    <div className="content-wrapper">
                        {isSidebarOpen && <div onClick={toggleSidebar} className="mobile-overlay"></div>}
                        <MainContent toggleSidebar={toggleSidebar} />
                    </div>
                </div>
            );
        }

export default App;