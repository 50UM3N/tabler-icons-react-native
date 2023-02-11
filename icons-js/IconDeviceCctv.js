import Svg, { Path } from 'react-native-svg';
                    
function IconDeviceCctv({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-cctv" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 3m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" /><Path d="M12 14m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><Path d="M19 7v7a7 7 0 0 1 -14 0v-7" /><Path d="M12 14l.01 0" /></Svg>;

}
export default IconDeviceCctv;
                    