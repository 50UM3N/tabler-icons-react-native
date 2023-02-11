import Svg, { Path } from 'react-native-svg';
                    
function IconBrandKotlin({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-kotlin" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 20h-16v-16h16" /><Path d="M4 20l16 -16" /><Path d="M4 12l8 -8" /><Path d="M12 12l8 8" /></Svg>;

}
export default IconBrandKotlin;
                    