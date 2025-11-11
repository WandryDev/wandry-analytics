import React from 'react';
import { Lock } from 'lucide-react';

type NotAvailableCardProps = {
    description?: string;
}

export const NotAvailableCard: React.FC<NotAvailableCardProps> = ({ description }) => {
    return <div className="w-full h-full flex items-center justify-center">

        <div className="flex flex-col items-center gap-y-2">
            <Lock/>
            <p className='text-sm font-semibold mt-4'>Not Available</p>
            {description && <p className="text-xs text-muted-foreground text-center max-w-[80%] text-balance">{description}</p>}
        </div>
    </div>
}