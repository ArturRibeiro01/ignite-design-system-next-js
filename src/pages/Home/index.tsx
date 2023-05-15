import { Heading, Text } from '@ignite-ui/react'
import * as S from './styles'

import previewImage from '../../assets/preview_image.png'
import Image from 'next/image'

export default function Home() {
  return (
    <S.Container>
      <S.Hero>
        <Heading size="4xl">Agendamento Descomplicado</Heading>
        <Text size="lg">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
      </S.Hero>
      <S.Preview>
        <Image
          src={previewImage}
          quality={100}
          height={400}
          priority
          alt={'preview de calendario em imagem'}
        />
      </S.Preview>
    </S.Container>
  )
}
