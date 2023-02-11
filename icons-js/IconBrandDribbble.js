import Svg, { Path } from 'react-native-svg';
                    
function IconBrandDribbble({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-dribbble" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><Path d="M9 3.6c5 6 7 10.5 7.5 16.2" /><Path d="M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4" /><Path d="M3.1 10.75c5 0 9.814 -.38 15.314 -5" /></Svg>;

}
export default IconBrandDribbble;
                    