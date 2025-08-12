import React from "react";
import { useTranslation } from 'react-i18next'

const Overview: React.FC = () => {
  const { t } = useTranslation()
  return (
    <main className="flex-1 font-sans text-slate-900 overflow-y-auto">
      <div className="max-w-[760px] mx-auto my-16 px-4 leading-relaxed">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">
          {t('overview.title')}
        </h1>
        <p className="text-base text-slate-600">
          {t('overview.body')}
        </p>
      </div>
    </main>
  );
};

export default Overview;
