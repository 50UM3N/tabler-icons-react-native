import Svg, { Path } from 'react-native-svg';
         
function IconDevicesUp({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-devices-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 16.5v-7.5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3.5" /><Path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h8" /><Path d="M19 22v-6" /><Path d="M22 19l-3 -3l-3 3" /><Path d="M16 9h2" /></Svg>;

}
export default IconDevicesUp;
        