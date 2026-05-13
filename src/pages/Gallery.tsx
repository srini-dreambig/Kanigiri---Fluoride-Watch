import React, { useState, useCallback } from "react";
import { useLanguage } from "../context/LanguageContext";
import { 
  Upload, 
  Image as ImageIcon, 
  X, 
  Plus,
  ArrowUpRight,
  Camera,
  Layers,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  timestamp: number;
}

export const Gallery = () => {
  const { t } = useLanguage();
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const processFiles = (files: FileList | File[]) => {
    const fileArray = Array.from(files).filter(file => file.type.startsWith("image/"));
    if (fileArray.length === 0) return;
    
    setIsUploading(true);
    const promises = fileArray.map(file => {
      return new Promise<GalleryImage>((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          resolve({
            id: Math.random().toString(36).substr(2, 9),
            url: e.target?.result as string,
            caption: "Observation from the field",
            timestamp: Date.now()
          });
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(promises).then(newImages => {
      // Simulate network delay
      setTimeout(() => {
        setImages(prev => [...newImages, ...prev]);
        setIsUploading(false);
      }, 1000);
    });
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files);
    }
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(e.target.files);
    }
  };

  const removeImage = (id: string) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  return (
    <div className="pt-24 pb-24 px-6 min-h-screen max-w-7xl mx-auto space-y-16">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-indigo-500">
          {t.gallery.title}
        </h1>
        <p className="max-w-2xl opacity-60">
          {t.gallery.description}
        </p>
      </div>

      {/* --- UPLOAD ZONE --- */}
      <div 
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`relative p-12 md:p-20 border-2 border-dashed rounded-3xl transition-all duration-300 flex flex-col items-center justify-center text-center space-y-6 ${
          dragActive ? "border-indigo-500 bg-indigo-500/5 scale-[0.99]" : "border-white/10 bg-white/[0.02] hover:border-white/20"
        }`}
      >
        <div className="w-20 h-20 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
          {isUploading ? (
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            >
              <Plus size={40} />
            </motion.div>
          ) : (
            <Upload size={40} />
          )}
        </div>
        
        <div className="space-y-2">
          <h3 className="text-2xl font-black uppercase italic">
            {isUploading ? "Uploading Data..." : "Drag & Drop Photos"}
          </h3>
          <p className="text-sm opacity-40">PNG, JPG or WebP up to 10MB</p>
        </div>

        <label className="cursor-pointer px-8 py-4 bg-white text-black font-black uppercase text-xs tracking-widest hover:scale-105 transition-all rounded-lg inline-flex items-center gap-3">
           <Camera size={18} /> {t.gallery.upload_btn}
           <input type="file" className="hidden" accept="image/*" multiple onChange={handleFileInput} />
        </label>

        {dragActive && (
          <div className="absolute inset-0 bg-indigo-500/10 pointer-events-none flex items-center justify-center">
            <div className="p-4 rounded-xl bg-indigo-500 text-white font-black uppercase text-xs tracking-widest shadow-2xl">
              Drop to Upload
            </div>
          </div>
        )}
      </div>

      {/* --- GRID --- */}
      <div className="space-y-8">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
           <div className="flex items-center gap-4">
              <Layers size={18} className="text-indigo-400" />
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Documentation Feed</span>
           </div>
           <span className="text-[10px] font-mono opacity-30">{images.length} Evidence Pieces</span>
        </div>

        {images.length === 0 ? (
          <div className="py-20 text-center space-y-4 opacity-20">
             <ImageIcon size={64} className="mx-auto" />
             <p className="text-sm uppercase tracking-widest font-bold">{t.gallery.no_images}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {images.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="glass-card overflow-hidden group border-white/5 bg-white/[0.02]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={img.url} 
                      alt="User documentation" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <button 
                        onClick={() => removeImage(img.id)}
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                      >
                        <X size={20} />
                      </button>
                      <a 
                        href={img.url} 
                        target="_blank" 
                        className="p-3 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white transition-colors"
                      >
                        <ArrowUpRight size={20} />
                      </a>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest opacity-40">
                      <span>Community Submission</span>
                      <span>{new Date(img.timestamp).toLocaleDateString()}</span>
                    </div>
                    <p className="text-sm font-light opacity-80 leading-relaxed italic">
                      "{img.caption}"
                    </p>
                    <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-green-500">
                       <CheckCircle size={12} /> Verified Location
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* --- INFO --- */}
      <div className="p-8 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 flex items-start gap-6">
         <AlertCircle className="text-indigo-400 shrink-0" size={24} />
         <div className="space-y-2">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">Media Policy</h4>
            <p className="text-xs opacity-60 leading-relaxed font-light">
              {t.gallery.policy}
            </p>
         </div>
      </div>
    </div>
  );
};
