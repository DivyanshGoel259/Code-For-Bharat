import React, { useState, useRef, useEffect, useCallback } from 'react';
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

  const generateSwag = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !frameImage.current) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 800;

    const frameWidth = 800;
    const frameHeight = 800;
    const frameX = (canvas.width - frameWidth) / 2;
    const frameY = (canvas.height - frameHeight) / 2;

    ctx.drawImage(frameImage.current, frameX, frameY, frameWidth, frameHeight);

    if (image) {
      const img = new window.Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const photoAreaX = 200;
        const photoAreaY = 150;
        const photoAreaWidth = 500;
        const photoAreaHeight = 500;

        const scale = Math.max(
          photoAreaWidth / img.width,
          photoAreaHeight / img.height
        );

        const scaledWidth = img.width * scale;
        const scaledHeight = img.height * scale;

        const x = photoAreaX + (photoAreaWidth - scaledWidth) / 2;
        const y = photoAreaY + (photoAreaHeight - scaledHeight) / 2;

        ctx.drawImage(frameImage.current!, 0, 0, canvas.width, canvas.height);

        ctx.save();
        ctx.beginPath();
        ctx.rect(photoAreaX, photoAreaY, photoAreaWidth, photoAreaHeight);
        ctx.closePath();
        ctx.clip();

        ctx.drawImage(img, x, y, scaledWidth, scaledHeight);

        ctx.restore();

        if (name.trim()) {
          ctx.font = 'bold 60px "Space Grotesk", Arial, sans-serif';
          ctx.fillStyle = '#ffffff';
          ctx.textAlign = 'center';
          ctx.strokeStyle = '#000000';
          ctx.lineWidth = 2;
          ctx.strokeText(name.toUpperCase(), canvas.width / 2, 750);
          ctx.fillText(name.toUpperCase(), canvas.width / 2, 750);
        }
      };
      img.onerror = () => {
        ctx.drawImage(frameImage.current!, 0, 0, canvas.width, canvas.height);
        if (name.trim()) {
          ctx.font = 'bold 60px "Space Grotesk", Arial, sans-serif';
          ctx.fillStyle = '#ffffff';
          ctx.textAlign = 'center';
          ctx.strokeStyle = '#000000';
          ctx.lineWidth = 2;
          ctx.strokeText(name.toUpperCase(), canvas.width / 2, 750);
          ctx.fillText(name.toUpperCase(), canvas.width / 2, 750);
        }
      };
      img.src = image;
    } else {
      ctx.drawImage(frameImage.current, 0, 0, canvas.width, canvas.height);
      if (name.trim()) {
        ctx.font = 'bold 60px "Space Grotesk", Arial, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.strokeText(name.toUpperCase(), canvas.width / 2, 750);
        ctx.fillText(name.toUpperCase(), canvas.width / 2, 750);
      }
    }
  }, [image, name]);

  useEffect(() => {
    const font = new FontFace(
      'Space Grotesk',
      'url(https://fonts.gstatic.com/s/spacegrotesk/v13/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7oUXskPMBBSSJLm2E.woff2)'
    );

    const img = new Image();
    img.src = '/call-for-hackers-1.png';
    img.onload = () => {
      frameImage.current = img;
      generateSwag();
    };

    font.load().then(() => {
      document.fonts.add(font);
      generateSwag();
    });
  }, [generateSwag]);

  useEffect(() => {
    generateSwag();
  }, [image, name, generateSwag]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `code-for-bharat-${name.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    link.href = canvas.toDataURL('image/jpeg');
    link.click();
  };

  return (
    <div id="swag" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 mt-[-1.5rem]">
          <h1
            className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white tracking-wider mb-4"
            style={{ fontFamily: "Hagrid-Text-Extrabold-trial, serif" }}
          >
            DIGITAL SWAG
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 aspect-square bg-[#1a0f0f] rounded-lg overflow-hidden shadow-2xl">
            <canvas ref={canvasRef} className="w-full h-full" />
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 space-y-6">
            <div className="max-w-2xl mx-auto text-gray-300 space-y-3 mb-6">
              <p className="text-sm" style={{ fontFamily: "Zendots, monospace" }}>
                We appreciate your participation in Code For Bharat Season 2! For all of you, we have a gift 🎁—this season’s Digital Swag. You can download it, post it on your socials, and don’t forget to tag us. There is a special gift 🎁 for you!
              </p>
              <ul className="list-disc list-inside space-y-1" style={{ fontFamily: "Zendots, monospace", fontSize: "0.85rem" }}>
                <li>Upload your photo</li>
                <li>Download your Digital Swag</li>
                <li>Share it on social media and tag us for special gift! 🎁</li>
              </ul>
              <p className="text-orange-400 font-semibold mt-2" style={{ fontFamily: "Zendots, monospace", fontSize: "0.85rem" }}>
                Special gift 🎁 for some lucky hackers—announcement soon!
              </p>
              <p className="text-xs italic mt-3" style={{ fontFamily: "Zendots, monospace" }}>
                Note: Your privacy is our priority. We do not store your photos on our servers or use them in any other way that compromises your privacy.
              </p>
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
                className="w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-all"
                style={{ fontFamily: "Zendots, monospace" }}
              >
                <Upload className="w-5 h-5" />
                Upload Image
              </button>

              <button
                onClick={handleDownload}
                className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg transition-all"
                style={{ fontFamily: "Zendots, monospace" }}
              >
                <Download className="w-5 h-5" />
                Download Badge
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalSwag;
