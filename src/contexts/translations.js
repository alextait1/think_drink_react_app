import React from 'react';

// TODO: move all rogue app strings into this file and access through context.

const translations = {
  en: {
    appTitle: 'Think Drink',
  },
  fr: {
    appTitle: 'Omlette du Fromage',
  },
};

export const getTranslationContext = isoCode =>
  React.createContext(translations[isoCode]);
