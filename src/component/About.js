import { Box, Center, Grid, Loader, Text, createStyles } from '@mantine/core'
import React, { useEffect, useState } from 'react';
// import p1 from "../assets/p1.jpg"
import p2 from "../assets/p2.png"
import FooterSection from './FooterSection';
import NavBar from './NavBar';
import 'aos/dist/aos.css';
import Aos from 'aos';


const useStyle = createStyles((theme) => ({
    mainBox: {
        height: "100vh",
        width: "100vw",
    },
    aboutBox1: {
        background: "#ff5829",
        color: "#fff",
        fontWeight: 700,
        padding: "15%",
        display: "flex",
        fontSize: "300%",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        "@media(max-width :991px)": {
            textAlign: "left",
        }

    },
    aboutBox2: {

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
        fontSize: "32px",
        fontWeight: 700
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

export default function About() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    const { classes } = useStyle()

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <>

            {loading ? (
                <Box className={classes.loaderBox}>

                    <Loader color="#FF5829" variant="bars" className={classes.loaderBox2} />
                </Box>
            ) : (
                <div>




                    <NavBar />

                    <Box data-Aos="fade-up" id='about' className={classes.mainBox}>

                        <Grid m={0}>
                            <Grid.Col p={0} m={0} md={6} data-aos="zoom-in">
                                <Box className={classes.aboutBox1} >
                                    <Text data-aos="fade-up">About    Fly Right   <br />  Movers  </Text>
                                </Box>
                            </Grid.Col >
                            <Grid.Col p={0} m={0} md={6} sm={12} data-aos="zoom-in">
                                <Box className={classes.aboutBox2} >
                                    <Text data-aos="fade-up">
                                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                                        <br /> <br />
                                        This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
                                    </Text>
                                </Box>

                            </Grid.Col>

                        </Grid >

                        <Center data-aos="zoom-in" mt={50} sx={(theme) => ({
                            fontSize: "300%",
                            fontWeight: 700,
                            paddingInline: "15%"

                        })}>Our Moving Process</Center>

                        <Grid p={0} m={0} mt={50} >
                            <Grid.Col p={0} m={0} md={3} lg={3} data-aos="zoom-in">
                                <Box sx={(theme) => ({
                                    background: "black",
                                    color: "#fff",
                                    textAlign: "center",
                                    display: "flex",
                                    justifyContent: "center",
                                    padding: "20%"


                                })}>
                                    <Text data-aos="fade-up">
                                        <span className={classes.aboutPacking}>
                                            STEP 1
                                        </span>
                                        <br />
                                        <span className={classes.aboutPacking2}>

                                            Planing
                                        </span>
                                    </Text>
                                </Box>
                            </Grid.Col>
                            <Grid.Col p={0} m={0} md={3} lg={3} data-aos="zoom-in">
                                <Box
                                    sx={(theme) => ({
                                        textAlign: "center",
                                        display: "flex",
                                        justifyContent: "center",
                                        padding: "20%"
                                    })}
                                >
                                    <Text data-aos="fade-up">
                                        <span className={classes.aboutPacking}>
                                            STEP 2
                                        </span>
                                        <br />
                                        <span className={classes.aboutPacking2}>

                                            Packing
                                        </span>
                                    </Text>
                                </Box>
                            </Grid.Col>
                            <Grid.Col p={0} m={0} md={3} lg={3} data-aos="zoom-in">
                                <Box sx={(theme) => ({
                                    background: "whitesmoke",
                                    textAlign: "center",
                                    display: "flex",
                                    justifyContent: "center",
                                    padding: "20%"
                                })}>
                                    <Text data-aos="fade-up">
                                        <span className={classes.aboutPacking}>
                                            STEP 3
                                        </span>
                                        <br />
                                        <span className={classes.aboutPacking2}>

                                            Moving
                                        </span>
                                    </Text>
                                </Box>
                            </Grid.Col>
                            <Grid.Col p={0} m={0} md={3} lg={3} data-aos="zoom-in">
                                <Box sx={(theme) => ({
                                    background: "#ff5829",
                                    textAlign: "center",
                                    display: "flex",
                                    justifyContent: "center",
                                    padding: "20%"
                                })}>
                                    <Text data-aos="fade-up">
                                        <span className={classes.aboutPacking}>
                                            STEP 4
                                        </span>
                                        <br />
                                        <span className={classes.aboutPacking2}>

                                            Unpacking
                                        </span>
                                    </Text>
                                </Box>
                            </Grid.Col>
                        </Grid>

                        <Box data-aos="zoom-in" p="15%" style={{
                            backgroundImage: `url(${p2})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100vw 100vh",

                        }}>
                            <Center> <Text style={{ fontSize: "350%", fontWeight: 700, color: "#fff" }} >Our Quality Guarantee</Text></Center>
                            <Center>
                                <Text style={{ textAlign: "left", justifyContent: "auto", color: "#fff" }}>

                                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                                </Text>
                            </Center>
                        </Box>



                        <FooterSection />

                    </Box>

                </div>
            )}
        </>
    )
}
