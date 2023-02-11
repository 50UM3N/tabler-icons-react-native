import Svg, { Path } from 'react-native-svg';
                    
function IconRollercoaster({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rollercoaster" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 21a5.55 5.55 0 0 0 5.265 -3.795l.735 -2.205a8.775 8.775 0 0 1 8.325 -6h3.675" /><Path d="M20 9v12" /><Path d="M8 21v-3" /><Path d="M12 21v-10" /><Path d="M16 9.5v11.5" /><Path d="M15 3h5v3h-5z" /><Path d="M6 8l4 -3l2 2.5l-4 3l-1.8 -.5z" /></Svg>;

}
export default IconRollercoaster;
                    