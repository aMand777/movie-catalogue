/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

module.exports = {
  images: {
    domains: [`${process.env.NEXT_PUBLIC_IMAGE_CONFIG}`],
  },
}
