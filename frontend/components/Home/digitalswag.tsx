"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Upload, Download } from 'lucide-react';

const DigitalSwag: React.FC = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const frameImage = useRef<HTMLImageElement | null>(null);

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
    if (!canvas || !frameImage.current) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 1200;
    canvas.height = 1200;

    // Draw the frame
    ctx.drawImage(frameImage.current, 0, 0, canvas.width, canvas.height);

    // If there's an uploaded image, draw it in the red area
    if (image) {
      const img = new Image();
      img.onload = () => {
        // Calculate dimensions to fit the image in the red area while maintaining aspect ratio
        const redAreaX = 300;
        const redAreaY = 200;
        const redAreaWidth = 900;
        const redAreaHeight = 800;

        const scale = Math.min(
          redAreaWidth / img.width,
          redAreaHeight / img.height
        );

        const scaledWidth = img.width * scale;
        const scaledHeight = img.height * scale;

        // Center the image in the red area
        const x = redAreaX + (redAreaWidth - scaledWidth) / 2;
        const y = redAreaY + (redAreaHeight - scaledHeight) / 2;

        // Draw the image
        ctx.drawImage(img, x, y, scaledWidth, scaledHeight);

        // Draw the name
        if (name) {
          ctx.font = 'bold 120px "Space Grotesk"';
          ctx.fillStyle = '#ffffff';
          ctx.textAlign = 'center';
          ctx.fillText(name.toUpperCase(), canvas.width / 2, 1100);
        }
      };
      img.src = image;
    } else if (name) {
      // If no image but name exists, just draw the name
      ctx.font = 'bold 120px "Space Grotesk"';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.fillText(name.toUpperCase(), canvas.width / 2, 1100);
    }
  };

  useEffect(() => {
    // Load Space Grotesk font
    const font = new FontFace(
      'Space Grotesk',
      'url(https://fonts.gstatic.com/s/spacegrotesk/v13/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7oUXskPMBBSSJLm2E.woff2)'
    );

    // Load the frame image
    const img = new Image();
    img.src = '/pic.jpg';
    img.onload = () => {
      frameImage.current = img;
      generateSwag();
    };

    font.load().then(() => {
      document.fonts.add(font);
      generateSwag();
    });
  }, []);

  useEffect(() => {
    generateSwag();
  }, [image, name]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create a download link
    const link = document.createElement('a');
    link.download = `code-for-bharat-${name.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    link.href = canvas.toDataURL('pic/jpg');
    link.click();
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold text-white text-center mb-16 tracking-wider">
          DIGITAL SWAG
        </h1>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Preview */}
          <div className="w-full md:w-2/3 aspect-square bg-[#1a0f0f] rounded-lg overflow-hidden shadow-2xl">
            <canvas
              ref={canvasRef}
              className="w-full h-full"
            />
          </div>

          {/* Controls */}
          <div className="w-full md:w-1/3 space-y-8">
            <div>
              <label className="block text-gray-400 text-sm mb-2">
                Enter your Name:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#1a0f0f] border border-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                placeholder="Your name here"
              />
            </div>

            <div className="flex flex-col gap-4">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-all"
              >
                <Upload className="w-5 h-5" />
                Upload Image
              </button>

              <button
                onClick={handleDownload}
                className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg transition-all"
              >
                <Download className="w-5 h-5" />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalSwag;
