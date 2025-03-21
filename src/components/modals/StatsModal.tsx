import Countdown from 'react-countdown'
import { StatBar } from '../stats/StatBar'
import { Histogram } from '../stats/Histogram'
import { GameStats } from '../../lib/localStorage'
import { shareStatus } from '../../lib/share'
import { solution, definition, tomorrow } from '../../lib/words'
import { BaseModal } from './BaseModal'
import {
  STATISTICS_TITLE,
  GUESS_DISTRIBUTION_TEXT,
  NEW_WORD_TEXT,
  SHARE_TEXT,
} from '../../constants/strings'
// import { GIF_URL } from '../../constants/settings'
// import {
//   TwitterShareButton,
//   TwitterIcon,
//   // WhatsappShareButton
// } from 'react-share'

type Props = {
  isOpen: boolean
  handleClose: () => void
  guesses: string[]
  gameStats: GameStats
  isGameLost: boolean
  isGameWon: boolean
  handleShareToClipboard: () => void
  isHardMode: boolean
  isDarkMode: boolean
  isHighContrastMode: boolean
}

export const StatsModal = ({
  isOpen,
  handleClose,
  guesses,
  gameStats,
  isGameLost,
  isGameWon,
  handleShareToClipboard,
  isHardMode,
  isDarkMode,
  isHighContrastMode,
}: Props) => {
  if (gameStats.totalGames <= 0) {
    return (
      <BaseModal
        title={STATISTICS_TITLE}
        isOpen={isOpen}
        handleClose={handleClose}
      >
        <StatBar gameStats={gameStats} />
      </BaseModal>
    )
  }
  return (
    <BaseModal title="" isOpen={isOpen} handleClose={handleClose}>
      {(isGameLost || isGameWon) && (
        <div>
          <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
            Definición
          </h4>
          <div>
            <h5>
              <strong>{solution}</strong> — {definition.definition} <br />{' '}
              <i>Ejemplo: "{definition.example}"</i>
            </h5>
          </div>
        </div>
      )}

      {(isGameLost || isGameWon) && (
        <div className="mt-5 sm:mt-5 columns-2">
          <div>
            <h5>{NEW_WORD_TEXT}</h5>
            <Countdown
              className="text-lg font-medium text-gray-900 dark:text-gray-100"
              date={tomorrow}
              daysInHours={true}
            />
          </div>

          <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
            onClick={() => {
              shareStatus(
                guesses,
                isGameLost,
                isHardMode,
                isDarkMode,
                isHighContrastMode,
                handleShareToClipboard
              )
            }}
          >
            {SHARE_TEXT}
          </button>
        </div>
      )}

      <div className="mt-5">
        Envíanos tus sugerencias vía{' '}
        <a
          href="https://www.instagram.com/tucudle/"
          className="underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>{' '}
      </div>

      <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
        <br />
        {STATISTICS_TITLE}
      </h4>

      <StatBar gameStats={gameStats} />
      <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
        {GUESS_DISTRIBUTION_TEXT}
      </h4>
      <Histogram gameStats={gameStats} />
    </BaseModal>
  )
}
