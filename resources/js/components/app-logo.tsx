import AppLogoIcon from './app-logo-icon';

type AppLogoProps = {
    showTitle?: boolean;
};

export default function AppLogo({ showTitle = true }: AppLogoProps) {
    return (
        <>
            <AppLogoIcon className="size-10" />
            {showTitle && (
                <div className="ml-1 grid flex-1 text-left text-sm">
                    <span className="mb-0.5 truncate leading-tight font-semibold">
                        Wandry Analytics
                    </span>
                </div>
            )}
        </>
    );
}
