import Svg, { Path } from 'react-native-svg';
                    
function IconBackhoe({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-backhoe" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M13 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M13 19l-9 0" /><Path d="M4 15l9 0" /><Path d="M8 12v-5h2a3 3 0 0 1 3 3v5" /><Path d="M5 15v-2a1 1 0 0 1 1 -1h7" /><Path d="M21.12 9.88l-3.12 -4.88l-5 5" /><Path d="M21.12 9.88a3 3 0 0 1 -2.12 5.12a3 3 0 0 1 -2.12 -.88l4.24 -4.24z" /></Svg>;

}
export default IconBackhoe;
                    