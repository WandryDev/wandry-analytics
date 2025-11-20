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
import { Badge } from '@/components/ui/badge';

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
            <CardHeader className="flex-row items-center justify-between px-0">
                <CardTitle className="mt-6 mb-3 flex items-center gap-x-2">
                    {title}
                    <Badge>{hasCards && totals.total}</Badge>
                </CardTitle>
            </CardHeader>
            {hasCards && (
                <CardDescription className="mt-0 flex">
                    <Card className="w-full rounded-lg rounded-r-none py-4 shadow-none">
                        <CardContent>
                            <CardDescription className="mb-2">
                                Daily installs
                            </CardDescription>
                            <CardTitle className="font-heading text-3xl font-semibold text-foreground">
                                <NumberFlow
                                    willChange
                                    plugins={[continuous]}
                                    value={totals.day ?? 0}
                                />
                            </CardTitle>
                        </CardContent>
                    </Card>
                    <Card className="w-full rounded-none py-4 shadow-none">
                        <CardContent>
                            <CardDescription className="mb-2">
                                Weekly installs
                            </CardDescription>
                            <CardTitle className="font-heading text-3xl font-semibold text-foreground">
                                <NumberFlow
                                    willChange
                                    plugins={[continuous]}
                                    value={totals.week ?? 0}
                                />
                            </CardTitle>
                        </CardContent>
                    </Card>
                    <Card className="w-full rounded-lg rounded-l-none border-l-0 py-4 shadow-none">
                        <CardContent>
                            <CardDescription className="mb-2">
                                Monthly installs
                            </CardDescription>
                            <CardTitle className="font-heading text-3xl font-semibold text-foreground">
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
