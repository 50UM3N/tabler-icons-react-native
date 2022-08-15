import Svg, { Path, Circle } from "react-native-svg";

function IconRobotOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-robot-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 7h6a2 2 0 0 1 2 2v1l1 1v3l-1 1m-.171 3.811a2 2 0 0 1 -1.829 1.189h-10a2 2 0 0 1 -2 -2v-3l-1 -1v-3l1 -1v-1a2 2 0 0 1 2 -2" /><Path d="M10 16h4" /><Circle cx={8.5} cy={11.5} r={1} /><Path d="M15.854 11.853a0.498 .498 0 0 0 -.354 -.853a0.498 .498 0 0 0 -.356 .149" /><Path d="M8.336 4.343l-.336 -1.343" /><Path d="M15 7l1 -4" /><Path d="M3 3l18 18" /></Svg>;
}

export default IconRobotOff;