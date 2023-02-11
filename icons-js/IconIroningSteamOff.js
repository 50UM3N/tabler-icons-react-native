import Svg, { Path } from 'react-native-svg';
                    
function IconIroningSteamOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ironing-steam-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 4h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865a1 1 0 0 1 -.821 1.15" /><Path d="M16 16h-13a7 7 0 0 1 6.056 -6.937" /><Path d="M13 9h6.8" /><Path d="M12 19v2" /><Path d="M8 19l-1 2" /><Path d="M16 19l1 2" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconIroningSteamOff;
                    