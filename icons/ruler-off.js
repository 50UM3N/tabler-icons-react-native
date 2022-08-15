import Svg, { Path } from "react-native-svg";

function IconRulerOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ruler-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 4h11a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-4m-3.713 .299a0.997 .997 0 0 0 -.287 .701v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14c0 -.284 .118 -.54 .308 -.722" /><Path d="M4 8h2" /><Path d="M4 12h3" /><Path d="M4 16h2" /><Path d="M12 4v3" /><Path d="M16 4v2" /><Path d="M3 3l18 18" /></Svg>;
}

export default IconRulerOff;