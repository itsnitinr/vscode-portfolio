const nextTranslate = require('next-translate');
module.exports = nextTranslate({
  images: {
    domains: ['res.cloudinary.com', 'avatars.githubusercontent.com', 'imgur.com'],
  },
  i18n: {
    localeDetection: false,
  },
});
