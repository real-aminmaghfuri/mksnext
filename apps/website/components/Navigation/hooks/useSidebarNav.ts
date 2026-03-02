"use client";

import { useState, useEffect } from 'react';
import { MenuItem, SubMenuItem } from '../types';

interface UseSidebarNavProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * useSidebarNav - Hook to manage the logic of the LandscapeSidebar navigation.
 * Handles menu stack, direction, and lifecycle (opening/closing).
 */
export function useSidebarNav({ isOpen, onClose }: UseSidebarNavProps) {
  const [navStack, setNavStack] = useState<MenuItem[]>([]);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [isClosing, setIsClosing] = useState(false);

  // Reset state when menu opens
  useEffect(() => {
    if (isOpen) {
      setNavStack([]);
      setDirection('forward');
      setIsClosing(false);
      // Lock body scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
        onClose();
        setIsClosing(false); 
    }, 300);
  };

  const pushMenu = (item: MenuItem) => {
    setDirection('forward');
    setNavStack([...navStack, item]);
  };

  const popMenu = () => {
    setDirection('backward');
    const newStack = [...navStack];
    newStack.pop();
    setNavStack(newStack);
  };

  // Helper to get flattened items
  const getSubItems = (item: MenuItem): SubMenuItem[] => {
    if (item.items) return item.items;
    if (item.columns) {
      return item.columns.flatMap(col => col.items);
    }
    return [];
  };

  const currentParent = navStack.length > 0 ? navStack[navStack.length - 1] : null;

  return {
    navStack,
    direction,
    isClosing,
    currentParent,
    handleClose,
    pushMenu,
    popMenu,
    getSubItems
  };
}
