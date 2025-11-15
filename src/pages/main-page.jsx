import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
    const [showContact, setShowContact] = useState(false);

    return (
        <div className="min-h-screen bg-base-100 text-base-content flex flex-col justify-center items-center p-8">
            <div className="text-center mb-12">
                <div className="flex justify-center mb-4 w-full">
                    <div className="hover-3d">
                        <figure className="max-w-60 rounded-2xl border-3 border-purple-500 shadow-xl/30">
                            <img src="/profile-pic/profile-pic.jpeg" alt="Profile Picture" />
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
                <h2 className="text-4xl font-bold">Ayden Coleman</h2>
            </div>

            <div className="flex justify-center gap-6 mb-8 bg-base-200 p-2 rounded-lg shadow-ld">
                <a href="https://github.com/AtomicOutlaw" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                    <img src="/logos/github-logo.png" alt="GitHub" className="w-8 h-8"/>
                </a>

                <a href="https://linkedin.com/in/ayden-coleman-273a27266" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                    <img src="/logos/linkedin-logo.png" alt="LinkedIn" className="w-8 h-8"/>
                </a>

                <a href="https://www.youtube.com/@AyTheGamezone2" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                    <img src="/logos/youtube-logo.png" alt="YouTube" className="w-8 h-8"/>
                </a>

                <a href="https://instagram.com/thegamezone2" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                    <img src="/logos/instagram-logo.png" alt="Instagram" className="w-8 h-8"/>
                </a>
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

            <div className="max-w-2xl mx-auto bg-base-200 p-8 rounded-lg text-white shadow-xl">
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
                            <p>The world was more bright than ever.</p>
                            <p>This made me feel like a nostalgic.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}