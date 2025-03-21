import { ChartBarIcon, InformationCircleIcon } from '@heroicons/react/outline'
import { GAME_TITLE } from '../../constants/strings'
import ImgCactus from '../../assets/cactus.png'

type Props = {
  setIsInfoModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
  setIsSettingsModalOpen: (value: boolean) => void
}

export const Navbar = ({ setIsInfoModalOpen, setIsStatsModalOpen }: Props) => {
  return (
    <div className="navbar">
      <div className="navbar-banner px-5 py-2 bg-yellow-400 relative flex justify-center items-center w-full">
        <p className="text-sm italic">
          Editado por:{' '}
          <a className="underline font-bold" href="https://www.instagram.com/zeusagenciaok" target='_BLANK' rel="noopener noreferrer">
            Zeus Agencia
          </a>
        </p>
        <p className="text-sm italic text-black dark:text-white absolute right-5">
          Versión 1.0.1
        </p>
      </div>
      <div className="navbar-content px-5">
        <InformationCircleIcon
          className="h-6 w-6 mr-2 cursor-pointer dark:stroke-white"
          onClick={() => setIsInfoModalOpen(true)}
        />
        <div className="flex">
          <p className="text-xl font-bold dark:text-white">{GAME_TITLE}</p>
          <img
            className="h-6 w-6 ml-1 cursor-pointer dark:stroke-white"
            src={ImgCactus}
            alt=""
          />
        </div>
        <div className="right-icons">
          <ChartBarIcon
            className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
            onClick={() => setIsStatsModalOpen(true)}
          />
        </div>
      </div>
      <hr></hr>
    </div>
  )
}