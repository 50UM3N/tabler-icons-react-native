import Svg, { Path, Circle } from "react-native-svg";

function IconArrowRotaryLeft({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-rotary-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle transform="matrix(-1 0 0 1 32 0)" cx={16} cy={7} r={3} /><Path d="M16 10v10" /><Path d="M13 7h-10" /><Path d="M7 11l-4 -4l4 -4" /></Svg>;
}

export default IconArrowRotaryLeft;