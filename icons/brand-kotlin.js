import Svg, { Path, Line } from "react-native-svg";

function IconBrandKotlin({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-kotlin" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 20h-16v-16h16" /><Line x1={4} y1={20} x2={20} y2={4} /><Path d="M4 12l8 -8" /><Line x1={12} y1={12} x2={20} y2={20} /></Svg>;
}

export default IconBrandKotlin;