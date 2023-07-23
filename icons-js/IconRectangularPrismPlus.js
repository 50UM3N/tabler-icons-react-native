import Svg, { Path } from 'react-native-svg';
         
function IconRectangularPrismPlus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rectangular-prism-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M21 12.5v-3.509a1.98 1.98 0 0 0 -1 -1.717l-4 -2.008a2.016 2.016 0 0 0 -2 0l-10 5.007c-.619 .355 -1 1.01 -1 1.718v5.018c0 .709 .381 1.363 1 1.717l4 2.008a2.016 2.016 0 0 0 2 0l2.062 -1.032" /><Path d="M9 21v-7.5" /><Path d="M9 13.5l11.5 -5.5" /><Path d="M3.5 11l5.5 2.5" /><Path d="M16 19h6" /><Path d="M19 16v6" /></Svg>;

}
export default IconRectangularPrismPlus;
        