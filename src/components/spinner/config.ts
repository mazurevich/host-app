const ROTATION_START_OFFSET = 0.5;
const ROTATION_END_OFFSET = 0.8;

const invertDegreeValue = (degree: number) => 360 - degree;

export const getCircleKeyframes = (circumference: number): Keyframe[] => {
  const circumferenceDegree = circumference / 360;

  const getDashoffsetValue = (value: number) =>
    circumferenceDegree * invertDegreeValue(value);

  const getDasharrayValue = (value: number) => {
    const dashArrayGap = getDashoffsetValue(value);

    return `${circumference - dashArrayGap} ${dashArrayGap}`;
  };

  return [
    {
      strokeDashoffset: getDashoffsetValue(45),
      strokeDasharray: getDasharrayValue(70),
    },
    {
      strokeDashoffset: getDashoffsetValue(10),
      strokeDasharray: getDasharrayValue(40),
      easing: "ease-out",
      offset: 0.2,
    },
    {
      strokeDashoffset: getDashoffsetValue(30),
      strokeDasharray: getDasharrayValue(110),
      offset: ROTATION_START_OFFSET,
    },
    {
      strokeDashoffset: getDashoffsetValue(110),
      strokeDasharray: getDasharrayValue(40),
    },
    {
      strokeDashoffset: getDashoffsetValue(90),
      strokeDasharray: getDasharrayValue(40),
      offset: ROTATION_END_OFFSET,
    },
    {
      strokeDashoffset: getDashoffsetValue(45),
      strokeDasharray: getDasharrayValue(70),
    },
  ];
};

export const svgKeyframes: Keyframe[] = [
  {
    transform: "rotate(0deg)",
  },
  {
    transform: "rotate(0deg)",
  },
  {
    transform: "rotate(360deg)",
    offset: ROTATION_START_OFFSET,
    easing: "ease-in-out",
  },
  {
    transform: "rotate(360deg)",
    offset: ROTATION_END_OFFSET,
  },
  {
    transform: "rotate(360deg)",
  },
];

export const animationOptions = {
  duration: 1600,
  iterations: Infinity,
};
