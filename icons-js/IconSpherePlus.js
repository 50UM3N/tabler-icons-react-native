import Svg, { Path } from 'react-native-svg';
         
function IconSpherePlus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sphere-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 12c0 1.657 4.03 3 9 3c1.116 0 2.185 -.068 3.172 -.192m5.724 -2.35a1.1 1.1 0 0 0 .104 -.458" /><Path d="M20.984 12.546a9 9 0 1 0 -8.442 8.438" /><Path d="M16 19h6" /><Path d="M19 16v6" /></Svg>;

}
export default IconSpherePlus;
        