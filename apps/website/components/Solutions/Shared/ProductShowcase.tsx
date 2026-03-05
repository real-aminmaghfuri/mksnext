
"use client";

import React from 'react';
import { MOCK_PRODUCTS } from 'shared';
import { ProductCardAtom } from '../../Shop/atoms/ProductCardAtom';
import { motion } from 'motion/react';

interface ProductShowcaseProps {
  category?: string;
  title?: string;
  subtitle?: string;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  category,
  title = "SENJATA",
  subtitle = "Pilih hardware yang sesuai dengan kebutuhan tempur bisnis lo. Industrial grade, tahan banting, dan siap kerja 24 jam."
}) => {
  // Filter products by category if provided, otherwise show top 4
  const filteredProducts = category 
    ? MOCK_PRODUCTS.filter(p => p.category === category).slice(0, 4)
    : MOCK_PRODUCTS.slice(0, 4);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-24 bg-zinc-50 dark:bg-black border-t border-zinc-100 dark:border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-600 dark:text-brand-500 font-black text-xs uppercase tracking-[0.2em] mb-3 block"
          >
            HARDWARE REKOMENDASI
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white leading-tight tracking-tighter mb-6"
          >
            {title} <span className="text-brand-600">ANDALAN.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-sm md:text-base font-medium"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
            >
              <ProductCardAtom 
                product={product}
                formattedPrice={formatPrice(product.price)}
                btnText="Pesan Sekarang"
                viewText="Lihat Detail"
                waLink={`https://wa.me/628123456789?text=Halo%20MKS%20Digital,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(product.name)}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
