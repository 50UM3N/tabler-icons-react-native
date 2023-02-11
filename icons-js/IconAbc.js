import Svg, { Path } from 'react-native-svg';
                    
function IconAbc({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-abc" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 16v-6a2 2 0 1 1 4 0v6" /><Path d="M3 13h4" /><Path d="M10 8v6a2 2 0 1 0 4 0v-1a2 2 0 1 0 -4 0v1" /><Path d="M20.732 12a2 2 0 0 0 -3.732 1v1a2 2 0 0 0 3.726 1.01" /></Svg>;

}
export default IconAbc;
                    