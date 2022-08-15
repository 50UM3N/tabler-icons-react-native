import Svg, { Path, Circle } from "react-native-svg";

function IconBrandDoctrine({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-doctrine" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={14} r={7} /><Path d="M9 14h6" /><Path d="M12 11l3 3l-3 3" /><Path d="M10 3l6.9 6" /></Svg>;
}

export default IconBrandDoctrine;