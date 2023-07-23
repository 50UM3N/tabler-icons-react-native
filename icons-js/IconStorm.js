import Svg, { Path } from 'react-native-svg';
         
function IconStorm({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-storm" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><Path d="M5.369 14.236c-1.839 -3.929 -1.561 -7.616 -.704 -11.236" /><Path d="M18.63 9.76c1.837 3.928 1.561 7.615 .703 11.236" /></Svg>;

}
export default IconStorm;
        