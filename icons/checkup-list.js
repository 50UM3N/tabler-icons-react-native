import Svg, { Path, Rect } from "react-native-svg";

function IconCheckupList({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-checkup-list" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><Rect x={9} y={3} width={6} height={4} rx={2} /><Path d="M9 14h.01" /><Path d="M9 17h.01" /><Path d="M12 16l1 1l3 -3" /></Svg>;
}

export default IconCheckupList;