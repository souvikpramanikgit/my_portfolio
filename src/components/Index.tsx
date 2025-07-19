import GitHubContributions from './GitHubContributions';
import { useEffect, useRef, useState } from 'react';
import { annotate, annotationGroup} from 'rough-notation';

const Intro = () => {
    const scalableRef = useRef<HTMLSpanElement>(null);
    const buildInPublicRef = useRef<HTMLSpanElement>(null);
    const openToWorkRef = useRef<HTMLSpanElement>(null);
    const resumeRef = useRef<HTMLSpanElement>(null);
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (scalableRef.current && buildInPublicRef.current && openToWorkRef.current && resumeRef.current) {
            
            if (windowWidth <= 407) {
                return;
            }

            const a1 = annotate(scalableRef.current, {
                type: 'underline',
                color: '#00FFFF',
                strokeWidth: 2,
                iterations: 1,
                multiline: false,
                padding: 4,
                animate: true,
                animationDuration: 500
            });

            const a2 = annotate(buildInPublicRef.current, {
                type: 'underline',
                color: '#00FFFF',
                strokeWidth: 2,
                iterations: 1,
                multiline: false,
                padding: 4,
                animate: true,
                animationDuration: 500
            });

            const a3 = annotate(openToWorkRef.current, {
                type: 'underline',
                color: '#00FFFF',
                strokeWidth: 2,
                iterations: 1,
                multiline: false,
                padding: 4,
                animate: true,
                animationDuration: 500
            });

            const a4 = annotate(resumeRef.current, {
                type: 'underline',
                color: '#00FFFF',
                strokeWidth: 3,
                padding: 4,
                animate: true,
                animationDuration: 300
            });

            annotationGroup([a1, a2, a3, a4]);
            
            setTimeout(() => {
                a1.show();
                
                setTimeout(() => {
                    a2.show();
                    
                    setTimeout(() => {
                        a3.show();
                        
                        setTimeout(() => {
                            a4.show();
                        }, 400);
                    }, 400);
                }, 400);
            }, 900);
            
            return () => {
                a1.hide();
                a2.hide();
                a3.hide();
                a4.hide();
            };
        }
    }, [windowWidth]);

    return (
        <div className="flex flex-col gap-6 w-full">
            <div className="w-full flex flex-col-reverse sm:flex-row gap-6 justify-between items-start">
                <div className="flex flex-col gap-4 w-full lg:w-4/5">
                    <h1 className="md:text-5xl font-bold text-3xl">Hi, I'm Souvik</h1>
                    <p className="text-xl text-gray-800 dark:text-gray-300">
                        Developer | Engineer
                    </p>
                    {/* <Clipboard /> */}
                </div>

                <div className="flex items-start justify-center lg:mb-0">
                    <img
                        src='Image/img.png'
                        alt="Souvik"
                        width={140}
                        height={140}
                        className="rounded-full object-cover"
                    />
                </div>
            </div>
            <div className='w-[75%] max-xl:w-full mt-4'>
                <h2 className="text-2xl font-bold mt-2">About Me</h2>
                
            </div>

            {/* GitHub Contributions Graph */}
            <GitHubContributions username="souvikpramanikgit" />
        </div>
    );
};

export default Intro;
