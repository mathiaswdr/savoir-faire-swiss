'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

type GalleryImage = {
  url: string;
  alt: string;
  caption?: string;
};

type ProjectGalleryModalProps = {
  images: GalleryImage[];
};

export default function ProjectGalleryModal({ images }: ProjectGalleryModalProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedImage = selectedIndex === null ? undefined : images[selectedIndex];

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  if (images.length === 0) {
    return null;
  }

  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <div key={image.url} className="group">
            <button
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="relative block h-80 w-full overflow-hidden rounded-lg"
              aria-label={`Voir l'image en grand: ${image.alt}`}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </button>
            {image.caption ? (
              <p className="text-sm text-gray-600 mt-2 text-center">
                {image.caption}
              </p>
            ) : null}
          </div>
        ))}
      </div>

      {selectedImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          onClick={() => setSelectedIndex(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-lg bg-white text-black transition-colors hover:bg-[#EDF4DB]"
          >
            <X className="h-6 w-6" aria-hidden="true" />
            <span className="sr-only">Fermer</span>
          </button>

          <div
            className="flex w-full max-w-6xl flex-col gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-[80dvh] w-full">
              <Image
                src={selectedImage.url}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            {selectedImage.caption ? (
              <p className="text-center text-sm text-white">
                {selectedImage.caption}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
