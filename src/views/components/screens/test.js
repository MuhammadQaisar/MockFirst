import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides=[
    {
        id:1,
        title:'Mock First',
        description:'Get ready to ace your Interviews',
        image:require('../../../assets/image-2.png')
    },
    {
        id:2,
        title:'Practice Makes Perfect',
        description:'Practice for success with tailored mock interviews in our app, featuring a diverse range of questions and scenarios',
        image:require('../../../../assets/image-2.png')
    },
    {
        id:3,
        title:'Expert Feedback',
        description:'Get expert feedback to enhance your skills and grow after every practice session.',
        image:require('../../../../assets/image-2.png')
    },
    {
        id:4,
        title:'Track Your Progress',
        description:'Witness your growth, monitor performance, and discover strengths. Let us guide your skill-building journey and elevate your competitive edge.',
        image:require('../../../../assets/image-2.png')
    },
    {
        id:5,
        title:'Ready to Begin?',
        description:'Start your journey to interview success with Mock First.We are excited to be part of your career advancement.Lets practice, learn, and excel together!',
        image:require('../../../../assets/image-2.png')
    
    }
];

export default function WelcomeScreen() {
  const [ShowHomePage, SetShowHomePage] = useState(false);

  if (!ShowHomePage) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => (
          <View>
            <Image source={item.image} style={{ width: 200, height: 200 }} />
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
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