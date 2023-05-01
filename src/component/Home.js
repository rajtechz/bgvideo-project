import { Box, Center, Grid, createStyles, Text, Flex, Container, } from '@mantine/core'
import React, { useEffect, useState } from 'react'

import vd from "../../src/assets/vd.mp4"
import p1 from "../assets/p1.jpg"
import FooterSection from './FooterSection'
import NavBar from './NavBar';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Loader } from '@mantine/core';

export default function Home() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    const { classes } = useStyle()



    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Perform some async operation
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);


    return (
        <>
            {loading ? (
                <Box className={classes.loaderBox}>

                    <Loader color="#FF5829" variant="bars" className={classes.loaderBox2}/>
                </Box>
            ) : (
                <div>


                    <NavBar />
                    <Box id='#' m={0} p={0}>
                        <Box className={classes.bgVideo} data-Aos="zoom-in">
                            <video className={classes.videoplayer} src={vd} autoPlay loop muted />

                            <Container size="90%">

                                <Grid className={classes.textOver}>

                                    <Grid.Col md={6} lg={6}>
                                        <Center>

                                            <Box className={classes.textContant} data-Aos="fade-up">
                                                Making Your Move Quick  & Easy

                                            </Box>
                                        </Center>

                                    </Grid.Col>
                                    <Grid.Col md={6} lg={6} >

                                    </Grid.Col>

                                    <Flex mt={50} sx={(theme => ({ '@media (max-width: 1280px)': { display: "none" } }))}>

                                        <Box className={classes.box2}>

                                            <Text fs={18} fw={600} data-Aos="fade-up">

                                                CALL US
                                            </Text>

                                            123-456-789

                                        </Box>
                                        <Box md={6} className={classes.box1}>

                                            <Text fs={18} fw={600} data-Aos="fade-up">

                                                START ONLINE
                                            </Text>

                                            Get a free moving
                                            <br /> quote in seconds
                                        </Box>

                                    </Flex>
                                </Grid>



                            </Container>
                        </Box >
                        <Container size="90%" data-Aos="zoom-in">
                            <Box style={{
                                height: "50vh",
                                // background: "red",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundImage: `url(${p1})`,

                                color: "black"
                            }}>
                                <Center style={{
                                    fontSize: "350%",
                                    verticalAlign: "middle",
                                    fontWeight: 700,
                                }}> <Text data-Aos="fade-up"> Movers You Can Trust</Text></Center>
                            </Box>
                            <Grid>
                                <Grid.Col md={4} lg={4} data-Aos="zoom-in">
                                    <Box style={{
                                        height: "20vh",
                                        background: "black",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}>
                                        <Text style={{
                                            verticalAlign: "middle",
                                            color: "#fff",
                                            fontSize: "32px"

                                        }}>

                                            Long Distance Moving
                                        </Text>
                                    </Box>
                                </Grid.Col>
                                <Grid.Col md={4} lg={4} data-Aos="zoom-in">
                                    <Box style={{
                                        height: "20vh",
                                        background: "#ff5829",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}>
                                        <Text style={{
                                            verticalAlign: "middle",
                                            color: "#fff",
                                            fontSize: "32px"

                                        }}>

                                            Full Value Insurance
                                        </Text>
                                    </Box>
                                </Grid.Col>
                                <Grid.Col md={4} lg={4} data-Aos="zoom-in">
                                    <Box style={{
                                        height: "20vh",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        background: "whitesmoke"
                                    }}>
                                        <Text style={{
                                            verticalAlign: "middle",

                                            fontSize: "32px"

                                        }}>


                                            95% Referral Rate
                                        </Text>
                                    </Box>
                                </Grid.Col>

                            </Grid>
                            <Box style={{
                                height: "50vh",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                                <Center style={{
                                    fontSize: "350%",
                                    verticalAlign: "middle",
                                    fontWeight: 700,
                                }}> <Text> Our Happy Customers</Text>

                                </Center>
                            </Box>
                            <Box style={{
           
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                                <Center style={{
                                    // fontSize: "350%",
                                    verticalAlign: "middle",
                                    // fontWeight: 700,
                                }}>
                                </Center>
                            </Box>
                        </Container>
                        <FooterSection />
                    </Box >
                </div>
            )}
        </>
    )
}
const useStyle = createStyles((theme) => ({

    bgVideo: {
        width: "100%",


    },
    videoplayer: {
        width: "inherit",
        zIndex: -1,
        position: "sticky",
        top: 0


    },
    textOver: {
        // background: "green",
        position: "absolute",
        top: "50%",
        // left: "8%",
        '@media (max-width: 768px)': {
            top: '20%',


        },


    },
    textContant: {
        fontWeight: 800,
        color: "#fff",
        fontSize: "80px",
        '@media (max-width: 768px)': {
            fontSize: "40px"

        },
    },
    box1: {
        background: "#ff5829",
        padding: "40px",
        "&:hover": {
            cursor: "pointer"
        }
    },
    box2: {
        background: "black",
        padding: "40px",

        color: '#fff',
        "&:hover": {
            cursor: "pointer"
        }
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