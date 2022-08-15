import Svg, { Path, Rect } from "react-native-svg";

function IconSection({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-section" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 20h.01" /><Path d="M4 20h.01" /><Path d="M8 20h.01" /><Path d="M12 20h.01" /><Path d="M16 20h.01" /><Path d="M20 4h.01" /><Path d="M4 4h.01" /><Path d="M8 4h.01" /><Path d="M12 4h.01" /><Path d="M16 4l0 0" /><Rect x={4} y={8} width={16} height={8} rx={1} /></Svg>;
}

export default IconSection;