import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
    const [showContact, setShowContact] = useState(false);
    const [fabOpen, setFabOpen] = useState(false);

    return (
        <div className="min-h-screen bg-base-100 text-base-content flex flex-col justify-center items-center p-8">
            <div className="text-center mb-8">
                <div className="flex justify-center mb-4 w-full">
                    <div className="hover-3d">
                        <figure className="max-w-60 rounded-2xl border-3 border-purple-500 shadow-xl/30">
                            <img src="profile-pic/profile-pic.jpeg" alt="Profile Picture" />
                        </figure>
                        {/* 8 empty divs needed for the 3D effect */}
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <h2 className="text-4xl font-bold mb-2">Ayden Coleman</h2>

                <div className="flex justify-center items-center mb-8">
                    <div className="flex items-center gap-3 bg-base-200 p-4 rounded-lg shadow-xl">
                        {fabOpen && (
                            <div className="flex gap-3">
                                <a
                                    href="https://github.com/AtomicOutlaw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-circle btn-primary text-base-content shadow-lg hover:scale-110 transition-transform tooltip"
                                    data-tip="GitHub"
                                >
                                    <img src="logos/github-logo.png" alt="GitHub" className="w-6 h-6"/>
                                </a>

                                <a
                                    href="https://linkedin.com/in/ayden-coleman-273a27266"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-circle btn-primary text-base-content shadow-lg hover:scale-110 transition-transform tooltip"
                                    data-tip="LinkedIn"
                                >
                                    <img src="logos/linkedin-logo.png" alt="LinkedIn" className="w-6 h-6"/>
                                </a>
                            </div>
                        )}

                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-lg btn-circle btn-primary text-base-content shadow-xl hover:scale-110 transition-transform mx-2"
                            onClick={() => setFabOpen(!fabOpen)}
                        >
                            {fabOpen ? '✕' : '🔗'}
                        </div>

                        {fabOpen && (
                            <div className="flex gap-3">
                                <a
                                    href="https://www.youtube.com/@AyTheGamezone2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-circle btn-primary text-base-content shadow-lg hover:scale-110 transition-transform tooltip"
                                    data-tip="YouTube"
                                >
                                    <img src="logos/youtube-logo.png" alt="YouTube" className="w-6 h-6"/>
                                </a>

                                <a
                                    href="https://instagram.com/thegamezone2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-circle btn-primary text-base-content shadow-lg hover:scale-110 transition-transform tooltip"
                                    data-tip="Instagram"
                                >
                                    <img src="logos/instagram-logo.png" alt="Instagram" className="w-6 h-6"/>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-8 mb-16">
                <Link to="/projects" className="btn btn-primary text-base-content px-6 py-2">
                    Projects
                </Link>
                <Link to="/resume" className="btn btn-primary text-base-content px-6 py-2">
                    Resume
                </Link>
                <button className="btn btn-primary text-base-content px-6 py-2" onClick={() => setShowContact(!showContact)}>
                    {showContact ? 'Description' : 'Contact Info'}
                </button>
            </div>

            <div className="max-w-7xl mx-auto bg-base-200 p-8 rounded-lg text-white shadow-xl">
                {showContact ? (
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-center">Contact Info</h3>
                        <div className="text-center space-y-4">
                            <p className="text-lg">Phone: (306)-111-1111</p>
                            <p className="text-lg">Email: email@email.com</p>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-center">Description of Me</h3>
                        <div className="space-y-4 text-lg">
                            <p>I'm a passionate Computer Systems Technology student with a deep-seated love in all things tech, from computer hardware circuits to the logic of code and software, Im always down to learn how things work and run. A great strength of mine is problem solving; I thrive on the challenge of diagnosing an issue and finding a solution to get that issue solved. With my love of anything computers i also have knowledge in robotics with designing, building, and coding robots to do things. And knowledge in graphic arts letting me combine my technical skills with my computer artistic skills, this is with website building and crafting, to designing posters and characters digitally.</p>
                            <p>My technical expertise spans both hardware and software, with hands-on experience across multiple operating systems including Windows, Linux distributions (Mint, EndeavourOS, SteamOS), macOS, Android, and iOS. On the development side, I am proficient in the full stack of languages listed on my resume, from front-end HTML/CSS/JavaScript to back-end Java, C#, and Python. I have also applied my programming and designing skills in building and coding robots with Arduino. Furthermore, I leverage design tools like Figma and Affinity Photo for graphic arts and UI/UX design, adding a creative dimension to my technical profile.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}