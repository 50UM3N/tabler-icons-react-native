import Svg, { Path, Rect, Circle, Line } from "react-native-svg";

function IconBrandInstagram({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={16} height={16} rx={4} /><Circle cx={12} cy={12} r={3} /><Line x1={16.5} y1={7.5} x2={16.5} y2={7.501} /></Svg>;
}

export default IconBrandInstagram;