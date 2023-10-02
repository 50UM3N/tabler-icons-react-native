import Svg, { Path } from 'react-native-svg';
         
function IconBallAmericanFootball({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ball-american-football" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 9l-6 6" /><Path d="M10 12l2 2" /><Path d="M12 10l2 2" /><Path d="M8 21a5 5 0 0 0 -5 -5" /><Path d="M16 3c-7.18 0 -13 5.82 -13 13a5 5 0 0 0 5 5c7.18 0 13 -5.82 13 -13a5 5 0 0 0 -5 -5" /><Path d="M16 3a5 5 0 0 0 5 5" /></Svg>;

}
export default IconBallAmericanFootball;
        