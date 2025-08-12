import React from 'react';
import { useTranslation } from 'react-i18next'

const OrganizationSettings: React.FC = () => {
    const { t } = useTranslation()
    return (
        <div className="mx-auto max-w-[920px] px-5 pt-6 pb-16 leading-relaxed text-slate-900 font-sans">
            <header className="sticky top-0 z-10 py-3 mb-5 border-b border-slate-200">
                <h1 className="m-0 text-2xl font-semibold tracking-tight">{t('sidebar.settings')}</h1>
                <p className="mt-1 text-sm text-slate-600">{t('org.settingsIntro')}</p>
            </header>

            <div aria-labelledby="about-org">
                <h2 id="about-org" className="mb-2 text-base text-slate-700">{t('overview.title')}</h2>
                <p className="mb-4 text-slate-600">{t('org.placeholderBody')}</p>
                <p className="m-0 text-slate-500">{t('org.tip')}</p>
            </div>
        </div>
    );
}

export default OrganizationSettings;