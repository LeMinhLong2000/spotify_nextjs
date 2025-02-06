"use client";
import AuthModal from "@/components/AuthModal";
import { ProductWithPrices } from "@/types";
import React, { useEffect, useState } from "react";

interface ModalProviderProps {
  products: ProductWithPrices[];
}

const ModalProvider: React.FC<ModalProviderProps> = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <AuthModal />
    </>
  );
};

export default ModalProvider;
