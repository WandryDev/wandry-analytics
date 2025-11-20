import React from 'react';

type StepItemProps = {
    stepNumber: number;
    title: string;
    description?: React.ReactNode;
};

export const StepItem: React.FC<StepItemProps> = ({
    stepNumber,
    title,
    description,
}) => {
    return (
        <div className="flex items-start gap-x-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full p-2 text-sm font-bold shadow-[0px_1px_1px_0px_hsla(0,0%,0%,0.02)_inset,0px_1px_1px_0px_hsla(0,0%,0%,0.02)_inset,0px_0px_0px_1px_rgba(255,255,255,0.25)] dark:shadow-[0px_1px_1px_0px_hsla(0,0%,100%,0.02)_inset,0px_1px_1px_0px_rgba(255,255,255,0.05)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.05)_inset,0px_0px_1px_0px_rgba(0,0,0,0.25)]">
                {stepNumber}
            </div>
            <div className="space-y-1">
                <h3 className="text-lg font-medium tracking-tight">{title}</h3>
                {description}
            </div>
        </div>
    );
};
