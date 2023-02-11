import Svg, { Path } from 'react-native-svg';
                    
function IconRegex({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-regex" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6.5 15a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0 -5z" /><Path d="M17 7.875l3 -1.687" /><Path d="M17 7.875v3.375" /><Path d="M17 7.875l-3 -1.687" /><Path d="M17 7.875l3 1.688" /><Path d="M17 4.5v3.375" /><Path d="M17 7.875l-3 1.688" /></Svg>;

}
export default IconRegex;
                    