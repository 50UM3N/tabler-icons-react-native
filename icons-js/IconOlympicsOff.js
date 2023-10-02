import Svg, { Path } from 'react-native-svg';
         
function IconOlympicsOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-olympics-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 6a3 3 0 1 0 3 3" /><Path d="M18 9m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M9 9a3 3 0 0 0 3 3m2.566 -1.445a3 3 0 0 0 -4.135 -4.113" /><Path d="M9 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M12.878 12.88a3 3 0 0 0 4.239 4.247m.586 -3.431a3.012 3.012 0 0 0 -1.43 -1.414" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconOlympicsOff;
        