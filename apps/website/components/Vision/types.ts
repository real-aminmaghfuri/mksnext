
import { LucideIcon } from 'lucide-react';

export interface MissionItem {
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
}

export interface ManifestoContent {
  title: string;
  text: string;
}

export interface VisionContent {
  heading: string;
  sub: string;
  statement: string;
  missionTitle: string;
  missionItems: MissionItem[];
  manifesto: ManifestoContent;
}
