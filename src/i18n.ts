import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      header: {
        appName: 'LASSO',
        userSection: {
          name: 'Woodie Cowboy'
        }
      },
      sidebar: {
        overview: 'Overview',
        policies: 'Policies',
        settings: 'Organization Settings',
        version: 'Version {{version}}'
      },
      common: {
        filter: 'Filter',
        severity: 'Severity',
        critical: 'Critical',
        high: 'High',
        medium: 'Medium',
        low: 'Low',
        providers: 'Providers',
        loadingProviders: 'Loading providers…',
        failedProviders: 'Failed to load providers.',
        classifiersCount: 'Classifiers ({{count}})',
        classifierName: 'Classifier name:',
        description: 'Description:',
        sortBySeverityTooltip: 'Sort by severity level'
      },
      overview: {
        title: 'Secure software and AI—without slowing teams down',
        body: 'Lasso Security helps organizations discover risk across code, cloud, and AI, then guides developers to fast, effective remediation.'
      },
      org: {
        settingsIntro: 'Manage your organization profile, preferences, and visibility.',
        placeholderBody: 'This page is a placeholder for your organization settings. Add forms and controls for organization name, domain, billing contacts, and member management as needed.',
        tip: 'Tip: Use separate sections for Profile, Members, Security, and Billing to keep things organized.'
      },
      notFound: {
        title: 'Page not found.',
        goHome: 'Go home'
      }
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
})

export default i18n


