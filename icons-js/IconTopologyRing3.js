import Svg, { Path } from 'react-native-svg';
                    
function IconTopologyRing3({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-topology-ring-3" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><Path d="M6 8v8" /><Path d="M18 16v-8" /><Path d="M8 6h8" /><Path d="M16 18h-8" /></Svg>;

}
export default IconTopologyRing3;
                    