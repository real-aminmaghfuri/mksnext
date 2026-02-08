
"use client";

import { useConfig } from 'ui';
import { DICTIONARY } from 'shared';
import { ContactContent } from './types';

export const useContact = (): ContactContent => {
  const { language } = useConfig();
  const text = DICTIONARY[language];

  return {
    heading: text.contactHeading,
    sub: text.contactSub,
    qna: text.contactQna,
    info: {
        officeLegal: text.contactOfficeLegalTitle,
        officeOps: text.contactOfficeOpsTitle,
        labelWa: text.contactLabelWa,
        labelEmail: text.contactLabelEmail,
        labelHours: text.contactLabelHours
    },
    form: {
      title: text.contactFormTitle,
      namePlaceholder: text.contactFormName,
      waPlaceholder: text.contactFormWa,
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
      desc: text.contactMapsDesc
    }
  };
};
