import Svg, { Path } from 'react-native-svg';
         
function IconWaveSawTool({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wave-saw-tool" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 12h5l4 8v-16l4 8h5" /></Svg>;

}
export default IconWaveSawTool;
        