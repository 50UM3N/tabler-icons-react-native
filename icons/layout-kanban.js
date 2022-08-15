import Svg, { Path, Line, Rect } from "react-native-svg";

function IconLayoutKanban({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-kanban" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={4} y1={4} x2={10} y2={4} /><Line x1={14} y1={4} x2={20} y2={4} /><Rect x={4} y={8} width={6} height={12} rx={2} /><Rect x={14} y={8} width={6} height={6} rx={2} /></Svg>;
}

export default IconLayoutKanban;