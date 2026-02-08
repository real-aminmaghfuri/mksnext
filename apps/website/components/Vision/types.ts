
import { LucideIcon } from 'lucide-react';

export interface MissionItem {
  id: string; // Added ID for easier key mapping
  title: string;
  desc: string;
  // No longer strict icon here, used in logic
}

export interface DnaItem {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface ManifestoContent {
  title: string;
  text: string;
  footer: string;
}

export interface VisionContent {
  heading: string;
  sub: string;
  visionTitle: string;
  statement: string;
  missionTitle: string;
  missionSub: string;
  missionItems: MissionItem[];
  dnaTitle: string;
  dnaSub: string;
  dnaItems: DnaItem[];
  manifesto: ManifestoContent;
}
