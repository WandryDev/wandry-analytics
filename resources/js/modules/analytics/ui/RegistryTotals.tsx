import React, { useEffect, useState } from 'react';
import NumberFlow, { continuous } from '@number-flow/react';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Totals } from '../model/analytics';

type RegistryTotalsProps = {
    data: Totals;
    title?: string;
    hasCards?: boolean;
};

export const RegistryTotals: React.FC<RegistryTotalsProps> = ({
    data,
    hasCards = true,
    title = 'Total registry installations',
}) => {
    const [totals, setTotals] = useState<Totals>({
        total: 0,
        day: 0,
        week: 0,
        month: 0,
    });

    useEffect(() => {
        setTotals(data);
    }, [data]);

    return (
        <>
            <CardHeader className="flex flex-col items-start gap-2 px-0 sm:flex-row sm:items-center sm:justify-between">
                <CardTitle className="mt-6 mb-1 flex flex-wrap items-center gap-2 text-pretty sm:mb-3">
                    {title}
                    {hasCards && (
                        <span className="text-base font-normal text-muted-foreground">
                            {totals.total}
                        </span>
                    )}
                </CardTitle>
            </CardHeader>
            {hasCards && (
                <CardDescription className="mt-0 flex flex-col gap-4 sm:flex-row">
                    <Card className="w-full rounded-md border py-4 shadow-none sm:rounded-r-none sm:border-r-0">
                        <CardContent>
                            <CardDescription className="mb-2">
                                Daily installs
                            </CardDescription>
                            <CardTitle className="text-3xl font-semibold text-foreground">
                                <NumberFlow
                                    willChange
                                    plugins={[continuous]}
                                    value={totals.day ?? 0}
                                />
                            </CardTitle>
                        </CardContent>
                    </Card>
                    <Card className="w-full rounded-md border py-4 shadow-none sm:rounded-none sm:border-x-0">
                        <CardContent>
                            <CardDescription className="mb-2">
                                Weekly installs
                            </CardDescription>
                            <CardTitle className="text-3xl font-semibold text-foreground">
                                <NumberFlow
                                    willChange
                                    plugins={[continuous]}
                                    value={totals.week ?? 0}
                                />
                            </CardTitle>
                        </CardContent>
                    </Card>
                    <Card className="w-full rounded-md border py-4 shadow-none sm:rounded-l-none sm:border-l-0">
                        <CardContent>
                            <CardDescription className="mb-2">
                                Monthly installs
                            </CardDescription>
                            <CardTitle className="text-3xl font-semibold text-foreground">
                                <NumberFlow
                                    willChange
                                    plugins={[continuous]}
                                    value={totals.month ?? 0}
                                />
                            </CardTitle>
                        </CardContent>
                    </Card>
                </CardDescription>
            )}
        </>
    );
};
