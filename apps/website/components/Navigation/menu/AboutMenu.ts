
import { User, BookOpen, FolderOpen, Briefcase, Mail, Cpu } from 'lucide-react';
import { Translation } from 'shared';
import { MenuItem } from '../types';

export const getAboutMenu = (text: Translation): MenuItem => ({
  label: text.navAbout,
  path: '#',
  hasDropdown: true,
  icon: User,
  columns: [
    {
       title: text.navAboutCompany,
       width: 'wide',
       items: [
          { label: text.navAboutProfile, path: '/about', icon: User, desc: "Sejarah, Visi & Legitimasi PT MKS" },
          { label: text.navAboutVision, path: '/vision', icon: BookOpen, desc: "Blueprint Masa Depan" },
          { label: text.navAboutPortfolio, path: '/portfolio', icon: FolderOpen, desc: "Bukti Otentik Project" },
          { label: text.navCareer, path: '/career', icon: Briefcase, desc: "Gabung Pasukan Elite" },
          { label: text.navContact, path: '/contact', icon: Mail, desc: "Markas Komando & Kontak" },
       ]
    },
    {
       title: text.navInnoHeader,
       width: 'narrow',
       items: [
           { label: text.navInnoSibos, path: '/sibos', icon: Cpu, desc: "Sistem ERP Terintegrasi" },
           { label: text.navInnoQalam, path: '/qalam', icon: BookOpen, desc: "Manajemen Pendidikan Digital" },
       ]
    }
  ]
});
