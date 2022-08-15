import Svg, { Path, Circle, Line } from "react-native-svg";

function IconLivePhoto({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-live-photo" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={1} /><Circle cx={12} cy={12} r={5} /><Line x1={15.9} y1={20.11} x2={15.9} y2={20.12} /><Line x1={19.04} y1={17.61} x2={19.04} y2={17.62} /><Line x1={20.77} y1={14} x2={20.77} y2={14.01} /><Line x1={20.77} y1={10} x2={20.77} y2={10.01} /><Line x1={19.04} y1={6.39} x2={19.04} y2={6.4} /><Line x1={15.9} y1={3.89} x2={15.9} y2={3.9} /><Line x1={12} y1={3} x2={12} y2={3.01} /><Line x1={8.1} y1={3.89} x2={8.1} y2={3.9} /><Line x1={4.96} y1={6.39} x2={4.96} y2={6.4} /><Line x1={3.23} y1={10} x2={3.23} y2={10.01} /><Line x1={3.23} y1={14} x2={3.23} y2={14.01} /><Line x1={4.96} y1={17.61} x2={4.96} y2={17.62} /><Line x1={8.1} y1={20.11} x2={8.1} y2={20.12} /><Line x1={12} y1={21} x2={12} y2={21.01} /></Svg>;
}

export default IconLivePhoto;