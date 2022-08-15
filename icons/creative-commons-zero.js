import Svg, { Path, Circle, Ellipse } from "react-native-svg";

function IconCreativeCommonsZero({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-creative-commons-zero" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Ellipse cx={12} cy={12} rx={3} ry={4} /><Path d="M14 9l-4 6" /></Svg>;
}

export default IconCreativeCommonsZero;