import Svg, { Path } from 'react-native-svg';
         
function IconTagOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tag-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7.792 7.793a1 1 0 0 0 1.414 1.414" /><Path d="M4.88 4.877a2.99 2.99 0 0 0 -.88 2.123v3.859c0 .537 .213 1.052 .593 1.432l8.116 8.116a2.025 2.025 0 0 0 2.864 0l2.416 -2.416m2 -2l.416 -.416a2.025 2.025 0 0 0 0 -2.864l-8.117 -8.116a2.025 2.025 0 0 0 -1.431 -.593h-2.859" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconTagOff;
        