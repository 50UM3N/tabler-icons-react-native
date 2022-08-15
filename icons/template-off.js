import Svg, { Path, Rect } from "react-native-svg";

function IconTemplateOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-template-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 4h11a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-7m-4 0h-3a1 1 0 0 1 -1 -1v-2c0 -.271 .108 -.517 .283 -.697" /><Rect x={4} y={12} width={6} height={8} rx={1} /><Path d="M16 12h4" /><Path d="M14 16h2" /><Path d="M14 20h6" /><Path d="M3 3l18 18" /></Svg>;
}

export default IconTemplateOff;