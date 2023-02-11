import Svg, { Path } from 'react-native-svg';
                    
function IconPlayerTrackNext({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-track-next" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 5v14l8 -7z" /><Path d="M14 5v14l8 -7z" /></Svg>;

}
export default IconPlayerTrackNext;
                    