export const getXCRFToken = (): string | undefined | null => {
    return document
        .querySelector('meta[name="csrf-token"]')
        ?.getAttribute('content');
};
