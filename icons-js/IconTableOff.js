import Svg, { Path } from 'react-native-svg';
                    
function IconTableOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-table-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 4h10a2 2 0 0 1 2 2v10m-.588 3.417c-.362 .36 -.86 .583 -1.412 .583h-12a2 2 0 0 1 -2 -2v-12c0 -.552 .224 -1.053 .586 -1.414" /><Path d="M4 10h6m4 0h6" /><Path d="M10 4v2m0 4v10" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconTableOff;
                    