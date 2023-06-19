import { GetStaticProps } from "next";
import url from "url";
import path from "path";
import fs from "fs";
import { Link } from "@chakra-ui/react";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Container, Heading, ListItem, UnorderedList } from "@chakra-ui/react";

type BlogLinkProps = {
    id: string;
    title: string;
}

export default function Blogs({
    blogLinks
} : {
    blogLinks: BlogLinkProps[];
}) {
    return (
        <>
            <Head>
                <title>My Blogs</title>
            </Head>
            <NavBar />
            <Container pt="5vh">
                <UnorderedList spacing={5}>
                    {blogLinks.map((blogLink) => {
                        const link = `/blogs/${blogLink.id}`

                        return (
                        <ListItem key={blogLink.id}>
                            <Link href={link}>
                                <Heading size="md">{blogLink.title}</Heading>
                            </Link>
                        </ListItem>
                    )})}
                </UnorderedList>
            </Container>
            <Footer />
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const blogsDirectory = path.join(process.cwd(), "markdown", "blogs");
    const filenames = fs.readdirSync(blogsDirectory);
    const blogLinks = filenames.map((filename) => ({
        id: filename.replace(/\.md$/, ""),
        title: filename.replace(/\.md$/, ""),
    }));
    return {
        props: {
            blogLinks
        }
    }
}