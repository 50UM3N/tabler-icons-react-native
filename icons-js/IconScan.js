import Svg, { Path } from 'react-native-svg';
         
function IconScan({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-scan" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 7v-1a2 2 0 0 1 2 -2h2" /><Path d="M4 17v1a2 2 0 0 0 2 2h2" /><Path d="M16 4h2a2 2 0 0 1 2 2v1" /><Path d="M16 20h2a2 2 0 0 0 2 -2v-1" /><Path d="M5 12l14 0" /></Svg>;

}
export default IconScan;
        