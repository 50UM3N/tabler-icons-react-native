import Svg, { Path } from 'react-native-svg';
                    
function IconBrandWix({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-wix" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 9l1.5 6l1.379 -5.515a.64 .64 0 0 1 1.242 0l1.379 5.515l1.5 -6" /><Path d="M13 11.5v3.5" /><Path d="M16 9l5 6" /><Path d="M21 9l-5 6" /><Path d="M13 9h.01" /></Svg>;

}
export default IconBrandWix;
                    