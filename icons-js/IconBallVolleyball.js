import Svg, { Path } from 'react-native-svg';
                    
function IconBallVolleyball({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ball-volleyball" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><Path d="M12 12a8 8 0 0 0 8 4" /><Path d="M7.5 13.5a12 12 0 0 0 8.5 6.5" /><Path d="M12 12a8 8 0 0 0 -7.464 4.928" /><Path d="M12.951 7.353a12 12 0 0 0 -9.88 4.111" /><Path d="M12 12a8 8 0 0 0 -.536 -8.928" /><Path d="M15.549 15.147a12 12 0 0 0 1.38 -10.611" /></Svg>;

}
export default IconBallVolleyball;
                    