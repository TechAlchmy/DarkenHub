
import { useMemo } from 'react'
import { motion } from 'framer-motion'

import { UserProfile } from "../../components/Dota2/UserProfile";
import Apex from "../../assets/profileOld/Apex-Legends-Emblem 1.png";
import Dota2 from "../../assets/profileOld/dota-2-logo-A8CAC9B4C9-seeklogo 1.png";
import OverWatch from "../../assets/profile/overwatch-2.png";
import LoL from "../../assets/profile/LoL_icon 1.png";
import Valarant from "../../assets/profileOld/valorant-logo-3D72D9117F-seeklogo 1.png";

import { GameServiceItem } from "./ServiceCom";
import { Dot3 } from '../../components/Dota2/SVG/Dot3';
import { Star } from '../../components/Dota2/SVG/Star';
import GameServer from "../../components/common/GameServer";
const Profile = () => {
	const services = useMemo(() => {
		return [
			{
				bg: "#FA9C1E40",
				name: "Overwatch",
				img: OverWatch
			},
			{
				bg: "#EA473B4D",
				name: "Dota 2",
				img: Dota2
			},
			{
				bg: "#28ACA640",
				name: "Leaggue of ....",
				img: LoL
			},
			{
				bg: "#9C68C64D",
				name: "Apex Lege...",
				img: Apex
			},
			{
				bg: "#7166FF4D",
				name: "Valarant",
				img: Valarant
			},
		]
	}, [])
	const gameServers = useMemo(() => {
		return [
			{
				server: "EU",
				salename: "Name",
				review: 328,
				description: "Duo, 3000-3500 (price for one win)",
				price: 13.39,
				color: "#166708"
			},
			{
				server: "EU",
				salename: "Name",
				review: 328,
				description: "Solo, 8000+ (price for one win)",
				price: 13.39,
				color: "#166708"
			},
			{
				server: "EU",
				salename: "Name",
				review: 328,
				description: "Solo, 8000+ (price for one win)",
				price: 13.39,
				color: "#C86C00"
			},
			{
				server: "EU",
				salename: "Name",
				review: 328,
				description: "Solo, 8000+ (price for one win)",
				price: 13.39,
				color: "#C86C00"
			},
		]
	}, []);
	return (
		<motion.div className='w-full flex flex-col gap-10 px-10'>
			<div className="rounded-3xl overflow-hidden bg-[#1D2333] pb-10 relative z-20">
				<img
					src={"../../src/assets/profile/profileBg.jpg"}
					alt="profileBg"
					className="w-full h-full border-radius-30px"
				/>
				<div className="w-full">
					<div className="flex items-center justify-center -mt-[160px]">
						<UserProfile />
					</div>
					<div className="absolute w-fit py-2 px-5 -mt-[160px] text-white bg-[#40D04F] rounded-md right-10 cursor-pointer">
						Send Message
					</div>
				</div>
				<div className="w-full px-20 flex justify-between items-center text-white">
					<div className="w-fit flex gap-2 items-center">
						<div className="w-[80px] h-[50px] border border-white/55 rounded-md"></div>
						<div className="w-[80px] h-[50px] border border-white/55 rounded-md"></div>
						<div className="w-[80px] h-[50px] border border-white/55 rounded-md"></div>
						<div className="w-[80px] h-[50px] border border-white/55 rounded-md"></div>
					</div>
					<p className="text-3xl font-semibold font-poppins"> NameProfile </p>
					<div className="flex gap-6">
						{services.map((service, index) => (
							<GameServiceItem
								key={index}
								service={service}
							/>
						))}
					</div>
				</div>
			</div>
			<div className="w-full rounded-3xl  bg-[#1D2333] py-10 relative z-20">
				<img src="../../src/assets/profile/menu.png" />
			</div>
			<div className="w-full h-[700px] rounded-3xl  bg-[#1D2333] pt-5 pb-20 px-5 relative z-20 flex gap-5">
				<div className='w-1/5 h-full flex flex-col gap-5'>
					<div className='flex flex-col gap-5 items-center justify-start p-5 w-full h-1/2 rounded-3xl border border-white/55 bg-radial-white bg-linear-white-top bg-linear-white-bottom bg-linear-white-left bg-linear-white-right' >
						<Dot3 />
						<div className='text-white'>
							<p className='text-xl font-semibold'> Aboute me</p>
							<p className='text-normal mt-2'>
								Learn how to design and implement versatile, reusable components to elevate the functionality and aesthetics of your UI projects.
							</p>
						</div>
					</div>
					<div className='flex flex-col gap-5 items-center justify-start p-5 w-full h-1/2 rounded-3xl border border-white/55 bg-radial-white bg-linear-white-top bg-linear-white-bottom bg-linear-white-left bg-linear-white-right' >
						<Dot3 />
						<div className='text-white'>
							<p className='text-xl font-semibold'> Testimonials</p>
							<div className='w-full my-2 flex gap-1'>
								<p className='font-semibold'>124</p>
								<Star />
								<Star />
								<Star />
								<Star />
								<Star />
							</div>
							<p className='text-normal'>
								Learn how to design and implement versatile, reusable components to elevate the functionality and aesthetics of your UI projects.
							</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-5 items-center justify-start p-5 w-3/5 h-full rounded-3xl border border-white/55 bg-radial-white bg-linear-white-top bg-linear-white-bottom bg-linear-white-left bg-linear-white-right'>
					<Dot3 />
					<div className='text-white w-full'>
						<p className='text-xl font-semibold'> Your products </p>
						<p className='text-normal my-4'>
							Dota 2
						</p>
						<div>
							{
								gameServers.map((item, index) => {
									return <div key={`${item.server}-${index}`} className="mt-4">
										<GameServer server={item.server} salename={item.salename} review={item.review} description={item.description} price={item.price} color={item.color} />
									</div>
								})
							}
						</div>
					</div>
				</div>
				<div className='w-1/5 h-full flex flex-col gap-5'>
					<div className='flex flex-col gap-5 items-center justify-start p-5 w-full h-1/2 rounded-3xl border border-white/55 bg-radial-white bg-linear-white-top bg-linear-white-bottom bg-linear-white-left bg-linear-white-right' >
						<Dot3 />
						<div className='text-white'>
							<p className='text-xl font-semibold'> Clan activity </p>
							<p className='text-normal mt-2'>
								Learn how to design and implement versatile, reusable components to elevate the functionality and aesthetics of your UI projects.
							</p>
						</div>
					</div>
					<div className='flex flex-col gap-5 items-center justify-start p-5 w-full h-1/2 rounded-3xl border border-white/55 bg-radial-white bg-linear-white-top bg-linear-white-bottom bg-linear-white-left bg-linear-white-right' >
						<Dot3 />
						<div className='text-white'>
							<p className='text-xl font-semibold'> New orders </p>
							<p className='text-normal mt-2'>
								Learn how to design and implement versatile, reusable components to elevate the functionality and aesthetics of your UI projects.
							</p>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Profile