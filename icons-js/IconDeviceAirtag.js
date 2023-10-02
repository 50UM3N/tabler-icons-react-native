import Svg, { Path } from 'react-native-svg';
         
function IconDeviceAirtag({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-airtag" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 12a8 8 0 1 0 16 0a8 8 0 0 0 -16 0" /><Path d="M9 15v.01" /><Path d="M15 15a6 6 0 0 0 -6 -6" /><Path d="M12 15a3 3 0 0 0 -3 -3" /></Svg>;

}
export default IconDeviceAirtag;
        