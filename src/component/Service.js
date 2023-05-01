import { Box, Container, Grid, createStyles, Text, Button, Center, Loader } from '@mantine/core'
import React, { useEffect } from 'react';
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
import p4 from "../assets/p4.png"
import p5 from "../assets/p5.png"
import { useNavigate } from 'react-router-dom';
import FooterSection from './FooterSection';
import NavBar from './NavBar';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useState } from 'react';

export default function Service() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)
    const { classes } = useStyle();

    const handleClick = () => {
        navigate("/")

    }
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    },)

    return (
        <>
            {
                loading ? (
                    <Box className={classes.loaderBox}>

                        <Loader color="#FF5829" variant="bars" className={classes.loaderBox2} />
                    </Box>

                ) : (<Box>


                    <NavBar />
                    <Box id="service" className={classes.service}>

                        <Grid m={0}>
                            <Grid.Col p={0} m={0} md={6} data-Aos="zoom-in">
                                <Box className={classes.serviceBox1}>
                                    <Text data-Aos="fade-up">
                                        Our <br /> Services  </Text>
                                </Box>
                            </Grid.Col >
                            <Grid.Col p={0} m={0} md={6} sm={12} data-Aos="zoom-in">
                                <Box className={classes.serviceBox2} >
                                    <Text data-Aos="fade-up">
                                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                                        <br />
                                        <button onClick={handleClick} className={classes.btn}>Get A Free Estimate</button>

                                    </Text>
                                </Box>

                            </Grid.Col>

                        </Grid >
                        <Box className={classes.containerService}>
                            <Container size="90%" mt={50} >

                                <Grid m={0} p={0}>
                                    <Grid.Col md={6} lg={6} data-Aos="zoom-in" >
                                        <img src={p2} alt="" />
                                        <Box >

                                            <Box px={25} py={50} data-Aos="fade-up">

                                                <Text style={{ fontSize: "32px", fontWeight: 700 }}> Local Moving</Text>
                                                <Text >I'm a paragraph. Click here to add your own
                                                    <br /> text and edit me. Let your users get to know you.</Text>
                                                <button onClick={handleClick} className={classes.btn}>Read more</button>

                                            </Box>


                                        </Box>
                                    </Grid.Col>
                                    <Grid.Col md={6} lg={6} data-Aos="zoom-in" >
                                        <Box >

                                            <img src={p3} alt="" />
                                            <Box px={25} py={50} data-Aos="fade-up">

                                                <Text style={{ fontSize: "32px", fontWeight: 700 }}> Local Moving</Text>
                                                <Text >I'm a paragraph. Click here to add your own
                                                    <br /> text and edit me. Let your users get to know you.</Text>
                                                <button onClick={handleClick} className={classes.btn}>Read more</button>

                                            </Box>


                                        </Box>
                                    </Grid.Col>
                                    <Grid.Col md={6} lg={6} data-Aos="zoom-in" >
                                        <Box >

                                            <img src={p4} alt="" />
                                            <Box px={25} py={50} data-Aos="fade-up">

                                                <Text style={{ fontSize: "32px", fontWeight: 700 }}> Local Moving</Text>
                                                <Text >I'm a paragraph. Click here to add your own
                                                    <br /> text and edit me. Let your users get to know you.</Text>
                                                <button onClick={handleClick} className={classes.btn}>Read more</button>

                                            </Box>


                                        </Box>
                                    </Grid.Col>
                                    <Grid.Col md={6} lg={5} data-Aos="zoom-in">
                                        <Box >

                                            <img src={p2} alt="" />
                                            <Box px={25} py={50} data-Aos="fade-up">

                                                <Text style={{ fontSize: "32px", fontWeight: 700 }}> Local Moving</Text>
                                                <Text >I'm a paragraph. Click here to add your own
                                                    <br /> text and edit me. Let your users get to know you.</Text>
                                                <button onClick={handleClick} className={classes.btn}>Read more</button>

                                            </Box>


                                        </Box>
                                    </Grid.Col>
                                </Grid>
                            </Container>
                        </Box>
                        <FooterSection />
                    </Box>

                </Box>)
            }
        </>
    )
}

const useStyle = createStyles((theme) => ({
    service: {
        height: "100vh",
        width: "100vw",
        // background: "red"
    },

    serviceBox1: {
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
    serviceBox2: {

        display: "flex",
        textAlign: "auto",
        justifyContent: "center",
        alignItems: "center",
        padding: "15%",
        "@media(max-width :991px)": {
            textAlign: "left",
        }
    },
    btn: {
        background: "#ff5829",
        borderRadius: "0",
        border: "none",
        padding: "20px",
        fontSize: "14px",
        marginTop: "2%",
        paddingInline: "25px",
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