"use client"


import React, { useState, useRef, useEffect } from 'react';
import { Upload, Download } from 'lucide-react';
import AnimatedSection from './animatedsection';

const DigitalSwag: React.FC = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateSwag = () => {
    const canvas = canvasRef.current;
    if (!canvas || !image) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Load image
    const img = new Image();
    img.onload = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate aspect ratio to fit image
      const scale = Math.min(
        canvas.width / img.width,
        canvas.height / img.height
      );
      const x = (canvas.width - img.width * scale) / 2;
      const y = (canvas.height - img.height * scale) / 2;

      // Draw image
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

      // Add name overlay
      if (name) {
        ctx.fillStyle = 'white';
        ctx.font = '24px Inter';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        ctx.fillText(name, canvas.width / 2, canvas.height - 20);
      }
    };
    img.src = image;
  };

  useEffect(() => {
    generateSwag();
  }, [image, name]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `ctb-swag-${name || 'card'}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <section id="swag" className="min-h-screen relative bg-slate-900 flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6985003/pexels-photo-6985003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-slate-800"
            style={{
              transform: `scale(${1 + i * 0.15})`,
              opacity: 1 - i * 0.1
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection variant="fade-up" className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider">
            DIGITAL SWAG
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {/* LinkedIn instructions placeholder */}
          <div className="h-12 mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Preview Card */}
            <div className="aspect-square relative rounded-lg overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600">
              <canvas
                ref={canvasRef}
                width={500}
                height={500}
                className="w-full h-full object-contain"
              />
              {!image && (
                <div className="absolute inset-0 flex items-center justify-center text-white/50">
                  Upload an image to preview
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-mono">
                  Enter your Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="flex gap-4">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all"
                >
                  <Upload className="w-5 h-5" />
                  Upload Image
                </button>

                <button
                  onClick={handleDownload}
                  disabled={!image}
                  className={`
                    flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all
                    ${image 
                      ? 'bg-white text-slate-900 hover:shadow-lg' 
                      : 'bg-slate-700 text-slate-400 cursor-not-allowed'}
                  `}
                >
                  <Download className="w-5 h-5" />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalSwag;