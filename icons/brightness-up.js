import Svg, { Path, Circle, Line } from "react-native-svg";

function IconBrightnessUp({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brightness-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={3} /><Line x1={12} y1={5} x2={12} y2={3} /><Line x1={17} y1={7} x2={18.4} y2={5.6} /><Line x1={19} y1={12} x2={21} y2={12} /><Line x1={17} y1={17} x2={18.4} y2={18.4} /><Line x1={12} y1={19} x2={12} y2={21} /><Line x1={7} y1={17} x2={5.6} y2={18.4} /><Line x1={6} y1={12} x2={4} y2={12} /><Line x1={7} y1={7} x2={5.6} y2={5.6} /></Svg>;
}

export default IconBrightnessUp;