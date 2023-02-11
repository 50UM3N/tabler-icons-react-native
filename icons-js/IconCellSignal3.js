import Svg, { Path } from 'react-native-svg';
                    
function IconCellSignal3({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cell-signal-3" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 20h-15.269a0.731 .731 0 0 1 -.517 -1.249l14.537 -14.537a0.731 .731 0 0 1 1.249 .517v15.269z" /><Path d="M12 20v-9" /></Svg>;

}
export default IconCellSignal3;
                    