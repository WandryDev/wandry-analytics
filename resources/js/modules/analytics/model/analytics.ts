export type Totals = {
    total: number;
    day: number;
    week: number;
    month: number;
};

export type AnalyticData = {
    date: string;
    component: string;
    total: number;
};

export type RegistryAnalytics = Record<string, AnalyticData[]>;
