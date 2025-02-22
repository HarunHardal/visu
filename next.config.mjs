const nextConfig = {
  webpack(config) {
    // GLSL dosyaları için kural ekleme
    config.module.rules.push({
      test: /\.(glsl|vs|fs)$/i,
      type: 'asset/source',
    });

    // GSAP'in sunucu tarafında dışlanması
    config.externals = config.externals || {};
    config.externals.gsap = 'commonjs gsap';

    return config;
  },
};

export default nextConfig;