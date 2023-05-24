import ReactMarkdown, { Components } from "react-markdown";
import { 
    Box, 
    Container,
    Heading, 
    List, 
    ListItem, 
    Code, 
    Link, 
    Image, 
    Table, 
    Thead, 
    Tbody, 
    Tr, 
    Th, 
    Td, 
    Divider, 
    Text
 } from "@chakra-ui/react";
import { GoLinkExternal } from "react-icons/go";

 const components: Components = {
     h1: ({ node, ...props }) => <Heading as="h1" size="xl" {...props} />,
     h2: ({ node, ...props }) => <Heading as="h2" size="lg" {...props} />,
     h3: ({ node, ...props }) => <Heading as="h3" size="md" {...props} />,
     blockquote: ({ node, ...props }) => <Box as="blockquote" p="1rem" borderLeft="4px solid #ddd" {...props} />,
     ul: ({ node, ...props }) => <List spacing={3} styleType="disc" paddingLeft={5} {...props} />,
     ol: ({ node, ...props }) => <List as="ol" spacing={3} styleType="decimal" paddingLeft={5} {...props} />,
     li: ({ node, ...props }) => <ListItem {...props} />,
     pre: ({ node, ...props }) => <Box as="pre" p="1rem" {...props} />,
     code: ({ node, ...props }) => <Code {...props} />,
     a: ({ node, ...props }) => <Box ><Link color="teal.500" {...props} /><GoLinkExternal/></Box>,
     img: ({ node, ...props }) => <Image {...props} />,
     table: ({ node, ...props }) => <Table {...props} />,
     thead: ({ node, ...props }) => <Thead {...props} />,
     tbody: ({ node, ...props }) => <Tbody {...props} />,
     tr: ({ node, ...props }) => <Tr {...props} />,
     th: ({ node, ...props }) => <Th {...props} />,
     td: ({ node, ...props }) => <Td {...props} />,
     hr: ({ node, ...props }) => <Divider {...props} />,
     p: ({ node, ...props }) => <Text {...props} />,
 };
 
interface MarkdownContentProps {
    markdown: string;
};

export default function MarkdownContent ({ markdown }: MarkdownContentProps) {
    return (
        <Container ml={4}><ReactMarkdown components={components}>{ markdown }</ReactMarkdown></Container>
    );
};
