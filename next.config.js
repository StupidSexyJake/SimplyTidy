const withSize = require('next-size')
const withOptimizedImages = require('next-optimized-images');

module.exports = withSize(withOptimizedImages({
    /* config for next-optimized-images */

    // your config for other plugins or the general next.js here...
}));