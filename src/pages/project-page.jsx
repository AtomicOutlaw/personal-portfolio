import { Link } from 'react-router-dom';

export default function ProjectPage() {
    const projects = [
        {
            id: 1,
            name: "Project Options",
            groupMembers: ["John Doe", "Jane Smith", "Bob Johnson", "Alice Brown"],
            description: "A comprehensive project management system with advanced features for team collaboration and task tracking."
        },
        {
            id: 2,
            name: "Web Application",
            groupMembers: ["Sarah Wilson", "Mike Davis"],
            description: "A responsive web application built with modern frameworks for real-time data visualization."
        },
        {
            id: 3,
            name: "Mobile App",
            groupMembers: ["Tom Anderson", "Lisa Garcia", "Chris Lee", "Maria Martinez", "David Taylor"],
            description: "Cross-platform mobile application focusing on user experience and performance optimization."
        }
        // Add more projects as needed
    ];

    return (
        <div className="min-h-screen bg-base-100 text-base-content p-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold">Projects</h1>
            </div>

            <div className="max-w-6xl mx-auto">
                <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                        <Link to="/" className="btn btn-primary text-primary-content">
                            Back
                        </Link>
                    </div>

                    <div className="bg-base-300 rounded-box p-6 flex-1 overflow-hidden min-h-[500px]">
                        <div className="overflow-x-auto w-full">
                            <div className="flex space-x-6 items-start" style={{ width: `calc(${projects.length} * 400px + ${projects.length - 1} * 1.5rem)` }}>
                                {projects.map((project) => (
                                    <div key={project.id} className="flex-shrink-0">
                                        <div className="card w-80 bg-secondary text-secondary-content shadow-xl">
                                            <figure className="px-4 pt-4">
                                                <div className="bg-black w-full h-48 rounded-lg flex items-center justify-center">
                                                    <img
                                                        src={`/path-to-project-image-${project.id}.jpg`}
                                                        alt={project.name}
                                                        className="w-full h-full object-cover rounded-lg"
                                                    />
                                                </div>
                                            </figure>

                                            <div className="card-body p-4">
                                                <div className="space-y-4">
                                                    <div className="flex justify-between items-center">
                                                        <span className="font-semibold whitespace-nowrap">Project name:</span>
                                                        <span className="text-right ml-3 font-medium">{project.name}</span>
                                                    </div>

                                                    <div>
                                                        <div className="font-semibold mb-2">Project Group Members:</div>
                                                        <div className="text-sm space-y-1">
                                                            {project.groupMembers.map((member, index) => (
                                                                <div key={index}>{member}</div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="font-semibold mb-2">Project Description:</div>
                                                        <div className="text-sm leading-relaxed">{project.description}</div>
                                                    </div>
                                                </div>

                                                <div className="flex justify-between mt-6 pt-4 border-t border-secondary-content border-opacity-20">
                                                    <button className="btn btn-primary btn-sm text-primary-content">
                                                        Look at Project
                                                    </button>
                                                    <button className="btn btn-primary btn-sm text-primary-content">
                                                        Project Code
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-6 text-sm opacity-80">
                    <p>Scroll horizontally to view more projects</p>
                </div>
            </div>
        </div>
    )
}