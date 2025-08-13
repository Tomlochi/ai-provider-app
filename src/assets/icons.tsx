export const CriticalIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M10.88 2.828a2 2 0 0 0-3.76 0L1.4 15.2A2 2 0 0 0 3.24 18h13.52a2 2 0 0 0 1.84-2.8L10.88 2.828zM10 6.5c.414 0 .75.336.75.75v4.5a.75.75 0 0 1-1.5 0v-4.5c0-.414.336-.75.75-.75zm0 7.75a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
  </svg>
);

export const FunnelIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} aria-hidden="true">
    <path d="M3 5h18l-7 8v5l-4 2v-7L3 5z" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export const GridIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1" strokeWidth="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1" strokeWidth="1.5" />
    </svg>
  );
  
  export const ShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path
        d="M12 3l7 3v5c0 4.418-3.582 8-8 8s-8-3.582-8-8V6l9-3z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <text x="12" y="16" textAnchor="middle" className="text-xs font-bold" fill="currentColor">!</text>
    </svg>
  );
  
  export const GearIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path
        d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"
        strokeWidth="1.5"
      />
      <path
        d="M19 12a6.97 6.97 0 0 0-.132-1.31l2.043-1.484-2-3.464-2.4.8A7.034 7.034 0 0 0 14.31 4.9L13 3h-2l-1.31 1.9A7.034 7.034 0 0 0 7.49 6.542l-2.4-.8-2 3.464 2.043 1.484A7.04 7.04 0 0 0 5 12c0 .445.043.879.132 1.31L3.089 14.8l2 3.464 2.4-.8A7.034 7.034 0 0 0 9.69 19.1L11 21h2l1.31-1.9a7.034 7.034 0 0 0 2.71-1.642l2.4.8 2-3.464-2.043-1.484c.089-.431.132-.865.132-1.31z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );

  export const SortIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} aria-hidden="true">
      <path d="M8 17V5m0 0L5.5 7.5M8 5l2.5 2.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 7v12m0 0l2.5-2.5M16 19l-2.5-2.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  export const BurgerMenu: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={`h-6 w-6 text-gray-600 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );