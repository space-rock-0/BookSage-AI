const configuredApiUrl = import.meta.env.VITE_API_URL
    || 'https://booksage-ai-api.onrender.com';
const API_BASE_URL = configuredApiUrl && configuredApiUrl.startsWith('http')
    ? configuredApiUrl
    : configuredApiUrl
        ? `https://${configuredApiUrl}`
        : '';

export const apiUrl = (path) => `${API_BASE_URL}${path}`;
