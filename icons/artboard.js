import Svg, { Path, Rect, Line } from "react-native-svg";

function IconArtboard({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-artboard" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={8} y={8} width={8} height={8} rx={1} /><Line x1={3} y1={8} x2={4} y2={8} /><Line x1={3} y1={16} x2={4} y2={16} /><Line x1={8} y1={3} x2={8} y2={4} /><Line x1={16} y1={3} x2={16} y2={4} /><Line x1={20} y1={8} x2={21} y2={8} /><Line x1={20} y1={16} x2={21} y2={16} /><Line x1={8} y1={20} x2={8} y2={21} /><Line x1={16} y1={20} x2={16} y2={21} /></Svg>;
}

export default IconArtboard;