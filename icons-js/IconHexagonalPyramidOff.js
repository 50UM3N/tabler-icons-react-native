import Svg, { Path } from 'react-native-svg';
         
function IconHexagonalPyramidOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hexagonal-pyramid-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7.877 7.88l-4.56 7.53a1.988 1.988 0 0 0 .266 2.484l2.527 2.523c.374 .373 .88 .583 1.408 .583h8.964c.528 0 1.034 -.21 1.408 -.583l1.264 -1.263m1.792 -2.205a1.986 1.986 0 0 0 -.262 -1.538l-7.846 -12.954a.996 .996 0 0 0 -1.676 0l-1.772 2.926" /><Path d="M12 2l-1.254 4.742m-.841 3.177l-2.905 10.981" /><Path d="M12 2l2.153 8.14m1.444 5.457l1.403 5.303" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconHexagonalPyramidOff;
        