import Svg, { Path, Line } from "react-native-svg";

function IconFold({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-fold" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 3v6l3 -3m-6 0l3 3" /><Path d="M12 21v-6l3 3m-6 0l3 -3" /><Line x1={4} y1={12} x2={5} y2={12} /><Line x1={9} y1={12} x2={10} y2={12} /><Line x1={14} y1={12} x2={15} y2={12} /><Line x1={19} y1={12} x2={20} y2={12} /></Svg>;
}

export default IconFold;