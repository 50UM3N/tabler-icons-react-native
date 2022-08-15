import Svg, { Path, Rect, Line } from "react-native-svg";

function IconPlayCard({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-play-card" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect transform="rotate(90 12 12)" x={3} y={5} width={18} height={14} rx={2} /><Line x1={8} y1={6} x2={8.01} y2={6} /><Line x1={16} y1={18} x2={16.01} y2={18} /><Path d="M12 16l-3 -4l3 -4l3 4z" /></Svg>;
}

export default IconPlayCard;