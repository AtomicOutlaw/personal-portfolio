import { Link } from 'react-router-dom';
import { useState } from 'react';
import arrowIcon from '../assets/logos/arrow-l-icon.png';

function ImageCarousel({ images, videos, projectName }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const allMedia = [
        ...images.map(img => ({ type: 'image', src: img })),
        ...videos.map(vid => ({ type: 'video', src: vid }))
    ];

    const nextMedia = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === allMedia.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevMedia = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? allMedia.length - 1 : prevIndex - 1
        );
    };

    if (allMedia.length === 0) return (
        <div className="bg-black w-full h-48 md:h-64 rounded-lg flex items-center justify-center">
            <p className="text-white">No media available</p>
        </div>
    );

    return (
        <div className="relative bg-black w-full h-48 md:h-64 rounded-lg overflow-hidden">
            {allMedia[currentIndex].type === 'image' ? (
                <img
                    src={allMedia[currentIndex].src}
                    alt={`${projectName} - Image ${currentIndex + 1}`}
                    className="w-full h-full object-contain"
                />
            ) : (
                <video
                    src={allMedia[currentIndex].src}
                    className="w-full h-full object-contain"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            )}

            {allMedia.length > 1 && (
                <>
                    <button onClick={prevMedia} className="absolute left-0.5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-75 transition-all">
                        ‹
                    </button>
                    <button onClick={nextMedia} className="absolute right-0.5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-75 transition-all">
                        ›
                    </button>
                </>
            )}

            {allMedia.length > 1 && (
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                    {currentIndex + 1} / {allMedia.length}
                </div>
            )}
        </div>
    );
}

function getProjectImage(projectFolder, imageNumber) {
    try {
        const pngPath = `../assets/projects/${projectFolder}/img${imageNumber}.png`;
        const modules = import.meta.glob('../assets/projects/**/*', { eager: true });
        const pngImage = modules[pngPath]?.default;

        if (pngImage) return pngImage;

        const jpgPath = `../assets/projects/${projectFolder}/img${imageNumber}.jpg`;
        const jpgImage = modules[jpgPath]?.default;

        if (jpgImage) return jpgImage;

        return null;
    } catch (error) {
        console.warn(`Error loading image: ${projectFolder}/img${imageNumber}`);
        return null;
    }
}

function getProjectVideo(projectFolder, videoNumber) {
    try {
        const videoPath = `../assets/projects/${projectFolder}/vid${videoNumber}.mp4`;
        const modules = import.meta.glob('../assets/projects/**/*', { eager: true });
        return modules[videoPath]?.default;
    } catch (error) {
        console.warn(`Video not found: ${projectFolder}/vid${videoNumber}.mp4`);
        return null;
    }
}

function getExistingMedia(projectFolder, imageCount, videoCount) {
    const images = [];
    const videos = [];

    for (let i = 1; i <= imageCount; i++) {
        const image = getProjectImage(projectFolder, i);
        if (image) {
            images.push(image);
        }
    }

    for (let i = 1; i <= videoCount; i++) {
        const video = getProjectVideo(projectFolder, i);
        if (video) {
            videos.push(video);
        }
    }

    return { images, videos };
}

