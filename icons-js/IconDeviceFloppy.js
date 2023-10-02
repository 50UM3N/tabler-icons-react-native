import Svg, { Path } from 'react-native-svg';
         
function IconDeviceFloppy({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" /><Path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M14 4l0 4l-6 0l0 -4" /></Svg>;

}
export default IconDeviceFloppy;
        