<template>
  <Row>
    <TextBlock
      align="center"
      max-width="100%"
    >
      <Headline>
        Inspiration tab content
      </Headline>
    </TextBlock> 
  </Row>

  <Row center>
    <TextBlock>
      <Headline>
        Default text block
      </Headline>
      <TextWrap>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </TextWrap>
    </TextBlock>

    <TextBlock>
      <Headline align="center">
        Centered text block
      </Headline>
      <TextWrap  align="center">
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </TextWrap>
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
      <TextWrap
        font-size="16"
        color="#0202b8"
      >
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </TextWrap>
    </TextBlock>
  </Row>

  <Row
    bgImage="header_bg.png"
  >
    <TextBlock>
      <Headline color="gray">
        Row example with background image
      </Headline>
      <TextWrap color="gray">
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </TextWrap>
    </TextBlock>
    <TextBlock align="center" margin="260px 60px 60px">
      <TextWrap color="gray">
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </TextWrap>
    </TextBlock>
  </Row>

  <Row center color="#a1a1ff">
    <TextBlock>
      <Headline>
        Row with video
      </Headline>
      <TextWrap>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </TextWrap>
    </TextBlock>

    <VideoWrap src="playback.mp4"/>
  </Row>

  <Row color="#f4c5e3" center>
    <TextBlock>
      <Headline>
        Test headline
      </Headline>
      <TextWrap>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </TextWrap>
    </TextBlock>
  </Row>

  <Row center color="#070707">
    <VideoWrap
      src="playback.mp4"
      margin="26px 0 0"
    />
    <TextBlock>
      <Headline color="#a1a1ff">
        Headline example
      </Headline>
      <TextWrap color="#5151b8">
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </TextWrap>
    </TextBlock>
  </Row>

  <Row center color="#3c3c3c">
    <TextBlock>
      <Headline>
        Test headline
      </Headline>
      <TextWrap>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </TextWrap>

      <Headline margin="20px 0 0 0">
        Test headline
      </Headline>
      <TextWrap>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </TextWrap>
    </TextBlock>

    <TextBlock>
      <Headline>
        Test headline
      </Headline>
      <TextWrap>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </TextWrap>
      <Headline margin="20px 0 0 0">
        Test headline
      </Headline>
      <TextWrap>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </TextWrap>  
    </TextBlock>
  </Row>
</template>
