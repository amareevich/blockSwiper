import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: 'development',
    entry: './script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: 'chunks/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc)ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
};