import { Box, Center, Container, Grid, Loader, Text, createStyles } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import FooterSection from './FooterSection'
import 'aos/dist/aos.css';
import Aos from 'aos';
import NavBar from './NavBar'
const useStyle = createStyles((theme) => ({
  tips: {
    height: "100vh",
    width: "100vw",
  },
  tipsBox1: {
    background: "#ff5829",
    color: "#fff",
    fontWeight: 900,
    padding: "15%",
    display: "flex",
    fontSize: "350%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    "@media(max-width :991px)": {
      textAlign: "left",


    }

  },
  tipsBox2: {
    display: "flex",
    textAlign: "auto",
    justifyContent: "center",
    alignItems: "center",
    padding: "15%",
    "@media(max-width :991px)": {
      textAlign: "left",
    }
  },
  aboutPacking: {
    fontSize: "18px",
    fontWeight: 700
  },
  aboutPacking2: {
    // fontSize: "32px",
    // fontWeight: 700
  },
  loaderBox: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loaderbox2: {
    verticalAlign: "middle",
  },

}))
export default function Tips() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  const { classes } = useStyle()

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      {
        loading ? (
          <Box className={classes.loaderBox}>

            <Loader color="#FF5829" variant="bars" className={classes.loaderBox2} />
          </Box>

        ) : (
          <Box>
            <NavBar />
            <Box id='tips' className={classes.tips}>
              <Grid m={0} p={0}>
                <Grid.Col p={0} m={0} md={6} data-Aos="zoom-in">
                  <Box className={classes.tipsBox1}>
                    <Text data-Aos="fade-up" >
                      Moving <br /> Tips</Text>
                  </Box>
                </Grid.Col >
                <Grid.Col p={0} m={0} md={6} sm={12} data-Aos="zoom-in">
                  <Box className={classes.tipsBox2} >
                    <Text data-Aos="fade-up">
                      I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                    </Text>
                  </Box>
                </Grid.Col>
              </Grid >
              <Container size="90%" mt={50}>
                <Grid p={0} m={0} mt={50} >
                  <Grid.Col md={6} lg={6} data-Aos="zoom-in">
                    <Box sx={(theme) => ({
                      background: "black",
                      color: "#fff",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      padding: "15%"


                    })}>
                      <Text data-Aos="fade-up">
                        <span className={classes.aboutPacking}>
                          MAKE A LIST
                        </span>
                        <br />
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                      </Text>
                    </Box>
                  </Grid.Col>
                  <Grid.Col md={6} lg={6} data-Aos="zoom-in">
                    <Box sx={(theme) => ({
                      background: "#ff5829",
                      color: "#fff",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      padding: "15%"


                    })}>
                      <Text data-Aos="fade-up">
                        <span className={classes.aboutPacking}>

                          SAY GOODBYE TO UNUSED STUFF
                        </span>
                        <br />
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                      </Text>
                    </Box>
                  </Grid.Col><Grid.Col md={6} lg={6} data-Aos="zoom-in">
                    <Box sx={(theme) => ({
                      background: "#ff5829",
                      color: "#fff",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      padding: "15%"


                    })}>
                      <Text data-Aos="fade-up">
                        <span className={classes.aboutPacking}>

                          GET STURDY, UNIFORM PACKING SUPPLIES
                        </span>
                        <br />
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                      </Text>
                    </Box>
                  </Grid.Col>
                  <Grid.Col md={6} lg={6} data-Aos="zoom-in">
                    <Box sx={(theme) => ({
                      background: "black",
                      color: "#fff",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      padding: "15%"


                    })}>
                      <Text data-Aos="fade-up">
                        <span className={classes.aboutPacking}>
                          PACK THE BASICS YOURSELF
                        </span>
                        <br />
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                      </Text>
                    </Box>
                  </Grid.Col>



                </Grid>

              </Container>
              <Box mt={50}>

                <FooterSection />
              </Box>
            </Box>
          </Box>


        )
      }
    </>
  )
}
