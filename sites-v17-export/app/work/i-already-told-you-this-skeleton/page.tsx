import { SkeletonShell, skeletonMetadata } from "./skeleton-shell";
import "./compositions/palette-b.css";

export const metadata = skeletonMetadata;

export default function IAlreadyToldYouThisSkeleton() {
  return (
    <div data-palette="b">
      <SkeletonShell />
    </div>
  );
}
