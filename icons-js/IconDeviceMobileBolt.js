import Svg, { Path } from 'react-native-svg';
         
function IconDeviceMobileBolt({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-mobile-bolt" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13.5 21h-5.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v7" /><Path d="M19 16l-2 3h4l-2 3" /><Path d="M11 4h2" /><Path d="M12 17v.01" /></Svg>;

}
export default IconDeviceMobileBolt;
        