import Svg, { Path } from "react-native-svg";

function IconGrillOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grill-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 8h-3a6 6 0 0 0 6 6h2c.316 0 .626 -.024 .928 -.071m2.792 -1.22a5.99 5.99 0 0 0 2.276 -4.484l.004 -.225h-7" /><Path d="M18.814 18.844a2 2 0 1 1 -2.64 -2.666" /><Path d="M9 14l-3 6" /><Path d="M15 18h-8" /><Path d="M15 5v-1" /><Path d="M12 5v-1" /><Path d="M9 5v-1" /><Path d="M3 3l18 18" /></Svg>;
}

export default IconGrillOff;