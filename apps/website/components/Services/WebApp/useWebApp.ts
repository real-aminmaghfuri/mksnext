
"use client";

import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { 
  Database, Boxes, Lock, Zap, 
  LayoutDashboard, Server 
} from 'lucide-react';
import { WebAppContent } from './types';

export const useWebApp = (): WebAppContent => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  return {
    hero: {
      badge: text.waHeroBadge,
      title: text.waHeroTitle,
      titleSpan: text.waHeroTitleSpan,
      sub: text.waHeroSub,
    },
    problems: {
      title: text.waProbTitle,
      sub: text.waProbSub,
      items: [
        { 
          problem: text.waProb1, 
          solution: text.waSol1 
        },
        { 
          problem: text.waProb2, 
          solution: text.waSol2 
        },
        { 
          problem: text.waProb3, 
          solution: text.waSol3 
        },
        { 
          problem: text.waProb4, 
          solution: text.waSol4 
        }
      ]
    },
    stack: {
      title: text.waStackTitle,
      sub: text.waStackSub,
      items: [
        {
          title: text.waStack1Title,
          desc: text.waStack1Desc,
          icon: LayoutDashboard
        },
        {
          title: text.waStack2Title,
          desc: text.waStack2Desc,
          icon: Boxes
        },
        {
          title: text.waStack3Title,
          desc: text.waStack3Desc,
          icon: Database
        },
        {
          title: text.waStack4Title,
          desc: text.waStack4Desc,
          icon: Zap
        },
        {
          title: text.waStack5Title,
          desc: text.waStack5Desc,
          icon: Lock
        },
        {
          title: text.waStack6Title,
          desc: text.waStack6Desc,
          icon: Server
        }
      ]
    },
    process: {
      title: text.waProcTitle,
      steps: [
        { num: "01", title: text.waProc1Title, desc: text.waProc1Desc },
        { num: "02", title: text.waProc2Title, desc: text.waProc2Desc },
        { num: "03", title: text.waProc3Title, desc: text.waProc3Desc },
        { num: "04", title: text.waProc4Title, desc: text.waProc4Desc }
      ]
    },
    cta: {
      title: text.waCtaTitle,
      sub: text.waCtaSub,
      btn: text.waCtaBtn,
      message: text.waCtaMessage
    }
  };
};
