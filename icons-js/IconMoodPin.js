import Svg, { Path } from 'react-native-svg';
                    
function IconMoodPin({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-pin" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M19 18v.01m2 -6.01a9 9 0 1 0 -8.34 8.976" /><Path d="M9.5 15a3.59 3.59 0 0 0 2.796 .988" /><Path d="M21.121 20.121a3 3 0 1 0 -4.242 0l2.121 2.122l2.121 -2.122z" /><Path d="M9 10h.01" /><Path d="M15 10h.01" /></Svg>;

}
export default IconMoodPin;
                    