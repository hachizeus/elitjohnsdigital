import React, { useState, useRef } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  media: string;
  mediaType: string;
  title: string;
}

const MediaModal = ({ isOpen, onClose, media, mediaType, title }: MediaModalProps) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Scroll to top when modal opens
  React.useEffect(() => {
    if (isOpen && containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDoubleClick = () => {
    if (zoom === 1) {
      setZoom(2);
    } else if (zoom === 2) {
      setZoom(3);
    } else {
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Controls */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 flex gap-1 sm:gap-2">
        {mediaType === 'image' && (
          <>
            <button
              onClick={() => setZoom(prev => Math.min(5, prev + 0.5))}
              className="bg-black/50 text-white p-1.5 sm:p-2 rounded-lg hover:bg-black/70 transition-colors"
            >
              <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={() => setZoom(prev => Math.max(0.5, prev - 0.5))}
              className="bg-black/50 text-white p-1.5 sm:p-2 rounded-lg hover:bg-black/70 transition-colors"
            >
              <ZoomOut className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={resetZoom}
              className="bg-black/50 text-white p-1.5 sm:p-2 rounded-lg hover:bg-black/70 transition-colors"
            >
              <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </>
        )}
        <button
          onClick={onClose}
          className="bg-black/50 text-white p-1.5 sm:p-2 rounded-lg hover:bg-black/70 transition-colors"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
      
      {/* Modal Content */}
      <div ref={containerRef} className="relative z-10 w-[98vw] sm:w-[95vw] h-[92vh] sm:h-[90vh] overflow-auto">
        {mediaType === 'video' ? (
          <div className="w-full h-full flex items-center justify-center relative">
            <video
              ref={videoRef}
              src={media}
              autoPlay
              loop
              muted
              playsInline
              className="max-w-full max-h-full object-contain"
              style={{
                width: 'auto',
                height: 'auto'
              }}
              onLoadedMetadata={(e) => {
                const video = e.currentTarget;
                const isVertical = video.videoHeight > video.videoWidth;
                if (isVertical) {
                  video.style.height = '100%';
                  video.style.width = 'auto';
                } else {
                  video.style.width = '100%';
                  video.style.height = 'auto';
                  video.style.maxHeight = '100%';
                }
                video.play().catch(console.error);
              }}
              onClick={() => {
                if (videoRef.current) {
                  videoRef.current.muted = !videoRef.current.muted;
                }
              }}
            />
          </div>
        ) : (
          <div 
            className="min-h-full flex justify-center p-2 sm:p-4"
            onDoubleClick={handleDoubleClick}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <img
              ref={imageRef}
              src={media}
              alt={title}
              className="transition-transform duration-300 ease-out block max-w-full"
              style={{
                transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
                width: 'auto',
                height: 'auto',
                display: 'block'
              }}
              draggable={false}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaModal;