import React from 'react';
import { UploadDropzoneMolecule } from '../molecules/UploadDropzoneMolecule';
import { AnalysisFormMolecule } from '../molecules/AnalysisFormMolecule';
import { AnalysisResult } from '../../hooks/useMediaUpload';

interface UploadSectionOrganismProps {
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  previewUrl: string | null;
  analyzing: boolean;
  uploading: boolean;
  analysis: AnalysisResult | null;
  setAnalysis: (analysis: AnalysisResult) => void;
  handleUpload: () => void;
}

export const UploadSectionOrganism: React.FC<UploadSectionOrganismProps> = ({
  fileInputRef,
  handleFileSelect,
  previewUrl,
  analyzing,
  uploading,
  analysis,
  setAnalysis,
  handleUpload
}) => {
  return (
    <div className="max-w-6xl mx-auto mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5">
          <UploadDropzoneMolecule 
            fileInputRef={fileInputRef}
            handleFileSelect={handleFileSelect}
            previewUrl={previewUrl}
            analyzing={analyzing}
            uploading={uploading}
          />
        </div>
        <div className="lg:col-span-7">
          <AnalysisFormMolecule 
            analysis={analysis}
            setAnalysis={setAnalysis}
            handleUpload={handleUpload}
            uploading={uploading}
          />
        </div>
      </div>
    </div>
  );
};
