import { Center, Flex, Text, List, Navbar, createStyles, Button, Drawer, Box, Burger, Group } from "@mantine/core";
import { useState } from "react";
import { useDisclosure } from '@mantine/hooks';
import { NavLink } from "react-router-dom";
export default function NavBar() {

    const [open, setOpen] = useState(false);


    const toggleDrawer = () => {
        setOpen((prev) => !prev);
    };
    const { classes } = useStyle()
    return (
        <>
            <Navbar className={classes.navbar}>
                <Box className={classes.headerBox}>
                    <Center>
                        <Box>
                            <Flex className={classes.quoteBox2}>
                                <Box>
                                    <NavLink to="/contact" className={classes.headerBox3}>Free Quote</NavLink>
                                </Box>
                            </Flex>
                        </Box>
                    </Center>
                </Box>
                <Box style={{ display: "flex", height: "100%", }}>
                    <Box className={classes.logoBox}>
                        <Center>
                            <Box>
                                <Flex className={classes.logoBox2}>
                                    <Box>
                                        <NavLink to="/contact" className={classes.logo}>Logo</NavLink>
                                    </Box>
                                </Flex>
                            </Box>
                        </Center>
                    </Box>

                    <Box className={classes.menubar}>
                        <Center>
                            <List>
                                <Flex className={classes.navcollection}>
                                    <List.Item>
                                        <NavLink to="/" className={classes.navitem}> Home</NavLink>
                                    </List.Item>
                                    <List.Item>
                                        <NavLink to="/about" className={classes.navitem}> About</NavLink>
                                    </List.Item>
                                    <List.Item>
                                        <NavLink to="/service" className={classes.navitem}> Service</NavLink>
                                    </List.Item>
                                    <List.Item>
                                        <NavLink to="/tips" className={classes.navitem}> Tips</NavLink>
                                    </List.Item>
                                    <List.Item>
                                        <NavLink to="/contact" className={classes.navitem}> Contact</NavLink>
                                    </List.Item>
                                </Flex>
                            </List>
                        </Center>
                    </Box>
                    <Box className={classes.togalBox}>
                        <Center >
                            <Box>
                                <Flex className={classes.togalBox2}>
                                    <Burger
                                        opened={open}
                                        onClick={() => setOpen((o) => !o)}

                                        color="#fff"
                                        zIndex={100}

                                    />


                                    <Drawer.Root
                                        opened={open}
                                        onClose={toggleDrawer}
                                        size={350}
                                        overlayProps={{ opacity: 0.4 }}
                                    >
                                        <Drawer.Content style={{ backgroundColor: "black", color: "#fff" }}>
                                            <Drawer.Header style={{ backgroundColor: "black" }}>
                                                {/* <Drawer.Title >Drawer title</Drawer.Title> */}
                                                <Drawer.CloseButton size="lg" style={{ color: "#fff", background: "none" }} />
                                            </Drawer.Header>
                                            <Drawer.Body>
                                                {/* <Center> */}
                                                <List>

                                                    <List.Item>
                                                        <NavLink to="/" className={classes.drawerItem} > Home</NavLink>
                                                    </List.Item>
                                                    <List.Item>
                                                        <NavLink to="/about" className={classes.drawerItem}> About</NavLink>
                                                    </List.Item>
                                                    <List.Item>
                                                        <NavLink to="/service" className={classes.drawerItem}> Service</NavLink>
                                                    </List.Item>
                                                    <List.Item>
                                                        <NavLink to="/tips" className={classes.drawerItem}> Tips</NavLink>
                                                    </List.Item>
                                                    <List.Item>
                                                        <NavLink to="/contact" className={classes.drawerItem}> Contact</NavLink>
                                                    </List.Item>

                                                </List>
                                                {/* </Center> */}
                                            </Drawer.Body>
                                        </Drawer.Content>

                                    </Drawer.Root>



                                </Flex>
                            </Box>
                        </Center>
                    </Box>
                    <Box className={classes.quote}>
                        <Center>
                            <Box>
                                <Flex className={classes.quoteBox2}>
                                    <Box>
                                        <NavLink to="/contact" className={classes.quoteBox3}>Free Quote</NavLink>
                                    </Box>
                                </Flex>
                            </Box>
                        </Center>
                    </Box>
                </Box>
            </Navbar>
        </>
    );
}

const useStyle = createStyles((theme) => ({
    navbar: {
        background: "black",
        color: "#fff",
        height: "10%",
        top: 0,
        position: "sticky",
        zIndex: 3

    },
    menubar: {
        height: "100%", width: "60%",
        '@media (max-width: 768px)': {
            display: "none",

        },
    },
    logoBox: {
        width: "20%",
        // background: "red",
        listStyle: "none",

    }, logoBox2: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "10vh",

    },
    logo: {
        cursor: "pointer",
        listStyle: "none",
        textDecoration: "none",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: "30px",
        fontWeight: 700,
        color: "#ff5829",
        '@media (max-width: 768px)': {
            marginLeft: "50px"
        },
    },

    navitem: {
        cursor: "pointer",
        listStyle: "none",
        textDecoration: "none",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",

     
        "&:hover": {
            color: "#FF5829"
        },
    },

    drawerItem: {

        listStyle: "none",
        textDecoration: "none",
        padding: `10px`,
        color: "#fff",
        fontSize: "25px"

    },


    navcollection: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "10vh",
        gap: "20px",
        width: "80%",
        margin: 0,
        padding: 0,

    },
    quote: {
        width: "20%",
        background: "#ff5829",
        listStyle: "none",
        "&:hover": {
            cursor: "pointer"
        },
        '@media (max-width: 768px)': {
            display: "none"

        },
    },
    headerBox: {

        background: "#ff5829",
        listStyle: "none",
        display: "none",
        '@media (max-width: 768px)': {
            display: "block"
        },
    },


    headerBox2: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
    },

    headerBox3: {
        listStyle: "none",
        textDecoration: "none",
        fontSize: "14px",
        fontWeight: 700,
        color: "black",

    },


    togalBox: {
        width: "20%",
        display: "none",
        listStyle: "none",
        '@media (max-width: 768px)': {
            display: "block",
        },
    },
    togalBox2: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "10vh",
        position: "absolute",
        // background :"green",

        right: "10px",

    },


    quoteBox2: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "10vh",
        "&:hover": {

            cursor: "pointer",
        }
    },


    quoteBox3: {
        cursor: "pointer",
        listStyle: "none",
        textDecoration: "none",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: "14px",
        fontWeight: 700,
        color: "black",
        cursor: "pointer",
        '@media (max-width: 768px)': {
            marginLeft: "50px"
        },
    }

}))