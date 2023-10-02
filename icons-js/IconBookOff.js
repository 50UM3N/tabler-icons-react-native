import Svg, { Path } from 'react-native-svg';
         
function IconBookOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-book-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 5.899 -1.096" /><Path d="M3 6a9 9 0 0 1 2.114 -.884m3.8 -.21c1.07 .17 2.116 .534 3.086 1.094a9 9 0 0 1 9 0" /><Path d="M3 6v13" /><Path d="M12 6v2m0 4v7" /><Path d="M21 6v11" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconBookOff;
        