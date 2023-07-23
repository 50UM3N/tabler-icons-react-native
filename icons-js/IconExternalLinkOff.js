import Svg, { Path } from 'react-native-svg';
         
function IconExternalLinkOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><Path d="M10 14l2 -2m2.007 -2.007l6 -6" /><Path d="M15 4h5v5" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconExternalLinkOff;
        