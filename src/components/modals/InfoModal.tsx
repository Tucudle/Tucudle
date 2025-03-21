import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="cómo jugar" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Tenés 6 intentos para adivinar la palabra tucumana del día. después de cada
        intento, el color de las teclas se modificará para mostrarte qué tan
        cerca estás de acertar.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" status="correct" />
        <Cell value="H" />
        <Cell value="O" />
        <Cell value="R" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        la palabra contiene la letra C y está en el lugar correcto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" />
        <Cell value="H" />
        <Cell value="A" status="present" />
        <Cell value="P" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        la palabra contiene la letra A pero está en el lugar incorrecto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="F" />
        <Cell value="I" status="absent" />
        <Cell value="E" />
        <Cell value="R" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        la palabra no contiene la letra I.
      </p>

      <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
        en Tucudle, la palabra del día es una relacionada con Tucumán. puede
        ser del lunfardo, de uso popular en distintas generaciones y lugares de la provincia,
        e incluso ser una cosa o figura icónica!
      </p>
      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        este es un juego tucumano basado en el código de Boludle -{' '}
        <a
          href="https://github.com/sjaquemate/boludle"
          className="underline font-bold"
        >
          Mira el código acá
        </a>{' '}
      </p>
    </BaseModal>
  )
}
