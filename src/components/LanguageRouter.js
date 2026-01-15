import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import i18n from '../i18n';

export default function LanguageRouter({ children }) {
  const { lng } = useParams();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng]);

  return children;
}