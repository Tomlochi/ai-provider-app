import React from 'react';

const OrganizationSettings: React.FC = () => {
    return (
        <div className="mx-auto max-w-[920px] px-5 pt-6 pb-16 leading-relaxed text-slate-900 font-sans">
            <header className="sticky top-0 z-10 py-3 mb-5 border-b border-slate-200">
                <h1 className="m-0 text-2xl font-semibold tracking-tight">Organization Settings</h1>
                <p className="mt-1 text-sm text-slate-600">
                    Manage your organization profile, preferences, and visibility.
                </p>
            </header>

            <div aria-labelledby="about-org">
                <h2 id="about-org" className="mb-2 text-base text-slate-700">Overview</h2>
                <p className="mb-4 text-slate-600">
                    This page is a placeholder for your organization settings. Add forms and controls for
                    organization name, domain, billing contacts, and member management as needed.
                </p>
                    <p className="m-0 text-slate-500">
                        Tip: Use separate sections for Profile, Members, Security, and Billing to keep things
                        organized.
                    </p>
            </div>
        </div>
    );
}

export default OrganizationSettings;