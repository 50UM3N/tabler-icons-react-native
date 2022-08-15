import Svg, { Path, Circle, Rect } from "react-native-svg";

function IconBrandMastercard({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-mastercard" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={14} cy={12} r={3} /><Path d="M12 9.765a3 3 0 1 0 0 4.47" /><Rect x={3} y={5} width={18} height={14} rx={2} /></Svg>;
}

export default IconBrandMastercard;