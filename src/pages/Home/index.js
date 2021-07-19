import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';

import {Feather} from '@expo/vector-icons';
import {ContainerLogo, Logo, ContainerContent, Title, SubTitle, ContainerInput, BoxIcon, Input, 
    ButtonLink, ButtonLinkText} from './styles';



export default function Home() {
  return (
    <LinearGradient
      colors={['#FF7F50', '#FF6347']}
      style={{ flex: 1, justifyContent: 'center' }}
    >
      <StatusBarPage
        barStyle="light-content"
        backgroundColor="#FF7F50"
      />

      <Menu />

      <ContainerLogo>
        <Logo source={require('../../assets/lk.jpg')} resizeMode="contain" />
      </ContainerLogo>

      <ContainerContent>
        <Title>LinkGirl</Title>
        <SubTitle> Cole seu Link para encurtar</SubTitle>

        <ContainerInput>
          <BoxIcon>
            <Feather name="link" size={22} color= '#FFF' />
          </BoxIcon>
          <Input
          placeholder="Cole seu link aqui..."
          placeholderTextColor="White"
          />
        </ContainerInput>

        <ButtonLink>
          <ButtonLinkText> Gerar Link </ButtonLinkText>
        </ButtonLink>
      </ContainerContent>

    </LinearGradient>
  )
}