import Svg, { Path } from 'react-native-svg';
         
function IconDeviceRemote({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-remote" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M7 3m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" /><Path d="M12 3v2" /><Path d="M10 15v.01" /><Path d="M10 18v.01" /><Path d="M14 18v.01" /><Path d="M14 15v.01" /></Svg>;

}
export default IconDeviceRemote;
        