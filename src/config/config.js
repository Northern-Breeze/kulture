import secret from './secret';

const devConfig = {
    SERVER_URL: secret.SERVER_URL
}

const prodConfigs = {
    SERVER_URL: secret.SERVER_URL
}

export const configs = process.env.NODE_ENV === 'development'  ? devConfig : prodConfigs