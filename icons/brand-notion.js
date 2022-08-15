import Svg, { Path, Rect } from "react-native-svg";

function IconBrandNotion({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-notion" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={16} height={16} rx={2} /><Path d="M7 7h3l6 6" /><Path d="M8 7v10" /><Path d="M7 17h2" /><Path d="M15 7h2" /><Path d="M16 7v10h-1l-7 -7" /></Svg>;
}

export default IconBrandNotion;