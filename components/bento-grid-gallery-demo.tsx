import InteractiveBentoGallery from "@/components/interactive-gallery";

const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "Radha's Eyes",
    desc: "Where Krishna finds his soul.",
    url: "/images/1.jpg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "video",
    title: "RadhaKrishna Dance",
    desc: "The divine rhythm where love meets eternity.",
    url: "/videos/2.mp4",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Together, Towards Krishna",
    desc: "Walking together toward divine love",
    url: "/images/3.png",
    span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2 ",
  },
  {
    id: 4,
    type: "video",
    title: "If I Could Run With You",
    desc: "Not just the sea — I long to run into forever, with you by my side.",
    url: "/videos/4.mp4",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },

  {
    id: 5,
    type: "image",
    title: "When Eyes Say Everything",
    desc: "Not every silence is distance — some are folded hands, unseen.",
    url: "/images/7.jpg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },

  {
    id: 6,
    type: "video",
    title: "A Soft Dream With You",
    desc: "One day, you, me, and a little pup — simple, warm, and ours.",
    url: "https://cdn.pixabay.com/video/2024/07/24/222837_large.mp4",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 7,
    type: "video",
    title: "For My Radha — Shiva’s Blessings",
  desc: "A serene moment under Mahadev’s grace, dedicated to you ❤️",
    url: "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
];

export function BentoGridGalleryDemo() {
  return (
    <div className="min-h-screen overflow-y-auto">
      <InteractiveBentoGallery
        mediaItems={mediaItems}
        title="Radha’s Eternall Gallery"
        description="Every frame, a prayer… every moment, a piece of my heart."
      />
    </div>
  );
}
