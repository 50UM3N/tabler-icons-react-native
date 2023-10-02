import Svg, { Path } from 'react-native-svg';
         
function IconDeviceTabletBolt({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-tablet-bolt" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13.5 21h-7.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8" /><Path d="M19 16l-2 3h4l-2 3" /><Path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /></Svg>;

}
export default IconDeviceTabletBolt;
        