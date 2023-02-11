import Svg, { Path } from 'react-native-svg';
                    
function IconMoodOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5.634 5.638a9 9 0 0 0 12.732 12.724m1.679 -2.322a9 9 0 0 0 -12.08 -12.086" /><Path d="M9 10h.01" /><Path d="M15 10h.01" /><Path d="M9.5 15a3.5 3.5 0 0 0 5 0" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconMoodOff;
                    