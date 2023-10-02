import Svg, { Path } from 'react-native-svg';
         
function IconBurger({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-burger" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 15h16a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><Path d="M12 4c3.783 0 6.953 2.133 7.786 5h-15.572c.833 -2.867 4.003 -5 7.786 -5z" /><Path d="M5 12h14" /></Svg>;

}
export default IconBurger;
        