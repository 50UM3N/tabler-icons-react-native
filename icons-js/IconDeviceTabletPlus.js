import Svg, { Path } from 'react-native-svg';
         
function IconDeviceTabletPlus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-tablet-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12.5 21h-6.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8" /><Path d="M16 19h6" /><Path d="M19 16v6" /><Path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /></Svg>;

}
export default IconDeviceTabletPlus;
        