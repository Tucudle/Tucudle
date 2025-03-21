import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="sobre este juego"
      isOpen={isOpen}
      handleClose={handleClose}
    >
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
