import { SkeletonShell, skeletonMetadata } from "../../skeleton-shell";
import "../../compositions/explore-a.css";

export const metadata = skeletonMetadata;

export default function ExploreCompositionA() {
  return <SkeletonShell explore="a" />;
}
