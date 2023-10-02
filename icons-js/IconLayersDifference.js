import Svg, { Path } from 'react-native-svg';
         
function IconLayersDifference({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layers-difference" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2v-2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2" /><Path d="M10 8l-2 0l0 2" /><Path d="M8 14l0 2l2 0" /><Path d="M14 8l2 0l0 2" /><Path d="M16 14l0 2l-2 0" /></Svg>;

}
export default IconLayersDifference;
        