export interface FocalPoint {
  /** Fraction (0-1) of image height where the subject's hairline/top starts. */
  top: number;
  /** Fraction (0-1) of image height where the subject's chin/jawline ends. */
  bottom: number;
  /** Fraction (0-1) of image width where the subject is horizontally centered. */
  centerX: number;
}

export interface CoverFrame {
  scale: number;
  left: number;
  top: number;
  width: number;
  height: number;
}

/**
 * Computes an object-fit:cover-style frame that always fully fills the
 * container (never letterboxes). The focal band (e.g. hairline-to-chin)
 * only biases where the crop lands, preferring not to cut off the top of
 * the subject's head when there's slack to avoid it.
 */
export function computeCoverFrame(
  containerW: number,
  containerH: number,
  imageW: number,
  imageH: number,
  focal: FocalPoint
): CoverFrame {
  if (!containerW || !containerH || !imageW || !imageH) {
    return { scale: 1, left: 0, top: 0, width: containerW, height: containerH };
  }

  const scaleToFitW = containerW / imageW;
  const scaleToFitH = containerH / imageH;
  const scale = Math.max(scaleToFitW, scaleToFitH);

  const width = imageW * scale;
  const height = imageH * scale;

  const excessX = width - containerW;
  const idealLeft = -(focal.centerX * width - containerW / 2);
  const left = Math.min(0, Math.max(-excessX, idealLeft));

  const excessY = height - containerH;
  const bandCenter = (focal.top + focal.bottom) / 2;
  const idealTop = -(bandCenter * height - containerH / 2);
  const noCropHairlineTop = -(focal.top * height);

  let candidate = Math.min(0, Math.max(-excessY, idealTop));
  // Prefer not cropping above the hairline when there's room to avoid it.
  candidate = Math.max(candidate, noCropHairlineTop);
  const top = Math.min(0, Math.max(-excessY, candidate));

  return { scale, left, top, width, height };
}
