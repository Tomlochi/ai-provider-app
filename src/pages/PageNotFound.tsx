import React from "react";
import { useTranslation } from 'react-i18next'

const PageNotFound: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className="p-6">
      <p>
        {t('notFound.title')}{' '}
        <a href="/" className="text-blue-600 underline">
          {t('notFound.goHome')}
        </a>
      </p>
    </div>
  );
};

export default PageNotFound;