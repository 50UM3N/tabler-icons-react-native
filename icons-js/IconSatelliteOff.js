import Svg, { Path } from 'react-native-svg';
                    
function IconSatelliteOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-satellite-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7.707 3.707l5.586 5.586m-1.293 2.707l-1.293 1.293a1 1 0 0 1 -1.414 0l-5.586 -5.586a1 1 0 0 1 0 -1.414l1.293 -1.293" /><Path d="M6 10l-3 3l3 3l3 -3" /><Path d="M10 6l3 -3l3 3l-3 3" /><Path d="M12 12l1.5 1.5" /><Path d="M14.5 17c.69 0 1.316 -.28 1.769 -.733" /><Path d="M15 21c1.654 0 3.151 -.67 4.237 -1.752m1.507 -2.507a6 6 0 0 0 .256 -1.741" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconSatelliteOff;
                    