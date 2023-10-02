import Svg, { Path } from 'react-native-svg';
         
function IconHomeUp({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 21v-6a2 2 0 0 1 2 -2h2c.641 0 1.212 .302 1.578 .771" /><Path d="M20.136 11.136l-8.136 -8.136l-9 9h2v7a2 2 0 0 0 2 2h6.344" /><Path d="M19 22v-6" /><Path d="M22 19l-3 -3l-3 3" /></Svg>;

}
export default IconHomeUp;
        