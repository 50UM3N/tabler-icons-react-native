import Svg, { Path, Line } from "react-native-svg";

function IconPinned({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pinned" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 4v6l-2 4v2h10v-2l-2 -4v-6" /><Line x1={12} y1={16} x2={12} y2={21} /><Line x1={8} y1={4} x2={16} y2={4} /></Svg>;
}

export default IconPinned;