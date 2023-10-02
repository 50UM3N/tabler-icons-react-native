import Svg, { Path } from 'react-native-svg';
         
function IconBallAmericanFootballOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ball-american-football-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 9l-1 1m-2 2l-3 3" /><Path d="M10 12l2 2" /><Path d="M8 21a5 5 0 0 0 -5 -5" /><Path d="M6.813 6.802a12.96 12.96 0 0 0 -3.813 9.198a5 5 0 0 0 5 5a12.96 12.96 0 0 0 9.186 -3.801m1.789 -2.227a12.94 12.94 0 0 0 2.025 -6.972a5 5 0 0 0 -5 -5a12.94 12.94 0 0 0 -6.967 2.022" /><Path d="M16 3a5 5 0 0 0 5 5" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconBallAmericanFootballOff;
        