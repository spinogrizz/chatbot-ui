module.exports = {
  i18n: {
    defaultLocale: 'ru',
    locales: [
      "ru",
    ],
  },
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/public/locales',
};
