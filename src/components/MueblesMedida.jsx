import ButtonCustom from "./ButtonCustom";
import MueblesSlider from "./MueblesSlider";

const MueblesMedida = () => {
	return (
		<>
			<div className='group h-auto rounded-lg grid place-content-center col-span-8 md:col-span-2  px-2 mt-8 '>
				
				<h2 className='text-xl sm:text-4xl font-bold text-slate-800 tracking-widest leading-snug font-montserrat text-center'>
					Muebles a Medida
				</h2>
				<p className='text-base sm:text-xl text-center leading-snug  text-slate-500 my-4'>
					¿Tenés una idea en mente? Consultános y la hacemos realidad
				</p>
				<p className='text-base text-slate-500 text-center tracking-wider font-bold mb-4 sm:mb-8'>
					Observa nuestros últimos trabajos
				</p>
				<div className='flex items-center justify-center mb-4'>
					<ButtonCustom  text={"Ver Diseños a Medida"}/>
				</div>
			</div>
			<div className='group md:px-20 rounded-lg col-span-6 cursor-grab relative md:mt-16'>
				<div className='relative z-0'>
					<MueblesSlider />
				</div>
			</div>
		</>
	);
};
export default MueblesMedida;
