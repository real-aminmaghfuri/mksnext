
"use client";
import React, { useState } from 'react';
import { Button } from 'ui';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactInfoData, FormData } from '../types';

interface ContactFormLayoutProps {
  info: ContactInfoData;
  form: FormData;
}

export const ContactFormLayoutAtom: React.FC<ContactFormLayoutProps> = ({ info, form }) => {
  const [selectedTopic, setSelectedTopic] = useState(form.topics[0]);

  return (
    <div className="container mx-auto px-6 mb-24 relative z-10 max-w-6xl">
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN (INFO) - SEPARATE CONTAINER */}
          <div className="lg:col-span-4 bg-white dark:bg-zinc-900 p-8 rounded-[32px] border border-zinc-200 dark:border-zinc-800 shadow-xl dark:shadow-none h-full">
              <div className="space-y-8">
                  {/* Legal Office */}
                  <div>
                      <div className="flex items-center gap-2 text-zinc-400 mb-2">
                          <MapPin size={14} />
                          <span className="text-[10px] font-black uppercase tracking-widest text-brand-600 dark:text-brand-500">{info.officeLegal}</span>
                      </div>
                      <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200 leading-relaxed">
                          {info.officeLegalAddress}
                      </p>
                  </div>

                   {/* Ops Office */}
                   <div>
                      <div className="flex items-center gap-2 text-zinc-400 mb-2">
                          <MapPin size={14} />
                          <span className="text-[10px] font-black uppercase tracking-widest text-brand-600 dark:text-brand-500">{info.officeOps}</span>
                      </div>
                      <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200 leading-relaxed">
                          {info.officeOpsAddress}
                      </p>
                  </div>

                  <div className="h-px bg-zinc-100 dark:bg-zinc-800 w-full" />

                  {/* Contact Details */}
                  <div className="space-y-6">
                      <div>
                         <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">{info.labelWa}</p>
                         <p className="font-mono text-base text-brand-600 dark:text-brand-500 font-bold flex items-center gap-2">
                            <Phone size={16} /> 0881-6566-935
                         </p>
                      </div>
                      <div>
                         <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">{info.labelEmail}</p>
                         <p className="font-mono text-sm text-zinc-800 dark:text-zinc-300 font-bold flex items-center gap-2">
                            <Mail size={16} /> owner.kasirsolo@gmail.com
                         </p>
                      </div>
                      <div>
                         <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">{info.labelHours}</p>
                         <p className="font-mono text-sm text-zinc-800 dark:text-zinc-300 font-bold flex items-center gap-2">
                            <Clock size={16} /> 09:00 - 17:00 WIB (Senin - Sabtu)
                         </p>
                      </div>
                  </div>
              </div>
          </div>

          {/* RIGHT COLUMN (FORM) - SEPARATE CONTAINER */}
          <div className="lg:col-span-8 bg-white dark:bg-black p-8 md:p-12 rounded-[32px] border border-zinc-200 dark:border-zinc-800 shadow-2xl dark:shadow-brand-900/10 relative">
              <div className="mb-2">
                  <h3 className="text-3xl font-black text-zinc-900 dark:text-white mb-8">{form.title}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                          <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider ml-1">NAMA PANGGILAN</label>
                          <input 
                              type="text" 
                              placeholder={form.namePlaceholder}
                              className="w-full bg-transparent border border-zinc-300 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm font-medium text-zinc-900 dark:text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                          />
                      </div>
                      <div className="space-y-2">
                          <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider ml-1">NOMOR WHATSAPP</label>
                          <input 
                              type="tel" 
                              placeholder={form.waPlaceholder}
                              className="w-full bg-transparent border border-zinc-300 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm font-medium text-zinc-900 dark:text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                          />
                      </div>
                  </div>

                  <div className="space-y-3 mb-6">
                       <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider ml-1">{form.topicLabel}</label>
                       {/* Full width grid layout for topics */}
                       <div className="grid grid-cols-2 gap-3">
                           {form.topics.map(topic => (
                               <button
                                  key={topic}
                                  onClick={() => setSelectedTopic(topic)}
                                  className={`w-full px-4 py-3 rounded-lg text-xs font-bold border transition-all duration-200 uppercase tracking-wide text-center
                                    ${selectedTopic === topic 
                                        ? 'bg-brand-600 border-brand-600 text-white shadow-lg shadow-brand-500/20' 
                                        : 'bg-transparent border-zinc-300 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-600'
                                    }`}
                               >
                                   {topic}
                               </button>
                           ))}
                       </div>
                  </div>

                  {/* Address Field */}
                  <div className="space-y-2 mb-6">
                        <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider ml-1">ALAMAT / LOKASI LO</label>
                        <input 
                            type="text" 
                            placeholder={form.addressPlaceholder}
                            className="w-full bg-transparent border border-zinc-300 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm font-medium text-zinc-900 dark:text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                        />
                  </div>

                  <div className="space-y-2 mb-8">
                       <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider ml-1">DETAIL PESAN</label>
                       <textarea 
                          rows={5}
                          placeholder={form.msgPlaceholder}
                          className="w-full bg-transparent border border-zinc-300 dark:border-zinc-800 rounded-xl px-4 py-3 text-sm font-medium text-zinc-900 dark:text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 resize-none"
                       />
                  </div>

                  <Button fullWidth size="lg" className="bg-gradient-to-r from-brand-600 to-red-600 hover:to-red-500 font-black tracking-widest shadow-xl shadow-brand-500/20 py-4">
                     <Send size={18} className="mr-2" /> {form.btn}
                  </Button>
                  
                  <p className="text-[10px] text-zinc-500 text-center mt-6 italic">
                      {form.note}
                  </p>

              </div>
          </div>

       </div>
    </div>
  );
};
