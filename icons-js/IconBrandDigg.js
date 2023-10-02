import Svg, { Path } from 'react-native-svg';
         
function IconBrandDigg({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-digg" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 15h-3v-4h3" /><Path d="M15 15h-3v-4h3" /><Path d="M9 15v-4" /><Path d="M15 11v7h-3" /><Path d="M6 7v8" /><Path d="M21 15h-3v-4h3" /><Path d="M21 11v7h-3" /></Svg>;

}
export default IconBrandDigg;
        