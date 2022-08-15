import Svg, { Path, Rect, Line } from "react-native-svg";

function IconBrandMedium({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-medium" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={16} height={16} rx={2} /><Path d="M8 9h1l3 3l3 -3h1" /><Line x1={8} y1={15} x2={10} y2={15} /><Line x1={14} y1={15} x2={16} y2={15} /><Line x1={9} y1={9} x2={9} y2={15} /><Line x1={15} y1={9} x2={15} y2={15} /></Svg>;
}

export default IconBrandMedium;