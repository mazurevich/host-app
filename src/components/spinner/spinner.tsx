import styles from "@/components/spinner/styles.scss";
import { FC, useLayoutEffect, useRef } from "react";
import { SpinnerProps } from "@/components/spinner/types";
import { calculateCircleAttributes } from "@/components/spinner/utils";
import { DEFAULT_DIAMETER } from "@/components/spinner/constants";
import {
  animationOptions,
  getCircleKeyframes,
  svgKeyframes,
} from "@/components/spinner/config";

export const Spinner: FC<SpinnerProps> = ({ diameter = DEFAULT_DIAMETER }) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const {
    circumference,
    strokeWidth,
    gradientXOne,
    gradientYOne,
    gradientXTwo,
    gradientYTwo,
    radius,
  } = calculateCircleAttributes(diameter);

  useLayoutEffect(() => {
    if (circleRef.current) {
      circleRef.current.animate(
        getCircleKeyframes(circumference),
        animationOptions,
      );
    }
  }, [circumference]);

  useLayoutEffect(() => {
    if (svgRef.current) {
      svgRef.current.animate(svgKeyframes, animationOptions);
    }
  }, []);

  return (
    <div className={styles.spinner}>
      <svg
        ref={svgRef}
        width={diameter}
        height={diameter}
        viewBox={`0 0 ${diameter} ${diameter}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="#D1DFFF"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          ref={circleRef}
          cy="50%"
          cx="50%"
          r={radius}
          stroke="url(#paint0_linear_6748_41223)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_6748_41223"
            x1={gradientXOne}
            y1={gradientYOne}
            x2={gradientXTwo}
            y2={gradientYTwo}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#205CDF" />
            <stop offset="1" stopColor="#753BBD" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
