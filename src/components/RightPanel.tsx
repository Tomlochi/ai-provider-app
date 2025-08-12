import React from 'react';
import ProviderList from './ProviderList';

const RightPanel: React.FC = () => {
    return (
        <div className="w-96 max-w-96">
            <ProviderList />
        </div>
    );
};

export default RightPanel;