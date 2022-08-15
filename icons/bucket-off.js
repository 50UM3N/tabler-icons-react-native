import Svg, { Path } from "react-native-svg";

function IconBucketOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bucket-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17.184 17.173l-.184 .827c-.193 1.183 -1.034 2.024 -2 2h-6c-.966 .024 -1.807 -.817 -2 -2l-2 -9h4m4 0h6l-1.089 4.9" /><Path d="M7 9c0 -.596 .104 -1.167 .295 -1.697m1.705 -2.303a5 5 0 0 1 8 4" /><Path d="M3 3l18 18" /></Svg>;
}

export default IconBucketOff;