import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { cn } from '@/lib/utils';

type StatsCardProps = {
    title: string;
    children: React.ReactNode;
    classes?: {
        title?: string;
        content?: string;
    };
};

export const StatsCard: React.FC<StatsCardProps> = ({
    title,
    children,
    classes,
}) => {
    return (
        <Card className="rounded-sm">
            <CardHeader className="border-b pb-8">
                <CardTitle className={cn('font-semibold', classes?.title)}>
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent
                className={cn(
                    'max-h-[30vh] min-h-[30vh] overflow-x-auto',
                    classes?.content,
                )}
            >
                {children}
            </CardContent>
        </Card>
    );
};
