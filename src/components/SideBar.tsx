import { useState } from "react";
import { 
    //   BookOpenIcon,
    //   ChevronDownIcon,
    //   CompassIcon,
      PencilIcon,
      PlusIcon
     } from "./Icon";
import '../styles/sidebar.css'

        interface SidebarProps {
            isSidebarOpen: boolean;
        }

        const Sidebar = ({ isSidebarOpen }: SidebarProps) => {
            const [open, setOpen] = useState(false)
            const recentChats = [
                "Chatbot UI Design and Features", "Generating Animated Video...", "give same size and same ty...",
                "JavaScript Array Splice Expl...", "Greeting and Offer of Assist...", "Watermark Removal Ethics...",
                "Generative AI Pretraining Ex...", "Mutable vs. Immutable Obje...",
            ];

            return (
                <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                    <div className="sidebar-header">
                        <span className="gemini-title">TechnoAI</span>

                        {/* <span className="pro-badge">2.5 Pro</span> */}

                        {/* <ChevronDownIcon /> */}
                    </div>
                    <button className="new-chat-button">
                        <PencilIcon />
                        <span>New Chat</span>
                        <PlusIcon/>
                    </button>
                    <div className="sidebar-content">

                        {/* <nav className="sidebar-nav">
                            <h3 className="nav-title">Gems</h3>
                            <div className="nav-links">
                                <a href="#" className="nav-link"><BookOpenIcon /><span>Storybook</span></a>
                                <a href="#" className="nav-link"><CompassIcon /><span>Explore Gems</span></a>
                            </div>
                        </nav> */}

                        <nav className="sidebar-nav">
                            <h3 className="nav-title">Recent Chats</h3>
                            <div className="nav-links">
                                {recentChats.map((chat, index) => (
                                    <a href="#" key={index} className="nav-link">{chat}</a>
                                ))}
                            </div>
                        </nav>
                    </div>
                <div className="sidebar-footer">
                    <div className="settings-menu">
                      <button 
                        className="settings-toggle" 
                        onClick={() => setOpen(!open)}
                      >
                        ⚙ Settings{open ? "▴" : "▾"}
                      </button>
                      <ul className="settings-items" style={{ display: open ? "block" : "none" }}>
                        <li><a href="#">Profile Settings</a></li>
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Privacy & Security</a></li>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">About</a></li>
                      </ul>
                    </div>
                </div>
                              </aside>
            );
        }

export default Sidebar;