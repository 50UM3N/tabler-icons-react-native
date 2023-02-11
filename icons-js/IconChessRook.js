import Svg, { Path } from 'react-native-svg';
                    
function IconChessRook({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chess-rook" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 16l-1.447 .724a1 1 0 0 0 -.553 .894v2.382h12v-2.382a1 1 0 0 0 -.553 -.894l-1.447 -.724h-8z" /><Path d="M8 16l1 -9h6l1 9" /><Path d="M6 4l.5 3h11l.5 -3" /><Path d="M10 4v3" /><Path d="M14 4v3" /></Svg>;

}
export default IconChessRook;
                    