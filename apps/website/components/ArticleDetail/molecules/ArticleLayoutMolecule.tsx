import React from 'react';

interface ArticleLayoutMoleculeProps {
  left?: React.ReactNode;
  center: React.ReactNode;
  right?: React.ReactNode;
}

/**
 * ArticleLayoutMolecule - A 3-column grid layout specifically for article details.
 * 18fr - 64fr - 18fr calibration.
 */
export const ArticleLayoutMolecule: React.FC<ArticleLayoutMoleculeProps> = ({ 
  left, 
  center, 
  right 
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[18fr_64fr_18fr] gap-8 xl:gap-12">
      {/* LEFT SIDEBAR */}
      <div className="hidden lg:block">
        <div className="sticky top-32 space-y-10">
          {left}
        </div>
      </div>

      {/* CENTER CONTENT */}
      <div className="min-w-0">
        {center}
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="hidden lg:block">
        <div className="sticky top-32 space-y-8">
          {right}
        </div>
      </div>
    </div>
  );
};
