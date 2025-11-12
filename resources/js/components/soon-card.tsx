import { Lock } from 'lucide-react';
import React, { PropsWithChildren } from 'react';

type SoonCardProps = PropsWithChildren;

export const SoonCard: React.FC<SoonCardProps> = ({ children }) => {
    return (
        <div className="relative">
            <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-col items-center justify-center gap-y-2 rounded-lg">
                <Lock />
                <span className="font-semibold">Soon</span>
            </div>
            <div className="user-select-none pointer-events-none opacity-100 blur-xs">
                {children}
            </div>
        </div>
    );
};
