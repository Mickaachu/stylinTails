/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: 'stylin-tails.vercel.app/path*',
            },
        ]
    }
}

module.exports = nextConfig
