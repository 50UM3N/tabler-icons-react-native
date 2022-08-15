import Svg, { Path, Circle, Rect, Line } from "react-native-svg";

function IconCashBanknote({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cash-banknote" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={3} /><Rect x={3} y={6} width={18} height={12} rx={2} /><Line x1={18} y1={12} x2={18.01} y2={12} /><Line x1={6} y1={12} x2={6.01} y2={12} /></Svg>;
}

export default IconCashBanknote;