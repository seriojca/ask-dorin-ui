import { Theme } from "@/types/global";
import { motion } from "framer-motion";

const properties = {
  dark: {
    r: 7,
    transform: "rotate(40deg)",
    cx: 20,
    cy: 8,
    opacity: 0,
  },
  light: {
    r: 3.6,
    transform: "rotate(120deg)",
    cx: 28,
    cy: 14,
    opacity: 1,
  },
  springConfig: { mass: 1, tension: 0, friction: 20 },
};

export default function DarkAndLightAnimatedIcon({ theme }: { theme: Theme }) {
  let { r, transform, cx, cy, opacity } = properties[theme];

  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={"stroke-foreground"}
    >
      <motion.circle
        cx="14"
        cy="14"
        r="5"
        mask="url(#mask1)"
        className="fill-foreground"
        animate={{
          r,
          transition: {
            type: "spring",
            ...properties.springConfig,
          },
        }}
      />
      <mask id="mask1">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <motion.circle
          cx="20"
          cy="8"
          r="7.5"
          fill="black"
          animate={{
            cx,
            cy,
            transition: {
              type: "spring",
              ...properties.springConfig,
            },
          }}
        />
      </mask>
      <motion.g
        animate={{
          transform,
          opacity,
          transition: {
            type: "spring",
            ...properties.springConfig,
          },
        }}
      >
        <path
          d="M14 7V8.39997"
          stroke="inherit"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 19.5997V20.9996"
          stroke="inherit"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.05078 9.05096L10.0378 10.0379"
          stroke="inherit"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.9619 17.9617L18.9489 18.9487"
          stroke="inherit"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 13.9998H8.39997"
          stroke="inherit"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.6006 13.9998H21.0006"
          stroke="inherit"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.0378 17.9617L9.05078 18.9487"
          stroke="inherit"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.9489 9.05096L17.9619 10.0379"
          stroke="inherit"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </svg>
  );
}