export default function ProjectPage() {
    //Where to add new projects
    const projects = [
        {
            id: 1,
            name: "Card Game Application",
            folder: "Project1",
            groupMembers: ["Kane", "Tricia", "Jackson", "Griffin", "Rod", "Christopher", "Matthew", "Ayden"],
            description: "A website that allows you to play card games. The games consisted of total 20, a game you need to stack cards up to 20 (or custom amount), and a memory card game. You could login, play as a guest, see user and global stats, change user info and icon, and login or sign up. The website was designed for younger kids to learn math with the 20 total game and earn point when logged in. Done with an Express (JavaScript) front and back end. This project taught me how to work in a big development group, learning proper communication, how to work in a development team, and how to communicate with the customer of the product meeting demands and how to have client meetings.",
            imageCount: 7,
            videoCount: 0
        },
        {
            id: 2,
            name: "Internal Ticket System",
            folder: "Project2",
            groupMembers: ["Ayden", "Jackson"],
            description: "An internal ticket system to keep track of customers, tickets, and customer units. It is meant for technicians to keep track of what's going on with customer units and easily make new tickets with saved customers and saved units for the customer. Each ticket has a note section so each technician that works on the unit can make notes of progress and where they got to on the unit. This has two projects, one is the front end, and the second is the API with the database. Done with React (JavaScript) front end and Express (JavaScript) back end. This project showed me how to properly split up the back and front end keeping them separate but still properly communicate with each other to properly work and make everything functional. Since the front and back end were split up it really showed what's included in the back and front end respectively. The project also showed how to handle partners leaving as halfway through the teacher made the projects individual. NOTE: This project is still a work in progress, not all functionality is fully implemented yet.",
            imageCount: 4,
            videoCount: 0
        },
        {
            id: 3,
            name: "Dart Scoring Application",
            folder: "Project3",
            groupMembers: ["Ayden"],
            description: "This Android application is meant to keep track of scoring during dart games and practice. By choosing from practice, 2 player, 3 player, or 4 player. The application has an info page popping up a dart scoring cheat sheet, and a home page always leading to the screen to chose which game mode. There is a best score tracker tracking each game and changing which game was your best in each mode, by PPD (points per dart). The app has a database keeping information in the background and a custom image for its icon. Built in Android Studio using Java. This application introduced me to building android apps, this project was a learning curve as we had to implement features we weren't taught in class and had to learn on our own. It also was the first proper android application I built and had a connection to as I was building it for someone, I know who suggested I build a dart scoring app.",
            imageCount: 7,
            videoCount: 0
        },
        {
            id: 4,
            name: "PC Mac Build",
            folder: "Project4",
            groupMembers: ["Ayden"],
            description: "This is a custom-built computer by me. I came across an old Mac pro 5.1 tower, gutted the computer and put moder PC components. I built a custom metal back plate for the motherboard to sit on the old motherboard standoffs inn the case, then added standoffs to the added backplate so the motherboard doesn't short out. It was my first computer build ever, so through the whole process I was still learning how computer parts went together and through the build I had to learning how to put all the computer parts into a case not built for modern computer parts. This build taught me how to properly put together computers, computer hardware problem solving with putting together a computer, making parts fit where they weren't supposed to, and how to properly cool hardware, it also taught me how to install and setup new computers. To this day it's used as a server PC, mainly running the odd modded Minecraft server. The whole building process of this PC can be found on my YouTube channel in 2 videos, the first is me gutting the PC, the second is me putting the whole computer together. ",
            imageCount: 4,
            videoCount: 1
        },
    ];

    const projectsWithMedia = projects.map(project => ({
        ...project,
        ...getExistingMedia(project.folder, project.imageCount, project.videoCount)
    }));

    return (
        <div className="min-h-screen bg-base-100 text-base-content p-4">
            <div className="text-center mb-6">
                <h1 className="text-3xl md:text-4xl font-bold">Projects</h1>
            </div>

            <div className="max-w-full">
                {/* Back Button - Always on top for mobile */}
                <div className="flex justify-start mb-4">
                    <Link to="/" className="btn btn-primary text-base-content flex items-center gap-2">
                        <img src={arrowIcon} className="w-4 h-4"/>
                        Back
                    </Link>
                </div>

                <div className="bg-base-300 rounded-box p-4 md:p-6 w-full overflow-hidden">
                    <div className="overflow-x-auto w-full">
                        <div className="flex space-x-4 md:space-x-6 items-start min-w-max">
                            {projectsWithMedia.map((project) => (
                                <div key={project.id} className="flex-shrink-0 shadow-xl w-[90vw] md:w-[420px]">
                                    <div className="card w-full bg-secondary text-secondary-content shadow-xl">
                                        <figure className="px-3 md:px-4 pt-3 md:pt-4">
                                            <ImageCarousel
                                                images={project.images}
                                                videos={project.videos}
                                                projectName={project.name}
                                            />
                                        </figure>

                                        <div className="card-body p-3 md:p-4">
                                            <div className="space-y-3 md:space-y-4">
                                                <div className="flex justify-between items-center">
                                                    <span className="font-semibold whitespace-nowrap text-sm md:text-base">Project name:</span>
                                                    <span className="text-right ml-3 font-medium text-sm md:text-base">{project.name}</span>
                                                </div>

                                                <div>
                                                    <div className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Project Group Members:</div>
                                                    <div className="text-xs md:text-sm">
                                                        {project.groupMembers.join(', ')}
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Project Description:</div>
                                                    <div className="text-xs md:text-sm leading-relaxed max-h-32 overflow-y-auto">
                                                        {project.description}
                                                    </div>
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

            <div className="text-center mt-4 text-sm opacity-80">
                <p>Scroll horizontally to view more projects</p>
            </div>
        </div>
    )
}