import { AnalyticData } from '@/modules/analytics/model/analytics';
import {
    eachDayOfInterval,
    eachHourOfInterval,
    endOfDay,
    format,
    subDays,
    subHours,
} from 'date-fns';

const makeDefaultDataPoint = (date: string): AnalyticData => ({
    date,
    component: '',
    total: 0,
});

export function fillWeeklyData(data: AnalyticData[]): AnalyticData[] {
    const interval = eachDayOfInterval({
        start: new Date(subDays(new Date(), 7)),
        end: new Date(),
    });

    return interval.map((date) => {
        const dateString = format(date, 'yyyy-MM-dd');

        const found = data.find((d) => d.date === dateString);

        return found ?? makeDefaultDataPoint(dateString);
    });
}

export function fillMonthlyData(data: AnalyticData[]): AnalyticData[] {
    const interval = eachDayOfInterval({
        start: new Date(subDays(new Date(), 30)),
        end: new Date(),
    });

    return interval.map((date) => {
        const dateString = format(date, 'yyyy-MM-dd');

        const found = data.find((d) => d.date === dateString);

        return found ?? makeDefaultDataPoint(dateString);
    });
}

export function fillDailyData(data: AnalyticData[]): AnalyticData[] {
    const interval = eachHourOfInterval({
        start: new Date(subHours(new Date(), 24)),
        end: new Date(endOfDay(new Date())),
    });

    return interval.map((date) => {
        const dateString = format(date, 'yyyy-MM-dd HH:00');

        const found = data.find(
            (d) => format(new Date(d.date), 'yyyy-MM-dd HH:00') === dateString,
        );

        return found ?? makeDefaultDataPoint(dateString);
    });
}

export const xFormatter = (value: string, timeRange: string) => {
    const date = new Date(value);

    if (timeRange === 'day') {
        return date.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
        });
    }

    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
    });
};
