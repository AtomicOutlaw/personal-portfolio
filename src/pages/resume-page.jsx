import { Link } from 'react-router-dom';

export default function ResumePage() {
    const handleDownload = () => {
        // Replace with your actual resume file path
        const link = document.createElement('a');
        link.href = 'resume/Ayden-Coleman-Resume.pdf'; // Update this path
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
                            <img src="/logos/arrow-l-icon.png" className="w-4 h-4"/>
                        </Link>
                    </div>

                    <div className="bg-base-300 rounded-box p-6 flex-1">
                        <div className="bg-black mx-auto shadow-xl" style={{width: '100%', maxWidth: '816px', height: '1056px', aspectRatio: '8.5/11'}}>
                            <img src="/resume/Ayden-Coleman-Resume-img.jpg" alt="Resume Image" className="w-full h-full object-contain" />
                        </div>
                    </div>

                    <div className="flex-shrink-0 self-end">
                        <button className="btn btn-primary text-base-content flex flex-col items-center gap-0.25" onClick={handleDownload}>
                            Download
                            <img src="/logos/download-icon.png" className="w-4 h-4"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}