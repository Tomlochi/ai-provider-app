import React from 'react';
import ProviderDetail from './ProviderDetail';

export type LeftPanelProps = {
    selectedId: number | null;
};

const LeftPanel: React.FC<LeftPanelProps> = ({ selectedId }) => {
    return (
        <div className="grow min-w-0">
            {selectedId ? (
                    <ProviderDetail id={selectedId} />
            ) : (
                <div className="h-full flex items-center justify-center text-gray-500">
                    <div className="text-center px-6">
                        <h2 className="text-lg font-medium mb-2">Select a supported provider</h2>
                        <p className="text-sm">
                            Choose an item from the left list. Unsupported providers are disabled.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LeftPanel;