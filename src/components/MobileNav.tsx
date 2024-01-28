import HomeIcon from '../assets/svg/home.svg';
import ExploreIcon from '../assets/svg/explore.svg';
import ChatIcon from '../assets/svg/chat.svg';
import SavedIcon from '../assets/svg/saved.svg';
import ProfileIcon from '../assets/svg/profile.svg';

// TODO: split this further
const MobileNav = () => {
    return (
        <div className="flex justify-center">
            <div className="navbar-mobile fixed bottom-8 h-fit bg-white w-full py-[18px] px-[23px]">
                <nav className="nav">
                    <ul className="flex flex-row justify-between">
                        <li className="flex flex-col gap-[4px] place-items-center">
                            <img src={HomeIcon} alt="" />
                            <p className="text-[12px] text-[#7D7F88] font-normal">
                                Home
                            </p>
                        </li>
                        <li className="flex flex-col gap-[4px] place-items-center">
                            <img src={ExploreIcon} alt="" />
                            <p className="text-[12px] text-[#7D7F88] font-normal">
                                Explore
                            </p>
                        </li>
                        <li className="flex flex-col gap-[4px] place-items-center">
                            <img src={ChatIcon} alt="" />
                            <p className="text-[12px] text-[#7D7F88] font-normal">
                                Chat
                            </p>
                        </li>
                        <li className="flex flex-col gap-[4px] place-items-center">
                            <img src={SavedIcon} alt="" />
                            <p className="text-[12px] text-[#7D7F88] font-normal">
                                Saved
                            </p>
                        </li>
                        <li className="flex flex-col gap-[4px] place-items-center">
                            <img src={ProfileIcon} alt="" />
                            <p className="text-[12px] text-[#7D7F88] font-normal">
                                Profile
                            </p>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default MobileNav