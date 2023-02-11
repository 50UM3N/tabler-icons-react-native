import Svg, { Path } from 'react-native-svg';
                    
function IconSettingsOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9.456 5.435c.416 -.22 .745 -.609 .869 -1.118c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.187 1.016m-.126 3.666c-.516 .522 -1.348 .733 -2.123 .261a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.468 -.768 -.266 -1.59 .246 -2.108" /><Path d="M9.879 9.878a3 3 0 1 0 4.256 4.23m.552 -3.444a3.012 3.012 0 0 0 -1.412 -1.38" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconSettingsOff;
                    