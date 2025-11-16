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
        <div className="min-h-screen bg-base-100 text-base-content p-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold">Resume</h1>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                        <Link to="/" className="btn btn-primary text-base-content flex flex-col items-center gap-0.25">
                            Back
                            <img src={arrowIcon} className="w-4 h-4"/>
                        </Link>
                    </div>

                    <div className="bg-base-300 rounded-box p-6 flex-1">
                        <div className="bg-black mx-auto shadow-xl" style={{width: '100%', maxWidth: '816px', height: '1056px', aspectRatio: '8.5/11'}}>
                            <img src={resumeImg} alt="Resume Image" className="w-full h-full object-contain" />
                        </div>
                    </div>

                    <div className="flex-shrink-0 self-end">
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