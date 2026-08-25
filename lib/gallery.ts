export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  span: number; // CSS grid-row span for masonry effect
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "g1",
    src: "/images/gallery-1.jpg",
    alt: "Vibrant crowd dancing at VEXJKT event",
    span: 2,
  },
  {
    id: "g2",
    src: "/images/gallery-2.jpg",
    alt: "DJ performing with emerald green lights",
    span: 3,
  },
  {
    id: "g3",
    src: "/images/gallery-3.jpg",
    alt: "VIP table service with sparklers",
    span: 2,
  },
  {
    id: "g4",
    src: "/images/gallery-4.jpg",
    alt: "Festival crowd with colorful stage lights",
    span: 2,
  },
  {
    id: "g5",
    src: "/images/gallery-5.jpg",
    alt: "Stage dancers performing at VEXJKT",
    span: 3,
  },
  {
    id: "g6",
    src: "/images/gallery-6.jpg",
    alt: "Premium bar area at VEXJKT venue",
    span: 2,
  },
];
