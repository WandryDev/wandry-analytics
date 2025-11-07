import React, { useEffect } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export const HeroDemo: React.FC = () => {
    const [opened, setOpened] = React.useState(false);
    const videoRef = React.useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!videoRef.current) return;

            if (opened) {
                videoRef.current?.play();
            } else {
                videoRef.current?.pause();
                videoRef.current!.currentTime = 0;
            }
        }, 250);

        return () => clearTimeout(timeout);
    }, [opened, videoRef.current]);

    return (
        <Dialog open={opened} onOpenChange={setOpened}>
            <DialogTrigger asChild>
                <Button size="lg" variant="secondary">
                    Watch demo
                </Button>
            </DialogTrigger>
            <DialogContent className="w-[90vw] lg:max-w-[70vw]">
                <video
                    ref={videoRef}
                    controls={false}
                    loop
                    muted
                    className="w-full"
                >
                    <source src="/WandryAnalyticsDemo.mp4" type="video/mp4" />
                </video>
            </DialogContent>
        </Dialog>
    );
};
