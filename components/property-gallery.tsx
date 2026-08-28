import type { PropertyImage } from "@/types/property";

export function PropertyGallery({ images }: { images: PropertyImage[] }) {
  if (images.length === 0) {
    return <div className="aspect-[16/9] rounded-md bg-metri-mint" />;
  }

  return (
    <div className="grid gap-3">
      <div className="aspect-[16/9] rounded-md bg-metri-mint" />
      <div className="grid grid-cols-4 gap-3">
        {images.slice(0, 4).map((image) => (
          <div className="aspect-[4/3] rounded-md bg-metri-mint" key={image.id} aria-label={image.alt_text ?? image.storage_path} />
        ))}
      </div>
    </div>
  );
}
