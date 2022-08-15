import Svg, { Path, Rect } from "react-native-svg";

function IconNfc({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-nfc" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 20a3 3 0 0 1 -3 -3v-11l5 5" /><Path d="M13 4a3 3 0 0 1 3 3v11l-5 -5" /><Rect x={4} y={4} width={16} height={16} rx={3} /></Svg>;
}

export default IconNfc;