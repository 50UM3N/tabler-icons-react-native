import Svg, { Path } from 'react-native-svg';
         
function IconHexagonalPrismOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hexagonal-prism-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.792 6.996l-3.775 2.643a2.005 2.005 0 0 1 -1.147 .361h-1.87m-4 0h-1.87c-.41 0 -.81 -.126 -1.146 -.362l-3.774 -2.641" /><Path d="M8 10v11" /><Path d="M16 10v2m0 4v5" /><Path d="M20.972 16.968a2.01 2.01 0 0 0 .028 -.337v-9.262c0 -.655 -.318 -1.268 -.853 -1.643l-3.367 -2.363a2 2 0 0 0 -1.147 -.363h-7.266a1.99 1.99 0 0 0 -1.066 .309m-2.345 1.643l-1.103 .774a2.006 2.006 0 0 0 -.853 1.644v9.261c0 .655 .318 1.269 .853 1.644l3.367 2.363a2 2 0 0 0 1.147 .362h7.265c.41 0 .811 -.126 1.147 -.363l2.26 -1.587" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconHexagonalPrismOff;
        