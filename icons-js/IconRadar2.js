import Svg, { Path } from 'react-native-svg';
         
function IconRadar2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-radar-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M15.51 15.56a5 5 0 1 0 -3.51 1.44" /><Path d="M18.832 17.86a9 9 0 1 0 -6.832 3.14" /><Path d="M12 12v9" /></Svg>;

}
export default IconRadar2;
        