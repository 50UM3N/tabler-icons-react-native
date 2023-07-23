import Svg, { Path, Circle } from 'react-native-svg';
         
function IconBrandReddit({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-reddit" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z" /><Path d="M12 8l1 -5l6 1" /><Path d="M19 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Circle cx="9" cy="13" r=".5" fill={color} /><Circle cx="15" cy="13" r=".5" fill="currentColor" /><Path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5" /></Svg>;

}
export default IconBrandReddit;
        