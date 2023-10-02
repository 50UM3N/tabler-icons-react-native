import Svg, { Path } from 'react-native-svg';
         
function IconBrandMatrix({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-matrix" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 3h-1v18h1" /><Path d="M20 21h1v-18h-1" /><Path d="M7 9v6" /><Path d="M12 15v-3.5a2.5 2.5 0 1 0 -5 0v.5" /><Path d="M17 15v-3.5a2.5 2.5 0 1 0 -5 0v.5" /></Svg>;

}
export default IconBrandMatrix;
        