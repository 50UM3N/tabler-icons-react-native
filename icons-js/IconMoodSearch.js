import Svg, { Path } from 'react-native-svg';
                    
function IconMoodSearch({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-search" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M21 12a9 9 0 1 0 -8.99 9" /><Path d="M9 10h.01" /><Path d="M15 10h.01" /><Path d="M9.5 15a3.556 3.556 0 0 0 1.823 .937c.221 .042 .448 .063 .677 .063" /><Path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M20.2 20.2l1.8 1.8" /></Svg>;

}
export default IconMoodSearch;
                    