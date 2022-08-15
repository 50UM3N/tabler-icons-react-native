import Svg, { Path, Rect } from "react-native-svg";

function IconPackages({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-packages" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={2} y={13} width={8} height={8} rx={2} /><Path d="M6 13v3" /><Rect x={8} y={3} width={8} height={8} rx={2} /><Path d="M12 3v3" /><Rect x={14} y={13} width={8} height={8} rx={2} /><Path d="M18 13v3" /></Svg>;
}

export default IconPackages;