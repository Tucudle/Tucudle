type Definition = {
  word: string
  definition: string
  example: string
}

const DEFINITIONS: Definition[] = [
  {
    word: 'chivo',
    definition: 'Persona masculina que sufrió una infidelidad.',
    example: 'Viste que al de la esquina lo han hecho chivo?',
  },
  {
    word: 'sonsa',
    definition: 'Persona torpe.',
    example: 'Vei que so sonsa vo?',
  },
  {
    word: 'chiva',
    definition: 'Persona del sexo femenino que sufrió una infidelidad.',
    example:
    'Changa date cuenta, sos semejante chiva.',
  },
  {
    word: 'maver',
    definition: 'Expresión cuyo significado es: ¿A ver?.',
    example:
    'Mave mostrame que compraste.',
  },
  {
    word: 'ramia',
    definition: 'Expresion cuyo sinonimo es arrastrar.',
    example:
    'Llegas a desaprobar y te voy a ramia de las mechas.',
  },
  {
    word: 'choto',
    definition: 'Expresion comodin, mas relacionadad con el miembro masculino.',
    example:
    'Nada me sale bien, me cago en el choto',
  },
  {
    word: 'papia',
    definition: 'Comer.',
    example:
    '¡Ya está la comida, vengan a papiar!',
  },
  {
    word: 'bollo',
    definition: 'golpe de puño.',
    example:
    'Portate bien porque te estás ganando un bollo',
  },
  {
    word: 'paila',
    definition:
    'Persona con orejas grandes.',
    example:
    'Vea esas semejantes pailas que tiene.',
  },
  {
    word: 'apuna',
    definition: 'Malestar en el oído por la altura.',
    example:
    'Iba subiendo a Tafí Del Valle y me a dió la apuna.',
  },
  {
    word: 'chuño',
    definition: 'sinónimo de vómito.',
    example:
    'Vea ese chuño que pegó el Nico.',
  },
  {
    word: 'fiero',
    definition: 'Persona de poco atractivo visual, sinónimo de feo.',
    example:
    'So ma fiero que el pingo.',
  },
  {
    word: 'croto',
    definition: 'Persona desarreglada.',
    example:
    'Anda ponete unas zapatillas, andás bien croto.',
  },
  {
    word: 'macho',
    definition: 'Tercera persona de una relación amorosa,sinónimo de amante.',
    example:
    'A la Maria le han dao la cana con el macho.',
  },
  {
    word: 'tacho',
    definition: 'Contenedor de basura, tambien utilizado para nombrar al valde o cubeta.',
    example:
    'Andá tirá la basura en el tacho',
  },
  {
    word: 'sanwi',
    definition: 'Sándwich (normalmente de milanesa).',
    example:
    'Vamo a comé un sanwi con mirinda.',
  },
  {
    word: 'choro',
    definition: 'Ladrón.',
    example:
    'Lo han pillao al choro en la esquina, vamo a ve quien es.',
  },
  {
    word: 'sonso',
    definition: 'Sinónimo de "tonto"',
    example:
    'Chango como vas a pisar aca, ¿Ves que sos sonso?',
  },
  {
    word: 'ladia',
    definition: 'De costado.',
    example:
    'Venía en la moto el otro dia, y se me la ladiao, casi me caigo.',
  },
  {
    word: 'ocote',
    definition: 'Expresión vulgar para nombrar a la cola.',
    example:
    'Vea ese semejante que tenes para aprobar con 6.',
  },
  {
    word: 'jaldo',
    definition: 'Actual gobernador de la provincia de Tucumán',
    example:
    '',
  },
  {
    word: 'ortia',
    definition: 'Expresion vulgar de cuando te tocan la cola.',
    example:
    'Eh dejen de ortia eh, no sean abusos.',
  },
  {
    word: 'chape',
    definition: 'Sinónimo de beso.',
    example:
    'Al menos un chape me tenes que dar.',
  },
  {
    word: 'ñoqui',
    definition: 'Empleado público que no trabaja.',
    example:
    'Ninguno hace nada, El delegado es semajante ñoqui.',
  },
  {
    word: 'pilla',
    definition: 'Expresion con 2 siginificados proviene de atrapar, y de persona dificil de engañanar.',
    example:
    'El choro se dejó pillá por la polecia.',
  },
  {
    word: 'chaja',
    definition: 'Expresion utilizada para el amigo que le gusta mirar a las mujeres de sus amigos.',
    example:
    'Chango como te vas a levantar a la ex de tu mejor amigo, so alto chajá vo.',
  },
  {
    word: 'yutas',
    definition: 'Expresión utilizada para no entrar al colegio en la etapada de la adolescencia.',
    example:
    'Si supiera mi mamá las veces que me hice la yuta.',
  },
  {
    word: 'preña',
    definition:
    'Sinónimo de embarazo',
    example:
    'Ya la han preñao a la de la esquina de nuevo.',
  },
  {
    word: 'julio',
    definition:
    'Julio Argentino Roca, ex presidente de la nación, histórico personaje ilustre de Tucumán.',
    example:
    '',
  },
  {
    word: 'juira',
    definition: 'Expresión para que se vaya alguien.',
    example:
    'Juira perro!',
  },
  {
    word: 'lules',
    definition: 'Departamento de Tucumán.',
    example:
    'Ahí en Lules hay semajantes minitas.',
  },
  {
    word: 'pingo',
    definition: 'Expresion comodin, mas relacionada con el miembro masculino.',
    example:
    'Me cago en el pingo, Que calor del pingo.',
  },
  {
    word: 'uruda',
    definition: 'Persona del sexo femenino con una particularidad grande.',
    example:
      'Que uruda que so vo',
  },
  {
    word: 'idiai',
    definition: 'Expresión tucumana que significa ¿Y ahora?.',
    example:
      'Idiai, que ya venís?',
  },
  {
    word: 'comue',
    definition: 'Expresion utilizada para decir ¿COMO ES?.',
    example:
    'Pasame la comué que está ahí.',
  },
  {
    word: 'pirao',
    definition: 'Se escapó',
    example: 'Estaba sacando un dorao y se me lo a pirao chango podes creer.',
  },
  {
    word: 'vacia',
    definition: 'Expresion utilizada para decir TOMEMOS ALCOHOL.',
    example:
    'Escucha ese temaaaa, VACIAAAAAA.',
  },
  {
    word: 'crios',
    definition: 'Niños.',
    example:
    'El otro dia mi hermana me a dejao con los crios, son unos demonios.',
  },
  {
    word: 'afana',
    definition: 'Sinónimo de robo.',
    example:
    'A la salida del boliche me han afanao el celu.',
  },
  {
    word: 'bulla',
    definition: 'Ruido.',
    example:
    '¡Dejen de hacer bulla que está durmiendo el abuelo!',
  },
  {
    word: 'churo',
    definition: 'Gracioso, amigable.',
    example:
    'De churo que so vo jaja.',
  },
  {
    word: 'mishi',
    definition: 'Gato.',
    example:
    'Sacalo al mishi de la mesa!',
  },
  {
    word: 'patia',
    definition:
    'Expresion utilizada proveniente del verbo PATEAR.',
    example:
    'Patiá po fuerte Guillermo, que queri coloca.',
  },
  {
    word: 'pucho',
    definition: 'Cigarrillo.',
    example:
      'Convidame un pucho, no seas aca.',
  },
  {
    word: 'pecha',
    definition: 'Empujar.',
    example:
      'Eh dejen de pecha, si vamos a pasar todos.',
  },
  {
    word: 'putia',
    definition:
      'Sinónimo de insultar',
    example:
      'El borracho en la plaza me estaba meta putia porque no le di plata para el vino.',
  },
  {
    word: 'toria',
    definition: 'Ladrido de los perros.',
    example:
      'Pancho levantate a ver que estan meta toria los perros.',
  },
  {
    word: 'upiti',
    definition: 'Persona entrometida.',
    example:
      'Ve por upiti a vos tambien te han estafao.',
  },
  {
    word: 'ondia',
    definition: 'Expresion proventiente del acto de cazar con GOMERA - ONDA.',
    example:
      'Vamo a ondia unas palomas.',
  },
  {
    word: 'giria',
    definition: 'Escupir a alguien.',
    example:
      'Estos ql estan meta giria, parecen guanacos.',
  },
  {
    word: 'Tordo',
    definition: 'Sinónimo de amante.',
    example:
      'Pobre Raúl, la Karen salió con el tordo ayer cuando él estaba trabajando.',
  },
  {
    word: 'Lance',
    definition: 'Sinónimo de oportunidad',
    example:
      'No estudié pero me tiro un lance.',
  },
  {
    word: 'queno',
    definition: 'Palabra utilizada para afirmar o asegurar algo.',
    example:
      'Layla está pa una polarizada quenó? ',
  },
  {
    word: 'tarro',
    definition: 'Palabra con múltiples significados. Puede ser suerte o un recipiente.',
    example:
      'Aprobé la historia con 6, tuve semejante tarro.',
  }
]

let WORDS: string[] = []

DEFINITIONS.forEach(function (item, index) {
  WORDS.push(item.word)
})

export { WORDS, DEFINITIONS }
