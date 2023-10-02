import Svg, { Path } from 'react-native-svg';
         
function IconArrowsShuffle({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-shuffle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M18 4l3 3l-3 3" /><Path d="M18 20l3 -3l-3 -3" /><Path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" /><Path d="M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3" /></Svg>;

}
export default IconArrowsShuffle;
        