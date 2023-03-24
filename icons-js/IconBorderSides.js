import Svg, { Path } from 'react-native-svg';
                    
function IconBorderSides({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-border-sides" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 8v8" /><Path d="M20 16v-8" /><Path d="M8 4h8" /><Path d="M8 20h8" /></Svg>;

}
export default IconBorderSides;
                    