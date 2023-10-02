import Svg, { Path } from 'react-native-svg';
         
function IconTransferOut({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-transfer-out" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 19v2h16v-14l-8 -4l-8 4v2" /><Path d="M13 14h-9" /><Path d="M7 11l-3 3l3 3" /></Svg>;

}
export default IconTransferOut;
        