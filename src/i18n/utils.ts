import { ui, defaultLang, languages } from "./ui"

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/")
  if (!lang) return defaultLang
  if (lang in ui) return lang as keyof typeof ui
  return defaultLang
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return (ui[lang][key as keyof (typeof ui)[keyof typeof ui]] ||
      ui[defaultLang][key]) as string
  }
}

export function changePathLanguage(
  currentLang: keyof typeof languages,
  targetLang: keyof typeof languages,
  path: string,
) {
  if (currentLang === defaultLang) {
    //Pathname is already without lang
    return targetLang === defaultLang ? path : `/${targetLang}${path}`
  }
  //Pathname has a lang, need to strip it and replace
  if (targetLang === defaultLang) {
    return path.replace(`/${currentLang}/`, "/")
  }
  return path.replace(`/${currentLang}/`, `/${targetLang}/`)
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return l === defaultLang ? path : `/${l}${path}`
  }
}
