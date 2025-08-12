import React from "react";

const Overview: React.FC = () => {
  return (
    <main className="flex-1 font-sans text-slate-900 overflow-y-auto">
      <div className="max-w-[760px] mx-auto my-16 px-4 leading-relaxed">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">
          Secure software and AI—without slowing teams down
        </h1>
        <p className="text-base text-slate-600">
          Lasso Security helps organizations discover risk across code, cloud, and AI, then guides developers to fast, effective remediation.
        </p>
      </div>
    </main>
  );
};

export default Overview;
