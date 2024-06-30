/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/whatsapp',
        destination: 'https://chat.whatsapp.com/IB17XyKKIvx2uo0i5DYDTS',
        permanent: false,
      },
      {
        source: '/pitch',
        destination:
          'https://drive.google.com/file/d/1qG_0Kv__QJnsOdYEzJcuo-rpt-FH0weg/view?usp=sharing',
        permanent: false,
      },
      {
        source: '/cfs',
        destination:
          'https://drive.google.com/file/d/1gVgmUoBA0YeDSOr2X25QlcjGuHGz8U5g/view?usp=sharing',
        permanent: false,
      },
      {
        source: '/promo',
        destination:
          'https://drive.google.com/file/d/1MtAN9dNFhE7nOaHgAklEyM01NyUy7gAL/view?usp=sharing',
        permanent: false,
      },
      {
        source: '/brochure',
        destination:
          'https://drive.google.com/file/d/1Ytlu9r6JH3KelhlAS-FEwKRINJ7MGfOR/view?usp=sharing',
        permanent: false,
      },
      {
        source: '/register',
        destination:
          'https://docs.google.com/forms/d/e/1FAIpQLSd5Di8MKfGigs0tGXBXriaJmZqWgvu0FmbXOUwwGC4ypBAB2g/viewform?usp=sf_link',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
