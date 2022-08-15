import Svg, { Path } from "react-native-svg";

function IconArrowLoopRight({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-loop-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 21v-13a4 4 0 1 0 -4 4h13" /><Path d="M17 16l4 -4l-4 -4" /></Svg>;
}

export default IconArrowLoopRight;