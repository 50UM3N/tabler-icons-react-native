import Svg, { Path } from 'react-native-svg';
         
function IconShareOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-share-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M15.861 15.896a3 3 0 0 0 4.265 4.22m.578 -3.417a3.012 3.012 0 0 0 -1.507 -1.45" /><Path d="M8.7 10.7l1.336 -.688m2.624 -1.352l2.64 -1.36" /><Path d="M8.7 13.3l6.6 3.4" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconShareOff;
        