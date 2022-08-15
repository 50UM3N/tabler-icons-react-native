import Svg, { Path } from "react-native-svg";

function IconEraserOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eraser-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 3l18 18" /><Path d="M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l4.995 -4.993m2.009 -2.01l2.997 -2.996a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41c-1.417 1.431 -2.406 2.432 -2.97 3m-2.02 2.043l-4.211 4.256" /><Path d="M18 13.3l-6.3 -6.3" /></Svg>;
}

export default IconEraserOff;