import Svg, { Path } from 'react-native-svg';
                    
function IconRotate2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rotate-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 4.55a8 8 0 0 0 -6 14.9m0 -4.45v5h-5" /><Path d="M18.37 7.16l0 .01" /><Path d="M13 19.94l0 .01" /><Path d="M16.84 18.37l0 .01" /><Path d="M19.37 15.1l0 .01" /><Path d="M19.94 11l0 .01" /></Svg>;

}
export default IconRotate2;
                    