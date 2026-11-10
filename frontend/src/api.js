const configuredApiUrl = import.meta.env.VITE_API_URL || '';
const API_BASE_URL = configuredApiUrl && configuredApiUrl.startsWith('http')
    ? configuredApiUrl
    : configuredApiUrl
        ? `https://${configuredApiUrl}`
        : '';

export const apiUrl = (path) => `${API_BASE_URL}${path}`;
