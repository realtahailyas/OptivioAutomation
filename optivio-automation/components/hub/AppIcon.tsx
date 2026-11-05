import Image from 'next/image'

// Real app icon from the app's own brand assets (public/apps/<slug>/icon.png, 256px source).
export default function AppIcon({ src, name, size = 56 }: { src: string; name: string; size?: number }) {
  return (
    <Image
      src={src}
      alt={`${name} app icon`}
      width={size}
      height={size}
      sizes={`${size}px`}
      className="shrink-0 rounded-[22%] border border-white/10"
      style={{ width: size, height: size }}
    />
  )
}
