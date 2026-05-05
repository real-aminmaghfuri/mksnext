"use client";

import React, { createContext, useContext, ReactNode } from 'react';

export const ConfigProvider = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export const useConfig = () => {
  return {};
};
