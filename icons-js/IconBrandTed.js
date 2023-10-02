import Svg, { Path } from 'react-native-svg';
         
function IconBrandTed({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-ted" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M2 8h4" /><Path d="M4 8v8" /><Path d="M13 8h-4v8h4" /><Path d="M9 12h2.5" /><Path d="M16 8v8h2a3 3 0 0 0 3 -3v-2a3 3 0 0 0 -3 -3h-2z" /></Svg>;

}
export default IconBrandTed;
        