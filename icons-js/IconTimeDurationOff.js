import Svg, { Path } from 'react-native-svg';
         
function IconTimeDurationOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-time-duration-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 12v.01" /><Path d="M7.5 19.8v.01" /><Path d="M4.2 16.5v.01" /><Path d="M4.2 7.5v.01" /><Path d="M12 21a8.994 8.994 0 0 0 6.362 -2.634m1.685 -2.336a9 9 0 0 0 -8.047 -13.03" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconTimeDurationOff;
        