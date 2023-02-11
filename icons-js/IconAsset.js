import Svg, { Path } from 'react-native-svg';
                    
function IconAsset({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-asset" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 15m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" /><Path d="M9 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M14.218 17.975l6.619 -12.174" /><Path d="M6.079 9.756l12.217 -6.631" /><Path d="M9 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /></Svg>;

}
export default IconAsset;
                    