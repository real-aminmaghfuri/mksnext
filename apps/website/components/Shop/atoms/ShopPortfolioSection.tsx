
"use client";
import React from 'react';
import { PortfolioItem } from 'shared';
import { GlassCard, Button } from 'ui';
import { HardDrive, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ShopPortfolioProps {
  projects: PortfolioItem[];
}

export const ShopPortfolioSection: React.FC<ShopPortfolioProps> = ({ projects }) => {
  return (
    <div className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 py-24 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#00000005_25%,transparent_25%,transparent_75%,#00000005_75%,#00000005),linear-gradient(45deg,#00000005_25%,transparent_25%,transparent_75%,#00000005_75%,#00000005)] bg-[size:20px_20px] bg-[position:0_0,10px_10px]" />

        <div className="container mx-auto px-6 relative z-10">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <div className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-500 mb-2">
                        <HardDrive size={20} />
                        <h3 className="font-black uppercase tracking-widest text-xs">BUKTI LAPANGAN</h3>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter">
                        Instalasi Hardware
                    </h2>
                </div>
                <Link href="/portfolio?category=PHYSICAL">
                    <Button variant="outline" className="hidden md:flex">
                        Lihat Semua Project <ArrowRight size={16} className="ml-2" />
                    </Button>
                </Link>
            </div>

            {/* Grid 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {projects.map((item) => (
                    <Link href={`/portfolio/${item.id}`} key={item.id} className="block h-full">
                        <GlassCard variant="solid" className="group bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 overflow-hidden hover:-translate-y-1 transition-transform duration-300 h-full">
                            <div className="relative aspect-video overflow-hidden">
                                <Image 
                                    src={item.image} 
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            </div>
                            <div className="p-6">
                                <h4 className="font-bold text-zinc-900 dark:text-white mb-2 line-clamp-2 leading-tight group-hover:text-brand-600 dark:group-hover:text-brand-500 transition-colors">
                                    {item.title}
                                </h4>
                                <span className="text-[10px] font-bold px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 uppercase tracking-wide">
                                    {item.tag}
                                </span>
                            </div>
                        </GlassCard>
                    </Link>
                ))}
            </div>

            {/* Mobile Button */}
            <Link href="/portfolio?category=PHYSICAL" className="md:hidden block">
                <Button fullWidth variant="outline">
                    Lihat Semua Project <ArrowRight size={16} className="ml-2" />
                </Button>
            </Link>

        </div>
    </div>
  );
};
