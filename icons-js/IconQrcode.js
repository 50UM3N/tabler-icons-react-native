import Svg, { Path } from 'react-native-svg';
         
function IconQrcode({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-qrcode" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><Path d="M7 17l0 .01" /><Path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><Path d="M7 7l0 .01" /><Path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><Path d="M17 7l0 .01" /><Path d="M14 14l3 0" /><Path d="M20 14l0 .01" /><Path d="M14 14l0 3" /><Path d="M14 20l3 0" /><Path d="M17 17l3 0" /><Path d="M20 17l0 3" /></Svg>;

}
export default IconQrcode;
        