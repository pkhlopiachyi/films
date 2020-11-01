import { Config } from './types';

export const defaultConfig: Config = {
    api: {
        url: 'http://localhost:5000/api/film',
    },
    msAlertDisplayTime: '5000',
};

export const Base = {
    config: defaultConfig,
};

declare global {
    interface Window {
        env: Config;
    }
}

window.env = window.env || defaultConfig;
Base.config = { ...window.env };

export const apiUrl = () => Base.config.api.url;
export const msAlertDisplayTime = (): string => Base.config.msAlertDisplayTime || '5000';
