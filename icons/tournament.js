import Svg, { Path, Line } from "react-native-svg";

function IconTournament({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tournament" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 4h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4" /><Path d="M5 14h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4" /><Path d="M10 7h4a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-4" /><Line x1={15} y1={12} x2={20} y2={12} /></Svg>;
}

export default IconTournament;