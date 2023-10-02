import Svg, { Path } from 'react-native-svg';
         
function IconUsb({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-usb" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M12 17v-11.5" /><Path d="M7 10v3l5 3" /><Path d="M12 14.5l5 -2v-2.5" /><Path d="M16 10h2v-2h-2z" /><Path d="M7 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M10 5.5h4l-2 -2.5z" /></Svg>;

}
export default IconUsb;
        