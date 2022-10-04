import {
  GRADIENT_X_ONE_PERCENTAGE,
  GRADIENT_X_TWO_PERCENTAGE,
  GRADIENT_Y_ONE_PERCENTAGE,
  GRADIENT_Y_TWO_PERCENTAGE,
  STROKE_WIDTH_PERCENTAGE,
} from "@/components/spinner/constants";

export const calculateCircleAttributes = (diameter: number) => {
  const diameterPercentValue = diameter / 100;

  const circumference = 2 * Math.PI * (diameter / 2);
  const strokeWidth = diameterPercentValue * STROKE_WIDTH_PERCENTAGE;
  const gradientXOne = diameterPercentValue * GRADIENT_X_ONE_PERCENTAGE;
  const gradientYOne = diameterPercentValue * GRADIENT_Y_ONE_PERCENTAGE;
  const gradientXTwo = diameterPercentValue * GRADIENT_X_TWO_PERCENTAGE;
  const gradientYTwo = diameterPercentValue * GRADIENT_Y_TWO_PERCENTAGE;
  const radius = Math.floor(diameter / 2 - 1) - Math.floor(strokeWidth / 2);

  return {
    circumference,
    strokeWidth,
    gradientXOne,
    gradientYOne,
    gradientXTwo,
    gradientYTwo,
    radius,
  };
};
