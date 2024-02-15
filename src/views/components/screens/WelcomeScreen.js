import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import COLORS from '../../../conts/colors';
import Button from '../Button';

const slides=[
    {
        id:1,
        title:'Mock First',
        description:'Get ready to ace your Interviews',
        image:require('../../../../assets/s1.png')
    },
    {
        id:2,
        title:'Practice Makes Perfect',
        description:'Practice for success with tailored mock interviews in our app, featuring a diverse range of questions and scenarios',
        image:require('../../../../assets/s2.png')
    },
    {
        id:3,
        title:'Expert Feedback',
        description:'Get expert feedback to enhance your skills and grow after every practice session.',
        image:require('../../../../assets/s3.png')
    },
    {
        id:4,
        title:'Track Your Progress',
        description:'Witness your growth, monitor performance, and discover strengths. Let us guide your skill-building journey and elevate your competitive edge.',
        image:require('../../../../assets/s4.png')
    },
    {
      id:5,
      title:'Ready to Begin?',
      description:'Start your journey to interview success with Mock First.We are excited to be part of your career advancement.Lets practice, learn, and excel together!',
      image:require('../../../../assets/s5.png')
  }
];

export default function WelcomeScreen({navigation}) {
  const [ShowHomePage, SetShowHomePage] = useState(false);

  const renderItem = ({ item }) => (
    <View style={{backgroundColor:COLORS.background,flex:1, alignItems:'center' }}>
      <Image source={item.image} style={{ width: 200, height: 200,marginTop:180 }} />
      <Text style={{fontFamily:'Poppins',fontSize:41,fontWeight:'600', color:'white'}}>{item.title}</Text>
      <Text style={{color:'white', fontFamily:'Poppins',fontSize:14,lineHeight:16,alignItems:'center',padding:25}}>{item.description}</Text>
      {item.id === 5 && <Button title="Start" onPress={()=> navigation.navigate('LoginScreen')} />} 
    </View>
  );

  if (!ShowHomePage) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={renderItem}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>WelcomeScreen</Text>
    </View>
  );
}