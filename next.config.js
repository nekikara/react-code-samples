const withTypescript = require('@zeit/next-typescript');
const debug = process.env.NODE_ENV !== "production";
module.exports = withTypescript({
    assetPrefix: !debug ? 'https://nekikara.github.io/react-code-samples/' : '',
});
