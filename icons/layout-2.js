import Svg, { Path, Rect } from "react-native-svg";

function IconLayout2({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={6} height={5} rx={2} /><Rect x={4} y={13} width={6} height={7} rx={2} /><Rect x={14} y={4} width={6} height={7} rx={2} /><Rect x={14} y={15} width={6} height={5} rx={2} /></Svg>;
}

export default IconLayout2;