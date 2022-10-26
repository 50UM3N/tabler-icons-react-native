import Svg, { Path, Line, Rect } from "react-native-svg";

function IconLayoutDistributeHorizontal({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-distribute-horizontal" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={4} y1={4} x2={20} y2={4} /><Line x1={4} y1={20} x2={20} y2={20} /><Rect x={6} y={9} width={12} height={6} rx={2} /></Svg>;
}

export default IconLayoutDistributeHorizontal;