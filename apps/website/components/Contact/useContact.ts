
"use client";

import { useConfig } from 'ui';
import { DICTIONARY, CompanyIdentity } from 'shared';
import { ContactContent } from './types';

export const useContact = (identity: CompanyIdentity): ContactContent => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  return {
    heading: text.contactHeading,
    sub: text.contactSub,
    qna: {
        title: text.contactQnaTitle,
        items: text.contactQna
    },
    info: {
        infoTitle: text.contactInfoTitle,
        officeLegal: text.contactOfficeLegalTitle,
        officeLegalAddress: identity.addressLegal || text.contactOfficeLegalAddress,
        officeOps: text.contactOfficeOpsTitle,
        officeOpsAddress: identity.addressOps || text.contactOfficeOpsAddress,
        labelWa: text.contactLabelWa,
        labelEmail: text.contactLabelEmail,
        labelHours: text.contactLabelHours,
        // New Dynamic Data passed to UI
        dynamicWa: identity.whatsapp,
        dynamicEmail: identity.email,
        dynamicHours: identity.operatingHours || "Senin - Sabtu: 08:00 - 17:00"
    },
    form: {
      title: text.contactFormTitle,
      namePlaceholder: text.contactFormName,
      waPlaceholder: text.contactFormWa,
      addressPlaceholder: text.contactFormAddress,
      topicLabel: text.contactFormTopic,
      msgPlaceholder: text.contactFormMsg,
      btn: text.contactFormBtn,
      note: text.contactFormNote,
      topics: [
          text.contactTopic1, 
          text.contactTopic2, 
          text.contactTopic3, 
          text.contactTopic4
      ]
    },
    maps: {
      title: text.contactMapsTitle,
      desc: text.contactMapsDesc,
      embedUrl: identity.mapEmbedUrl // Pass the embed URL
    }
  };
};
