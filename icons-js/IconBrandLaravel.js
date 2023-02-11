import Svg, { Path } from 'react-native-svg';
                    
function IconBrandLaravel({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-laravel" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 17l8 5l7 -4v-8l-4 -2.5l4 -2.5l4 2.5v4l-11 6.5l-4 -2.5v-7.5l-4 -2.5z" /><Path d="M11 18v4" /><Path d="M7 15.5l7 -4" /><Path d="M14 7.5v4" /><Path d="M14 11.5l4 2.5" /><Path d="M11 13v-7.5l-4 -2.5l-4 2.5" /><Path d="M7 8l4 -2.5" /><Path d="M18 10l4 -2.5" /></Svg>;

}
export default IconBrandLaravel;
                    