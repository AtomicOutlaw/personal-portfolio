import { Link } from 'react-router-dom';

export default function ResumePage() {
    const handleDownload = () => {
        // Replace with your actual resume file path
        const link = document.createElement('a');
        link.href = '/path-to-your-resume.pdf'; // Update this path
        link.download = 'Ayden-Coleman-Resume.pdf';
        link.click();
    };

    return (
        <div className="min-h-screen bg-base-100 text-base-content p-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold">Resume</h1>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                        <Link to="/" className="btn btn-primary text-base-content">
                            Back
                        </Link>
                    </div>

                    <div className="bg-base-300 rounded-box p-6 flex-1">
                        <div className="bg-black mx-auto shadow-lg" style={{width: '100%', maxWidth: '816px', height: '1056px', aspectRatio: '8.5/11'}}>
                            <img src="/path-to-your-resume-image.jpg" alt="Resume Image" className="w-full h-full object-contain" />
                        </div>
                    </div>

                    <div className="flex-shrink-0 self-end">
                        <button className="btn btn-primary text-base-content" onClick={handleDownload}>
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}