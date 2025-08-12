import React from "react";

const PageNotFound: React.FC = () => {
  return (
    <div className="p-6">
      <p>
        Page not found.{" "}
        <a href="/" className="text-blue-600 underline">
          Go home
        </a>
      </p>
    </div>
  );
};

export default PageNotFound;