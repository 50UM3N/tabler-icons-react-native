import Svg, { Path, Ellipse } from "react-native-svg";

function IconCone2({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cone-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Ellipse cx={12} cy={7} rx={7} ry={3} /><Path d="M19 7v.5l-7 12.5l-7 -12.5v-.5" /></Svg>;
}

export default IconCone2;