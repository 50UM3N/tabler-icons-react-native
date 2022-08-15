import Svg, { Path, Circle } from "react-native-svg";

function IconArrowRotaryStraight({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-rotary-straight" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={13} cy={13} r={3} /><Path d="M13 16v5" /><Path d="M13 3v7" /><Path d="M9 7l4 -4l4 4" /></Svg>;
}

export default IconArrowRotaryStraight;