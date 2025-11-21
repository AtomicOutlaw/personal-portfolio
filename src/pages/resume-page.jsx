import { Link } from 'react-router-dom';
import resumeImg from '../assets/resume/Ayden-Coleman-Resume-img.jpg';
import resumePdf from '../assets/resume/Ayden-Coleman-Resume.pdf';
import downloadIcon from '../assets/logos/download-icon.png';
import arrowIcon from '../assets/logos/arrow-l-icon.png';

export default function ResumePage() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumePdf;
        link.download = 'Ayden-Coleman-Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-base-100 text-base-content p-4">
            <div className="text-center mb-6">
                <h1 className="text-3xl md:text-4xl font-bold">Resume</h1>
            </div>

            {/* Mobile Layout - Buttons on top */}
            <div className="lg:hidden flex justify-between items-center mb-4">
                <Link to="/" className="btn btn-primary text-base-content flex items-center gap-2">
                    <img src={arrowIcon} className="w-4 h-4" />
                    Back
                </Link>
                <button
                    className="btn btn-primary text-base-content flex items-center gap-2"
                    onClick={handleDownload}
                >
                    <img src={downloadIcon} className="w-4 h-4" />
                    Download
                </button>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6">
                    {/* Desktop Back Button */}
                    <div className="hidden lg:flex flex-shrink-0">
                        <Link to="/" className="btn btn-primary text-base-content flex flex-col items-center gap-0.25">
                            Back
                            <img src={arrowIcon} className="w-4 h-4"/>
                        </Link>
                    </div>

                    {/* Resume Image */}
                    <div className="bg-base-300 rounded-box p-4 lg:p-6 w-full">
                        <div className="bg-black mx-auto shadow-xl overflow-hidden rounded-lg">
                            <img
                                src={resumeImg}
                                alt="Resume"
                                className="w-full h-auto object-contain"
                                style={{ maxHeight: '70vh' }}
                            />
                        </div>
                    </div>

                    {/* Desktop Download Button */}
                    <div className="hidden lg:flex flex-shrink-0 self-end">
                        <button className="btn btn-primary text-base-content flex flex-col items-center gap-0.25" onClick={handleDownload}>
                            Download
                            <img src={downloadIcon} className="w-4 h-4"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}