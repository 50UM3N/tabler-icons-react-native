import Svg, { Path, Circle } from "react-native-svg";

function IconSectionSign({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-section-sign" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9.172 19.004a3.001 3.001 0 1 0 2.828 -4.004" /><Path d="M14.83 5.002a3.001 3.001 0 1 0 -2.83 3.998" /><Circle cx={12} cy={12} r={3} /></Svg>;
}

export default IconSectionSign;