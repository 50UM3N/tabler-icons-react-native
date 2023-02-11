import Svg, { Path } from 'react-native-svg';
                    
function IconRelationOneToOne({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-relation-one-to-one" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><Path d="M8 10h1v4" /><Path d="M15 10h1v4" /><Path d="M12 10.5l0 .01" /><Path d="M12 13.5l0 .01" /></Svg>;

}
export default IconRelationOneToOne;
                    