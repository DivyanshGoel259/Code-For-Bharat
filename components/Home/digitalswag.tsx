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
    canvas.width = 800;
    canvas.height = 800;

    // Draw the frame
    const frameWidth = 800;
    const frameHeight = 800;

    // Center the frame on the canvas
    const frameX = (canvas.width - frameWidth) / 2;
    const frameY = (canvas.height - frameHeight) / 2;

    ctx.drawImage(frameImage.current, frameX, frameY, frameWidth, frameHeight);

    // If there's an uploaded image, draw it in the red area
    if (image) {
      const img = new Image();
      img.onload = () => {
        // Calculate dimensions to fit the image in the red area while maintaining aspect ratio
        const redAreaX = 200;
        const redAreaY = 150;
        const redAreaWidth = 500;
        const redAreaHeight = 500;

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
          ctx.fillStyle = '#ffffff';
          ctx.textAlign = 'center';
          ctx.font = 'bold 60px "Space Grotesk"';
          ctx.fillText(name.toUpperCase(), canvas.width / 2, 750);
        }
      };
      img.src = image;
    } else if (name) {
      // If no image but name exists, just draw the name
      ctx.font = 'bold 60px "Space Grotesk"';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.fillText(name.toUpperCase(), canvas.width / 2, 750);
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
    img.src = '/call-for-hackers-1.png';
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
          {/* Preview */}
          <div className="w-full md:w-1/2 lg:w-1/3 aspect-square bg-[#1a0f0f] rounded-lg overflow-hidden shadow-2xl">
            <canvas
              ref={canvasRef}
              className="w-full h-full"
            />
          </div>

          {/* Controls */}
          <div className="w-full md:w-1/2 lg:w-1/3 space-y-6">
            <div className="max-w-2xl mx-auto text-gray-300 space-y-3 mb-6">
              <p
                className="text-xs"
                style={{ fontFamily: "Zendots, monospace" }}
              >
                We appreciate your participation in Code For Bharat Season 2! For all of you, we have a gift 🎁—this season’s Digital Swag. You can download it, post it on your socials, and don’t forget to tag us. There is a special gift 🎁 for you!
              </p>
              <ul
                className="list-disc list-inside space-y-1"
                style={{ fontFamily: "Zendots, monospace", fontSize: "0.85rem" }}
              >
                <li>Enter your name</li>
                <li>Upload your photo</li>
                <li>Download your Digital Swag</li>
                <li>Share it on social media and tag us for special gift! 🎁</li>
              </ul>
              <p
                className="text-orange-400 font-semibold mt-2"
                style={{ fontFamily: "Zendots, monospace", fontSize: "0.85rem" }}
              >
                Special gift 🎁 for some lucky hackers—announcement soon!
              </p>
              <p
                className="text-xs italic mt-3"
                style={{ fontFamily: "Zendots, monospace" }}
              >
                Note: Your privacy is our priority. We do not store your photos on our servers or use them in any other way that compromises your privacy.
              </p>
            </div>
            <div>
              {/* Name input and label are commented out to disable text writing */}
              {/*
              <label
                className="block text-gray-300 text-sm mb-2"
                style={{ fontFamily: "Zendots, monospace" }}
              >
                Enter your Name:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#1a0f0f] border border-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                placeholder="Your name here"
                style={{ fontFamily: "Zendots, monospace" }}
                disabled
              />
              */}
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
