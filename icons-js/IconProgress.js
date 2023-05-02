import Svg, { Path } from 'react-native-svg';
                    
function IconProgress({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-progress" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" /><Path d="M14 3.223a9.003 9.003 0 0 1 0 17.554" /><Path d="M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" /><Path d="M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305" /><Path d="M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" /></Svg>;

}
export default IconProgress;
                    