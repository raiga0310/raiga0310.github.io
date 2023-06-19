import { GetStaticProps } from "next";
import url from "url";
import path from "path";
import fs from "fs";
import Link from "next/link";
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
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
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
                        const parsedLink = url.parse(link);
                        const href: string = parsedLink.pathname?.replace(basePath, "") || "";

                        return (
                        <ListItem key={blogLink.id}>
                            <Link href={href}>
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
