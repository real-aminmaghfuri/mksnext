
"use client";

import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { Monitor, Code, TrendingUp, Users } from 'lucide-react';
import { ServicesContent } from './types';

export const useServices = (): ServicesContent => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  return {
    title: text.servicesTitle,
    subtitle: text.servicesSub,
    items: [
      {
        icon: Monitor,
        title: text.srvHardware,
        desc: text.srvHardwareDesc,
        gradient: "from-orange-500 to-red-600"
      },
      {
        icon: Code,
        title: text.srvSoftware,
        desc: text.srvSoftwareDesc,
        gradient: "from-blue-500 to-cyan-600"
      },
      {
        icon: TrendingUp,
        title: text.srvSeo,
        desc: text.srvSeoDesc,
        gradient: "from-emerald-500 to-green-600"
      },
      {
        icon: Users,
        title: text.srvConsulting,
        desc: text.srvConsultingDesc,
        gradient: "from-purple-500 to-indigo-600"
      }
    ]
  };
};
