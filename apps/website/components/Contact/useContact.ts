
"use client";

import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { MapPin, Phone, Mail } from 'lucide-react';
import { ContactContent } from './types';

export const useContact = (): ContactContent => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  return {
    heading: text.contactHeading,
    sub: text.contactSub,
    infoItems: [
      {
        title: text.contactOfficeTitle,
        desc: text.contactOfficeDesc,
        value: "Jl. Slamet Riyadi No. X, Solo",
        icon: MapPin,
        action: "https://maps.google.com",
        actionLabel: "MAPS"
      },
      {
        title: text.contactPhoneTitle,
        desc: text.contactPhoneDesc,
        value: "+62 812-XXXX-XXXX",
        icon: Phone,
        action: "https://wa.me/62812XXXXXXXX",
        actionLabel: "WHATSAPP"
      },
      {
        title: text.contactEmailTitle,
        desc: text.contactEmailDesc,
        value: "biz@mesinkasirsolo.com",
        icon: Mail,
        action: "mailto:biz@mesinkasirsolo.com",
        actionLabel: "EMAIL"
      }
    ],
    form: {
      title: text.contactFormTitle,
      namePlaceholder: text.contactFormName,
      emailPlaceholder: text.contactFormEmail,
      msgPlaceholder: text.contactFormMsg,
      btn: text.contactFormBtn
    }
  };
};
