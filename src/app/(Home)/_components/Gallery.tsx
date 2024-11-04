"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Download, X } from 'lucide-react';

interface GalleryItem {
  title: string;
  img: string;
  description: string;
  id: number; // Added id property to GalleryItem
}

const Gallery = () => {
  const items: GalleryItem[] = [
    {
      title:"Nature's Beauty",
      img:"/IMG_0048.JPG",
      description: "A beautiful view of nature.",
      id: 1, // Added id
    },
    {
      title:"Sunset Serenity",
      img:"/IMG_0048.JPG",
      description: "A serene sunset over the horizon.",
      id: 2, // Added id
    },
    {
      title:"Mountain Majesty",
      img:"/IMG_0048.JPG",
      description: "Majestic mountains reaching for the sky.",
      id: 3, // Added id
    },
    {
      title:"Cityscape Delight",
      img:"/IMG_0048.JPG",
      description: "A vibrant city skyline at night.",
      id: 4, // Added id
    },
    {
      title:"Wildlife Wonder",
      img:"/IMG_0048.JPG",
      description: "Incredible wildlife in their natural habitat.",
      id: 5, // Added id
    },
    {
      title:"Seaside Tranquility",
      img:"/IMG_0048.JPG",
      description: "A peaceful beach with gentle waves.",
      id: 6, // Added id
    },
    {
      title:"Desert Dreams",
      img:"/IMG_0048.JPG",
      description: "The vast beauty of the desert landscape.",
      id: 7, // Added id
    },
    {
      title:"Forest Fantasy",
      img:"/IMG_0048.JPG",
      description: "A magical forest filled with wonders.",
      id: 8, // Added id
    },
  ];
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-12 px-8 py-32 md:px-16">
      <h1 className="text-4xl font-semibold animate-in duration-700">Our Gallery</h1>
      <div className="container mx-auto p-4">
      <div className="columns-2 md:columns-3 2xl:columns-4 gap-4">
        {items.map((image, index) => (
          <ImageItem
          key={index}
          item={image}
          index={index}
          setSelected={setSelected}
        />
        ))}
      </div>
      </div>
      <Modal selected={selected} setSelected={setSelected} />
    </div>
  );
};

interface ImageItemProps {
  item: GalleryItem;
  index: number;
  setSelected: (item: GalleryItem) => void;
}

const ImageItem: React.FC<ImageItemProps> = ({ item, index, setSelected }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.figure
      whileTap={{ scale: 0.9 }}
      initial='hidden'
      animate={isInView && 'visible'}
      ref={ref}
      className="inline-block group w-full  rounded-md relative dark:bg-black bg-white overflow-hidden before:absolute before:top-0 before:content-[''] before:h-full before:w-full hover:before:bg-gradient-to-t dark:before:to-gray-900  before:from-black/90 before:from-5% before:to-transparent before:to-90% cursor-pointer"
      onClick={() => setSelected(item)}
    >
      <motion.img
        layoutId={`card-${item.id}`} 
        whileHover={{ scale: 1.025 }}
        src={item.img}
        className='w-full bg-base-100 shadow-xl image-full cursor-pointer'
      />
      <div className='flex flex-wrap mt-2 text-yellow-600 absolute bottom-0 left-0 p-2 group-hover:opacity-100 opacity-0 font-semibold '>
        <h1>{item.title}</h1>
      </div>
    </motion.figure>
  );
}

interface ModalProps {
  selected: GalleryItem | null;
  setSelected: (item: GalleryItem | null) => void;
}

const Modal: React.FC<ModalProps> = ({ selected, setSelected }) => {
  const itemVariants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.2, // Adjust the stagger delay as needed
      },
    },
    exit: {
      opacity: 0,
      y: 20,
    },
  };
  useEffect(() => {
    if (selected) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelected(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selected]);
  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelected(null)}
          className='fixed inset-0 bg-black/50 min-h-96 backdrop-blur-sm z-50 p-4 cursor-pointer overflow-y-scroll'
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            layoutId={`card-${selected.id}`}
            className='w-full max-w-[1000px] relative overflow-x-hidden mx-auto my-8 cursor-default dark:bg-[#202020] bg-[#ebebeb] '
          >
            <button
              className='absolute top-2 right-2 z-50 p-2 mix-blend-multiply'
              onClick={() => setSelected(null)}
            >
              <X />
            </button>
            <motion.div className=' w-full h-[70vh] relative  rounded-md'>
              <Image
                fill
                alt='img'
                src={selected.img}
                className='w-full h-full object-contain rounded-md dark:bg-black bg-white'
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              className='bg-white dark:bg-black dark:text-white text-black p-4  rounded-md  px-8'
            >
              <motion.h3
                variants={itemVariants}
                className='text-2xl font-bold mb-2'
              >
                {selected.title}
              </motion.h3>
              <motion.div variants={itemVariants} className='flex gap-2'>
                {selected.tags ?
                   selected.tags.map((tag) => (
                  <div
                    className='bg-base-300 border  dark:bg-gray-100 bg-gray-50 text-zinc-600 px-2 py-1 rounded-md'
                    key={tag}
                  >
                    {tag}
                  </div>
                )) : null}
              </motion.div>
              <motion.p variants={itemVariants} className='my-4'>
                {selected.description}
              </motion.p>
              
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Gallery;
