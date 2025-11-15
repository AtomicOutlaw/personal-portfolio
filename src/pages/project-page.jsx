import { Link } from 'react-router-dom';
import { useState } from 'react';

// Image carousel component
function ImageCarousel({ images, projectName }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    if (images.length === 0) return (
        <div className="bg-black w-full h-64 rounded-lg flex items-center justify-center">
            <p className="text-white">No images available</p>
        </div>
    );

    return (
        <div className="relative bg-black w-full h-64 rounded-lg overflow-hidden">
            <img src={images[currentImageIndex]} alt={`${projectName} - Image ${currentImageIndex + 1}`} className="w-full h-full object-contain"/>

            {images.length > 1 && (
                <>
                    <button onClick={prevImage} className="absolute left-0.5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-75 transition-all">
                        ‹
                    </button>
                    <button onClick={nextImage} className="absolute right-0.5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-75 transition-all">
                        ›
                    </button>
                </>
            )}

            {images.length > 1 && (
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                    {currentImageIndex + 1} / {images.length}
                </div>
            )}
        </div>
    );
}

// Function to generate image paths automatically
function generateImagePaths(projectFolder, maxImages = 10) {
    const images = [];
    for (let i = 1; i <= maxImages; i++) {
        images.push(`/projects/${projectFolder}/img${i}.png`);
    }
    return images;
}

// Function to check which images actually exist
function getExistingImages(projectFolder, imageCount) {
    const images = [];
    for (let i = 1; i <= imageCount; i++) {
        images.push(`/projects/${projectFolder}/img${i}.png`);
    }
    return images;
}

export default function ProjectPage() {
    //Where to add new projects
    const projects = [
        {
            id: 1,
            name: "Card Game Application",
            folder: "Project1",
            groupMembers: ["Kane", "Tricia", "Jackson", "Griffin", "Rod", "Christopher", "Matthew", "Ayden"],
            description: "A website that allows you to play card games. The games consisted of total 20, a game you need to stack cards up to 20 (or custom amount), and a memory card game. You could login, play as a guest, see user and global stats, change user info and icon, and login or sign up. The website was designed for younger kids to lear math with the 20 total game and earn point when logged-in. Done with a Express (Javascript) front and back end. This project taught me how to work in a big development group, learning proper communication, how to work in a development team, and how to communicate with the customer of the product meeting demands and how to have client meetings.",
            imageCount: 7
        },
        {
            id: 2,
            name: "Internal Ticket System",
            folder: "Project2",
            groupMembers: ["Ayden", "Jackson"],
            description: "An internal ticket system to keep track of customers, tickets, and customer units. It is meant for technicians to keep track of whats going on with customer units, and easily make new tickets with saved customers and saved units for the customer. Each ticket has a note section so each technician that works on the unit can make notes of progress and where they got to on the unit. This has two projects, one is the front end, and the second is the API with the database. Done with React (Javascript) front end and Express (Javascript) back end. This project showed me how to properly split up the back and front end keeping them separate but still properly communicate with each other to properly work and make everything functional. Since the front and back end were split up it really showed whats included in the back and front end respectively. The project also showed how to handle partners leaving as half way through the teacher made the projects individual.",
            imageCount: 2
        },
        {
            id: 3,
            name: "Dart Scoring Application",
            folder: "Project3",
            groupMembers: ["Ayden"],
            description: "This Android application is meant to keep track of scoring during dart games and practice. By choosing from practice, 2 player, 3 player, or 4 player. The application has a info page popping up a dart scoring cheat sheet, and a home page always leading to the screen to chose which game mode. There is a best score tracker tracking each game and changing which game was your best in each mode, by PPD (points per dart). The app has a database keeping information in the background and a custom image for its icon. Built in Android Studio using Java. This application introduced me to building android apps, this project was a learning curve as we had to implement features we weren't taught in class and had to lear on our own. It also was the first proper android application I built and had a connection to as I was building it for someone I know who suggested I build a dart scoring app.",
            imageCount: 7
        }
    ];

    const projectsWithImages = projects.map(project => ({
        ...project,
        images: getExistingImages(project.folder, project.imageCount)
    }));

    return (
        <div className="min-h-screen bg-base-100 text-base-content p-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold">Projects</h1>
            </div>

            <div className="max-w-400 mx-auto">
                <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                        <Link to="/" className="btn btn-primary text-base-content flex flex-col items-center gap-0.25">
                            Back
                            <img src="/logos/arrow-l-icon.png" className="w-4 h-4"/>
                        </Link>
                    </div>

                    <div className="bg-base-300 rounded-box p-6 flex-1 overflow-hidden min-h-[600px]">
                        <div className="overflow-x-auto w-full">
                            <div className="flex space-x-6 items-start" style={{ width: `calc(${projectsWithImages.length} * 450px + ${projectsWithImages.length - 1} * 1.5rem)` }}>
                                {projectsWithImages.map((project) => (
                                    <div key={project.id} className="flex-shrink-0 shadow-xl">
                                        <div className="card w-[420px] bg-secondary text-secondary-content shadow-xl">
                                            <figure className="px-4 pt-4">
                                                <ImageCarousel
                                                    images={project.images}
                                                    projectName={project.name}
                                                />
                                            </figure>

                                            <div className="card-body p-4">
                                                <div className="space-y-4">
                                                    <div className="flex justify-between items-center">
                                                        <span className="font-semibold whitespace-nowrap">Project name:</span>
                                                        <span className="text-right ml-3 font-medium">{project.name}</span>
                                                    </div>

                                                    <div>
                                                        <div className="font-semibold mb-2">Project Group Members:</div>
                                                        <div className="text-sm">
                                                            {project.groupMembers.join(', ')}
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="font-semibold mb-2">Project Description:</div>
                                                        <div className="text-sm leading-relaxed">{project.description}</div>
                                                    </div>
                                                </div>

                                                {/* Buttons for later implements to have projects running and code viewable
                                                <div className="flex justify-between mt-6 pt-4 border-t border-secondary-content border-opacity-20">
                                                    <button className="btn btn-primary btn-sm text-base-content">
                                                        Look at Project
                                                    </button>
                                                    <button className="btn btn-primary btn-sm text-base-content">
                                                        Project Code
                                                    </button>
                                                </div>
                                                */}
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