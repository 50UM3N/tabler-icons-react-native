import Svg, { Path } from 'react-native-svg';
         
function IconPlayerRecord({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-record" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /></Svg>;

}
export default IconPlayerRecord;
        