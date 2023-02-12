
<template>
  <Row
    bg-image="header_bg.png"
    color="#4a4a52"
    bg-repeat
    center
  >
    <TextBlock
      align="center"
      max-width="600"
      margin="60px 40px"
    >
      <Headline
        color="#4a4a52"
        align="center"
        font-size="28"
        margin="60px 40px"
      >
        Default text block
      </Headline>

      <TextWrap
        color="#4a4a52"
        align="center"
        font-size="28"
        margin="60px 40px"
      >
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </TextWrap>
    </TextBlock>

    <ImageWrap
      src="test-img.jpg"
      margin="20px"
    />

    <VideoWrap src="playback.mp4"/>
  </Row>

  <ImageWrap src="test-img.jpg"/>
  <VideoWrap src="playback.mp4"/>

  <Row>
    <TextBlock>
      <Headline>
        Second row
      </Headline>
      <TextWrap>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </TextWrap>
    </TextBlock>
  </Row>
</template>
