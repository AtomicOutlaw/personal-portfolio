import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
    const [showContact, setShowContact] = useState(false);

    return (
        <div className="min-h-screen bg-base-100 text-base-content flex flex-col justify-center items-center p-8">
            <div className="text-center mb-12">
                <div className="flex justify-center mb-4 w-full">
                    <div className="bg-black rounded-lg flex items-center justify-center"
                         style={{width: '240px', height: '310px'}}>
                        <img src="/path-to-profile-image.jpg" alt="Profile Photo"
                             className="w-full h-full object-cover rounded-lg"/>
                    </div>
                </div>
                <h2 className="text-3xl font-semibold">Ayden Coleman</h2>
            </div>

            <div className="flex justify-center gap-6 mb-8 bg-base-200 p-2 rounded-lg">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:scale-110 transition-transform">
                    <img src="/path-to-github-icon.png" alt="GitHub" className="w-8 h-8"/>
                </a>

                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:scale-110 transition-transform">
                    <img src="/path-to-linkedin-icon.png" alt="LinkedIn" className="w-8 h-8"/>
                </a>

                <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:scale-110 transition-transform">
                    <img src="/path-to-youtube-icon.png" alt="YouTube" className="w-8 h-8"/>
                </a>

                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:scale-110 transition-transform">
                    <img src="/path-to-instagram-icon.png" alt="Instagram" className="w-8 h-8"/>
                </a>
            </div>

            <div className="flex justify-center gap-8 mb-16">
                <Link to="/projects" className="btn btn-primary text-primary-content px-6 py-2">
                    Projects
                </Link>
                <Link to="/resume" className="btn btn-primary text-primary-content px-6 py-2">
                    Resume
                </Link>
                <button className="btn btn-primary text-primary-content px-6 py-2" onClick={() => setShowContact(!showContact)}>
                    {showContact ? 'Description' : 'Contact Info'}
                </button>
            </div>

            <div className="max-w-2xl mx-auto bg-base-200 p-8 rounded-lg">
                {showContact ? (
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-center">Contact Info</h3>
                        <div className="text-center space-y-4">
                            <p className="text-lg">Phone: [Your Phone Number]</p>
                            <p className="text-lg">Email: [Your Email Address]</p>
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