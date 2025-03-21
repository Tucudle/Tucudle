export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = [
  'Ah pero so semejante capo!',
  "Bien ahí mi raaai",
  "Mercedes Sosa estaría orgullosa, vamo changoo!",
]
export const GAME_COPIED_MESSAGE = 'Partida de juego copiada'
export const NOT_ENOUGH_LETTERS_MESSAGE =
  'Cantidad de letras insuficiente, no seas sonso/a'
export const WORD_NOT_FOUND_MESSAGE = 'La palabra no existe, bambaco/a'
export const HARD_MODE_ALERT_MESSAGE =
  'Hard Mode can only be enabled at the start!'
export const HARD_MODE_DESCRIPTION =
  'Any revealed hints must be used in subsequent guesses'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'For improved color vision'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `La palabra era ${solution}`
export const WRONG_SPOT_MESSAGE = (letter: string, pos: number) =>
  `Debés usar ${letter} en la posición ${pos}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `La palabra debe contener ${letter}`
export const ENTER_TEXT = 'Enviar'
export const DELETE_TEXT = 'Eliminar'
export const STATISTICS_TITLE = 'Estadísticas individuales'
export const GUESS_DISTRIBUTION_TEXT = 'Distribución de aciertos'
export const NEW_WORD_TEXT = 'Próximo tucudle en'
export const SHARE_TEXT = 'Compartir'
export const TOTAL_TRIES_TEXT = 'Total de jugadas'
export const SUCCESS_RATE_TEXT = 'Aciertos'
export const CURRENT_STREAK_TEXT = 'Racha actual'
export const BEST_STREAK_TEXT = 'Mejor racha'
