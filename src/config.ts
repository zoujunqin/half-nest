import development from '../.env.development';
import production from '../.env.production';
import test from '../.env.test';
import staging from '../.env.staging';

/* deepseek api key */
export const skApiKey = 'sk-45d6e3d80b5347d0a389db86aff3cb40';

const envMap = { development, production, test, staging };
export const env = envMap[process.env.NODE_ENV || 'development'];
