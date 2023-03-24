import Svg, { Path } from 'react-native-svg';
                    
function IconTriangleInverted({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-triangle-inverted" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10.24 20.043l-8.422 -14.06a1.989 1.989 0 0 1 1.7 -2.983h16.845a1.989 1.989 0 0 1 1.7 2.983l-8.422 14.06a1.989 1.989 0 0 1 -3.4 0z" /></Svg>;

}
export default IconTriangleInverted;
                    