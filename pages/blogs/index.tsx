import { GetStaticProps } from "next";
import path from "path";
import fs from "fs";
import { Link } from "@chakra-ui/react";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Container, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import MarkdownContent from "../../components/MarkdownContent";

type BlogLinkProps = {
    id: string;
    title: string;
}

export default function Blogs({
    blogLinks,
    markdown
} : {
    blogLinks: BlogLinkProps[];
    markdown: string;
}) {
    return (
        <>
            <Head>
                <title>My Blogs</title>
            </Head>
            <NavBar />
            <Container pt="5vh">
                <MarkdownContent text-align="center" markdown={markdown} />
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
    // Get markdown content blogs.md
    const markdownDirectory = path.join(process.cwd(), "markdown");
    const markdownFilename = "blogs.md";
    const markdownPath = path.join(markdownDirectory, markdownFilename);
    const markdown = fs.readFileSync(markdownPath, "utf-8");
    const blogsDirectory = path.join(process.cwd(), "markdown", "blogs");
    const filenames = fs.readdirSync(blogsDirectory);
    const blogLinks = filenames.map((filename) => ({
        id: filename.replace(/\.md$/, ""),
        title: filename.replace(/\.md$/, ""),
    }));
    return {
        props: {
            blogLinks,
            markdown
        }
    }
}
