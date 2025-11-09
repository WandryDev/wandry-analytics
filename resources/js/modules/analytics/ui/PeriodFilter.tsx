import React from 'react';
import { router } from '@inertiajs/react';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

export const PeriodFilter: React.FC = () => {
    const searchParams = new URLSearchParams(window.location.search);

    return (
        <Select
            defaultValue={searchParams.get('period') || 'week'}
            onValueChange={(value) =>
                router.reload({ data: { period: value } })
            }
        >
            <SelectTrigger className="w-full min-w-[160px] sm:w-44">
                <SelectValue placeholder="Select a period" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="day">24 hours</SelectItem>
                <SelectItem value="week">7 days</SelectItem>
                <SelectItem value="month">30 days</SelectItem>
            </SelectContent>
        </Select>
    );
};
