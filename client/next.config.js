/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: 'https://stylin-tails-api.onrender.com/path*',
            },
        ]
    }
}

module.exports = nextConfig
