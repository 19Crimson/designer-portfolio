<template>
  <Row>
    <TextBlock
      align="center"
      max-width="100%"
    >
      <Headline>
        This is second tab content
      </Headline>
    </TextBlock> 
  </Row>

  <Row center>
    <TextBlock>
      <Headline>
        Default text block
      </Headline>
      <Text>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </Text>
    </TextBlock>

    <TextBlock>
      <Headline align="center">
        Centered text block
      </Headline>
      <Text  align="center">
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </Text>
    </TextBlock>

    <TextBlock
      align="right"
      max-width="550"
      padding="100px 20px 20px"
    >
      <Headline
        font-size="26"
        color="#0202b8"
      >
        Text block with custom props
      </Headline>
      <Text
        font-size="16"
        color="#0202b8"
      >
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </Text>
    </TextBlock>
  </Row>

  <Row
    bgImage="header_bg.png"
  >
    <TextBlock>
      <Headline color="gray">
        Row example with background image
      </Headline>
      <Text color="gray">
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </Text>
    </TextBlock>
    <TextBlock align="center" margin="260px 60px 60px">
      <Text color="gray">
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </Text>
    </TextBlock>
  </Row>

  <Row center color="#a1a1ff">
    <TextBlock>
      <Headline>
        Row with video
      </Headline>
      <Text>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </Text>
    </TextBlock>

    <VideoWrapper file="playback.mp4"/>
  </Row>

  <Row color="#f4c5e3" center>
    <TextBlock>
      <Headline>
        Test headline
      </Headline>
      <Text>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </Text>
    </TextBlock>
  </Row>

  <Row center color="#070707">
    <VideoWrapper
      file="playback.mp4"
      margin="26px 0 0"
    />
    <TextBlock>
      <Headline color="#a1a1ff">
        Headline example
      </Headline>
      <Text color="#5151b8">
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </Text>
    </TextBlock>
  </Row>

  <Row center color="#3c3c3c">
    <TextBlock>
      <Headline>
        Test headline
      </Headline>
      <Text>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </Text>

      <Headline margin="20px 0 0 0">
        Test headline
      </Headline>
      <Text>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </Text>
    </TextBlock>

    <TextBlock>
      <Headline>
        Test headline
      </Headline>
      <Text>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </Text>
      <Headline margin="20px 0 0 0">
        Test headline
      </Headline>
      <Text>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </Text>  
    </TextBlock>
  </Row>
</template>

<script setup lang="ts">
import {
  ProjectHeader,
  Row,
  Headline,
  Text,
  TextBlock,
  VideoWrapper,
} from '@/components';
</script>