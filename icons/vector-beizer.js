import Svg, { Path, Rect, Line, Circle } from "react-native-svg";

function IconVectorBeizer({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg className="icon icon-tabler icon-tabler-vector-beizer" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={14} width={4} height={4} rx={1} /><Rect x={17} y={14} width={4} height={4} rx={1} /><Rect x={10} y={6} width={4} height={4} rx={1} /><Path d="M10 8.5a6 6 0 0 0 -5 5.5" /><Path d="M14 8.5a6 6 0 0 1 5 5.5" /><Line x1={10} y1={8} x2={4} y2={8} /><Line x1={20} y1={8} x2={14} y2={8} /><Circle cx={3} cy={8} r={1} /><Circle cx={21} cy={8} r={1} /></Svg>;
}

export default IconVectorBeizer;