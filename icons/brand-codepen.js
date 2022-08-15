import Svg, { Path, Line } from "react-native-svg";

function IconBrandCodepen({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-codepen" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 15l9 6l9 -6l-9 -6l-9 6" /><Path d="M3 9l9 6l9 -6l-9 -6l-9 6" /><Line x1={3} y1={9} x2={3} y2={15} /><Line x1={21} y1={9} x2={21} y2={15} /><Line x1={12} y1={3} x2={12} y2={9} /><Line x1={12} y1={15} x2={12} y2={21} /></Svg>;
}

export default IconBrandCodepen;