import Svg, { Path } from 'react-native-svg';
                    
function IconCalendarOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M19.823 19.824a2 2 0 0 1 -1.823 1.176h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 1.175 -1.823m3.825 -.177h9a2 2 0 0 1 2 2v9" /><Path d="M16 3l0 4" /><Path d="M8 3l0 1" /><Path d="M4 11h7m4 0h5" /><Path d="M11 15l1 0" /><Path d="M12 15l0 3" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconCalendarOff;
                    