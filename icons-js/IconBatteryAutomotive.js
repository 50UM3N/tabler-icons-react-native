import Svg, { Path } from 'react-native-svg';
         
function IconBatteryAutomotive({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-battery-automotive" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 6m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><Path d="M6 6v-2" /><Path d="M19 4l0 2" /><Path d="M6.5 13l3 0" /><Path d="M14.5 13l3 0" /><Path d="M16 11.5l0 3" /></Svg>;

}
export default IconBatteryAutomotive;
        