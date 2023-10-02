import Svg, { Path } from 'react-native-svg';
         
function IconMoodDollar({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-dollar" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.87 10.48a9 9 0 1 0 -7.876 10.465" /><Path d="M9 10h.01" /><Path d="M15 10h.01" /><Path d="M9.5 15c.658 .64 1.56 1 2.5 1c.357 0 .709 -.052 1.043 -.151" /><Path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" /><Path d="M19 21v1m0 -8v1" /></Svg>;

}
export default IconMoodDollar;
        