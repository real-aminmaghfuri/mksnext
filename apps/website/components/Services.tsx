import React from 'react';
import { useConfig, GlassCard } from 'ui';
import { DICTIONARY } from 'shared';
import { Monitor, Code, TrendingUp, Users } from 'lucide-react';

export const Services: React.FC = () => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  const services = [
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
  ];

  return (
    <section className="py-24 relative z-10 bg-white dark:bg-luxury-dark transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tight">
            {text.servicesTitle}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {text.servicesSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <GlassCard key={idx} hoverEffect className="p-6 h-full flex flex-col">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 text-white shadow-lg`}>
                <item.icon size={28} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.desc}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};